import React from "react";
import { Component } from "react";
import AppBar from "./Components/AppBar.js";
import Footer from "./Components/Footer.js";
import MapComp from "./Components/MapComp.js";
import SearchBar from "./Components/SearchBar.js";
import "./App.css";

export default class App extends Component {
  state = {
    textFieldAddress: "test"
  };

  callbackFunction = childData => {
    this.setState({ textFieldAddress: childData });
  };

  render() {
    return (
      <div>
        <AppBar />
        <SearchBar parentCallback={this.callbackFunction} />

        <div
          className="App"
          style={{
            alignItems: "stretch",
            justifyContent: "center",
            alignSelf: "stretch"
          }}
        >
          <MapComp searchBarTerm={this.state.textFieldAddress} />
        </div>
        <Footer />
      </div>
    );
  }
}
