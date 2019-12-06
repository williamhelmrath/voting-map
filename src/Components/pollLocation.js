import React, { Component } from "react";

// UI/CSS imports
import MapComp from "./MapComp.js";
import SearchBar from "./SearchBar.js";

export default class pollLocation extends Component {

  state = {
    textFieldAddress: "null"
  };

  callbackFunction = childData => {
    this.setState({ textFieldAddress: childData });
  };

  render() {
    return (
      <div>

        <SearchBar parentCallback={this.callbackFunction} />

        <div
          style={{
            alignItems: "stretch",
            justifyContent: "center",
            alignSelf: "stretch"
          }}
        >
          <MapComp searchBarTerm={this.state.textFieldAddress} />
        </div>
      </div>
    );
  }
}