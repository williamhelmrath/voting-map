import React, { Component } from "react";
import SearchIcon from "@material-ui/icons/Search";
import { TextField, Grid, IconButton } from "@material-ui/core";

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      address: ""
    };
  }
  getSearchTerm = () => {
    this.props.parentCallback(this.state.address);
  };

  updateAddress(event) {
    this.setState({
      address: event.target.value
    });
  }

  render() {
    return (
      <div>
        <Grid container spacing={1} justify="center" alignItems="center">
          <Grid item>
            <TextField
              className="textfield"
              id="outlined-basic"
              label="Your address"
              value={this.state.address}
              onChange={event => this.updateAddress(event)}
            />
          </Grid>
          <Grid item>
            <IconButton
              aria-label="search"
              onClick={() => this.getSearchTerm()}
            >
              <SearchIcon />
            </IconButton>
          </Grid>
        </Grid>
      </div>
    );
  }
}
