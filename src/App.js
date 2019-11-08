import React from "react";
import { Component } from "react";
import MapComp from "./MapComp.js";
import "./App.css";

export default class App extends Component {
  render() {
    return (
      <div>
        <div
          className="App"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <MapComp />
        </div>
      </div>
    );
  }
}
