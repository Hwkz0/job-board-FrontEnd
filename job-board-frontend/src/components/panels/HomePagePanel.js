import '../../css/panel/HomePagePanel.css';
import * as React from "react";
import Card from "react-bootstrap/Card";
import HomePageTitle from "../HomePageTitle";
import HomePageCategories from "../HomePageCategories";

export default function HomePagePanel() {

    return (

        <div className={"home-page-general-container"}>

            <Card className={"home-page-panel"}>

                <Card.Body>

                    <HomePageTitle/>

                    <HomePageCategories/>

                </Card.Body>


            </Card>

        </div>

    );
}