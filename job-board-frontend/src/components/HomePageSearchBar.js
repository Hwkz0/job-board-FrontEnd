import React from "react";
import '../css/HomePageSearchBar.css';
import {Button, FormControl} from "react-bootstrap";

export default function HomePageSearchBar () {
    return (

        <div className="searchBox">
            <FormControl className="searchInput" type="text" name="" placeholder="Job search ..." />

            <Button className="searchButton" href="#">
                <div className={"searchIcon"}>Start</div>
            </Button>

        </div>
    );
};


