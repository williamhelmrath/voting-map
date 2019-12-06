import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

// UI/CSS imports
import AppBar from "./Components/AppBar.js";
import Footer from "./Components/Footer.js";
import "./App.css";

// router imports
import Home from "./Components/Home.js";
import Group from "./Components/Group.js";
import pollLocation from "./Components/pollLocation.js";

export default class App extends Component {

  render() {
    return (
      <div>
        <AppBar />

        <BrowserRouter>
          <div>
            <Route path="/" component={Home} exact />
            <Route path="/map" component={pollLocation} exact />
            <Route path="/group" component={Group} exact />
          </div>
        </BrowserRouter>

        <Footer />
      </div>
    );
  }
}