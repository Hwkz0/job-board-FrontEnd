import '../../css/panel/HomePagePanel.css';
import * as React from "react";
import Card from "react-bootstrap/Card";
import HomePageTitle from "../titles/HomePageTitle";
import HomePageCategories from "../cards/HomePageCategories";
import HomePageHero from "./HomePageHero";
import {Col, Row} from "react-bootstrap";

export default function HomePagePanel() {

    return (

        <div className={"home-page-general-container"}>

            <Card className={"home-page-panel"}>

                <Card.Body>
                    <Row >
                        <Col md={5}>
                            <div>
                    <HomePageTitle/>  {/*TODO: MAKE FONT RESPONSIVE ADD BETTER FONT*/}

                    <HomePageCategories/>
                            </div>
                        </Col>

                        <Col md={7}>
                            <HomePageHero/>
                        </Col>
                    </Row>
                </Card.Body>


            </Card>

        </div>

    );
}