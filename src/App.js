import React from "react";
import { Component } from "react";
import MapComp from "./MapComp.js";
import AppBar from "./AppBar.js";
import Footer from "./Footer.js";
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
