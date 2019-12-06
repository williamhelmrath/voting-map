import React, { Component } from "react";
import MapComp from "./MapComp.js";
import SearchBar from "./SearchBar.js";
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

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

            <Container maxWidth="lg" component="main" style={{padding:"65px"}}>
                <Typography
                    component="h1"
                    variant="h2"
                    align="center"
                    color="textPrimary"
                    gutterBottom
                >
                    Find Your Poll Location
                </Typography>
                <Typography
                    variant="h5"
                    align="center"
                    color="textSecondary"
                    component="p"
                >
                    Drag the marker on the map to any location OR type your address in the search bar and click the icon
                </Typography>
            </Container>

            <SearchBar parentCallback={this.callbackFunction} /> <br></br><br></br>

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