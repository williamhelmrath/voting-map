import React, { Component } from "react";
import MapGL, { Marker, Popup, NavigationControl } from "react-map-gl";
import ControlPanel from "./ControlPanel";
import Pin from "./Pin";
const TOKEN = process.env.REACT_APP_MAPBOX_TOKEN;
const GOOGLE_TOKEN = process.env.REACT_APP_GOOGLE_TOKEN;
const navStyle = {
  position: "absolute",
  top: 0,
  left: 0,
  padding: "10px"
};

const axios = require("axios");

/*
Trying to make these functions asynchronous so they work in the body of the Component. I've just stuck them into the component for now, hopefully I'll figure it out.
*/
// async function getAddress(long, lat) {
//   try {
//     axios
//       .get(
//         "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
//           long +
//           "," +
//           lat +
//           ".json?access_token=" +
//           TOKEN
//       )
//       .then(res => {
//         let address = res.data.features[0].place_name;
//         console.log(address);
//         return address;
//       });
//   } catch (error) {
//     console.log(error);
//     return null;
//   }
// }

// const getPollingPlace = address => {
//   try {
//     axios
//       .get(
//         // "https://www.googleapis.com/civicinfo/v2/voterinfo?address=" +
//         //   address +
//         //   "&electionId=2000&key=" +
//         //   GOOGLE_TOKEN
//         "https://www.googleapis.com/civicinfo/v2/voterinfo?address=43503%20Cross%20Breeze%20Place%2C%20Ashburn%20VA&electionId=2000&key=" +
//           GOOGLE_TOKEN
//       )
//       .then(res => {
//         console.log(res.pollingLocations[0].locationName);
//       });
//   } catch (error) {}
// };

export default class MapComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewport: {
        latitude: 40,
        longitude: -96,
        zoom: 2.5,
        bearing: 0,
        pitch: 1,
        width: 1200,
        height: 600
      },
      marker: {
        latitude: 40,
        longitude: -96
      },
      events: {},
      popupInfo: null,
      address: ""
    };
  }

  _updateViewport = viewport => {
    this.setState({ viewport });
  };

  _logDragEvent(name, event) {
    this.setState({
      events: {
        ...this.state.events,
        [name]: event.lngLat
      }
    });
  }

  /**This happens when the user drops the red marker on a location */
  _onMarkerDragEnd = event => {
    this._logDragEvent("onDragEnd", event);

    /**Check to see if there is a street address tied to the current location of the pin*/
    axios
      .get(
        "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
          event.lngLat[0] +
          "," +
          event.lngLat[1] +
          ".json?access_token=" +
          TOKEN
      )
      .then(res => {
        //If there is no valid address, output that to the popup info
        if (res.data.features.length === 0) {
          this.setState({
            popupInfo: "This is not a valid address"
          });
        } else {
          let address = res.data.features[0].place_name;
          this.setState({
            address: address
          });

          this.setState({
            marker: {
              longitude: event.lngLat[0],
              latitude: event.lngLat[1]
            }
          });
        }
      });

    /**Check for the polling location of the found address */
    axios
      .get(
        "https://www.googleapis.com/civicinfo/v2/voterinfo?address=" +
          this.state.address +
          "&electionId=2000&key=" +
          GOOGLE_TOKEN
      )
      .then(res => {
        //If no polling location data exists, output error in the popup
        if (!res.data.pollingLocations) {
          this.setState({
            popupInfo: "There is no voting information for this address."
          });
        } else {
          let pollingPlace = res.data.pollingLocations[0].address.locationName;
          this.setState({
            popupInfo:
              "The polling place for " +
              this.state.address +
              " is " +
              pollingPlace
          });
        }
        console.log(this.state.address);
      });
  };

  _renderPopup() {
    return (
      <Popup
        tipSize={5}
        anchor="top"
        longitude={this.state.marker.longitude}
        latitude={this.state.marker.latitude}
        closeOnClick={false}
        onClose={() => this.setState({ popupInfo: "" })}
      >
        {this.state.popupInfo}
      </Popup>
    );
  }
  render() {
    const { viewport, marker } = this.state;
    return (
      <MapGL
        {...viewport}
        mapStyle="mapbox://styles/mapbox/light-v9"
        mapboxApiAccessToken={TOKEN}
        onViewportChange={viewport => this.setState({ viewport })}
      >
        {this._renderPopup()}
        <Marker
          longitude={marker.longitude}
          latitude={marker.latitude}
          draggable
          onDragEnd={this._onMarkerDragEnd}
        >
          <Pin size={25} />
        </Marker>

        <div className="nav" style={navStyle}>
          <NavigationControl onViewportChange={this._updateViewport} />
        </div>
        <ControlPanel
          containerComponent={this.props.containerComponent}
          events={this.state.events}
        />
      </MapGL>
    );
  }
}
