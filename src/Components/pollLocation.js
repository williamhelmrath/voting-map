import React from "react";
import MapComp from "./MapComp.js";
import SearchBar from "./SearchBar.js";

const pollLocation = () => {

    let state = {
        textFieldAddress: "null"
      };

    let callbackFunction = childData => {
        this.setState({ textFieldAddress: childData }, () => {
        });
      };

    return (
        <div>
            <h1>"MapBox" page</h1>

            <SearchBar parentCallback={callbackFunction}/> <br></br>

            <div
                style={{
                    alignItems: "stretch",
                    justifyContent: "center",
                    alignSelf: "stretch"
                }}
            >
                <MapComp searchBarTerm={state.textFieldAddress} />
            </div>

            {/* <div class="static_image"></div> */}
            
        </div>
    );
};

export default pollLocation;