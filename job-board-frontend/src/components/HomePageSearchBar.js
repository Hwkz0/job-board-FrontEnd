import React from "react";
import '../css/HomePageSearchBar.css';
import {Button, FormControl} from "react-bootstrap";

export default function HomePageSearchBar () {
    return (

        <div className="searchBox">
            <FormControl className="searchInput" type="text" name="" placeholder="" />
            <Button className="searchButton" href="#">
                Search
            </Button>
        </div>
    );
};


