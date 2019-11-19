import React from "react";
import { Component } from "react";
import AppBar from "./Components/AppBar.js";
import Footer from "./Components/Footer.js";
import MapComp from "./Components/MapComp.js";
import "./App.css";

export default class App extends Component {
  render() {
    return (
      <div>
        <AppBar/>
        <div
          className="App"
          style={{
            // display: "flex",
            alignItems: "stretch",
            justifyContent: "center",
            alignSelf: "stretch"
          }}
        >
          <MapComp />
        </div>
        <Footer/>
      </div>
    );
  }
}
