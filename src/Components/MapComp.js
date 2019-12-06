import React, { Component } from "react";
import MapGL, { Marker, Popup, NavigationControl } from "react-map-gl";
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

export default class MapComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewport: {
        latitude: 37.5,
        longitude: -96,
        zoom: 3.8,
        bearing: 0,
        pitch: 1,
        width: "wrap",
        height: 700
      },
      marker: {
        latitude: 40,
        longitude: -96
      },
      events: {},
      popupInfo: "Drag me!",
      address: ""
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.searchBarTerm !== this.props.searchBarTerm) {
      this.setState({ address: this.props.searchBarTerm }, () => {
        this.forwardGeocode();
      });
    }
  }

  forwardGeocode = () => {
    axios
      .get(
        "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
          this.state.address +
          ".json?access_token=" +
          TOKEN
      )
      .then(res => {
        console.log(res);
        let long = res.data.features[0].center[0];
        let lat = res.data.features[0].center[1];
        let event = { lngLat: [long, lat] };
        this.onMarkerDragEnd(event);

        let updatedViewport = {
          latitude: event.lngLat[1],
          longitude: event.lngLat[0],
          zoom: 10,
          bearing: 0,
          pitch: 1,
          width: "wrap",
          height: 700
        };
        this.updateViewport(updatedViewport);
      });
  };

  updateViewport = viewport => {
    this.setState({ viewport });
  };

  logDragEvent(name, event) {
    this.setState({
      events: {
        ...this.state.events,
        [name]: event.lngLat
      }
    });
  }

  /**This happens when the user drops the red marker on a location */
  onMarkerDragEnd = event => {
    this.logDragEvent("onDragEnd", event);

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
          //let address = res.data.features[0].place_name;
          this.setState(
            {
              address: res.data.features[0].place_name,

              marker: {
                longitude: event.lngLat[0],
                latitude: event.lngLat[1]
              }
            },
            () => {
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
                      popupInfo:
                        "There is no voting information for this address."
                    });
                  } else {
                    this.setState({
                      popupInfo:
                        "The polling place for " +
                        this.state.address +
                        " is " +
                        res.data.pollingLocations[0].address.locationName
                    });
                  }
                  console.log(this.state.address);
                });
            }
          );
        }
      });

    /**Check for the polling location of the found address */
  };

  renderPopup() {
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
        {this.renderPopup()}
        <Marker
          longitude={marker.longitude}
          latitude={marker.latitude}
          draggable
          onDragEnd={this.onMarkerDragEnd}
        >
          <Pin size={25} />
        </Marker>

        <div className="nav" style={navStyle}>
          <NavigationControl onViewportChange={this.updateViewport} />
        </div>
      </MapGL>
    );
  }
}
