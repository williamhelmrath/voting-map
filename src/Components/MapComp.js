import React, { Component } from "react";
import MapGL, { Marker, Popup, NavigationControl } from "react-map-gl";
import ControlPanel from "./ControlPanel";
import Pin from "./Pin";
const TOKEN = process.env.REACT_APP_MAPBOX_TOKEN;
const navStyle = {
  position: "absolute",
  top: 0,
  left: 0,
  padding: "10px"
};

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
      popupInfo: null
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

  _onMarkerDragEnd = event => {
    this._logDragEvent("onDragEnd", event);
    this.setState({
      marker: {
        longitude: event.lngLat[0],
        latitude: event.lngLat[1]
      }
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
        onClose={() => this.setState({ popupInfo: null })}
      >
        {this.state.popupInfo}
      </Popup>
    );
  }
  render() {
    console.log(process.env);
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
          <Pin
            size={25}
            onClick={() =>
              this.setState({
                popupInfo:
                  "The Voting Location for " +
                  Math.round(this.state.marker.longitude) +
                  ", " +
                  Math.round(this.state.marker.latitude) +
                  " is: "
              })
            }
          />
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
