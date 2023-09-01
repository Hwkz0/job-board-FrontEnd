import * as React from "react";
import Card from "react-bootstrap/Card";
import HomePageTitle from "../titles/HomePageTitle";
import HomePageCategories from "../cards/HomePageCategories";
import HomePageHero from "./HomePageHero";
import {Col, Row} from "react-bootstrap";

export default function HomePagePanel() {

    const homePagePanelStyle = {
        backgroundSize: "cover",
        background: "linear-gradient(70deg, #242526, #242526, #242526, rgba(5, 43, 10, 0.91), " +
                                                " #242526, #242526, #242526, #242526, #242526, " +
                                                " #242526, rgba(67, 36, 94, 0.87), #242526) ",
        position: "absolute",
        color: "var(--text-color)",
        height: "100vh",
        width: "100vw",
        borderRadius: "0",
        margin: "0",
        padding: "0",
        overflow: "hidden",
    };



    return (


            <Card
                style={homePagePanelStyle}>

                <Card.Body>

                    <Row>

                        <Col
                            md={5}>

                            <div>

                                <HomePageTitle/>

                                <HomePageCategories/>

                            </div>

                        </Col>

                        <Col
                            md={7}>

                            <HomePageHero/>

                        </Col>

                    </Row>

                </Card.Body>

            </Card>

    );
}