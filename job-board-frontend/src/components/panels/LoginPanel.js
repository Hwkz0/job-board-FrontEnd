import '../../css/panel/LoginPanel.css';
import * as React from "react";
import Card from "react-bootstrap/Card";
import {Col, Row} from "react-bootstrap";
import LoginCard from "../cards/LoginCard";
import LoginHero from "./LoginHero";

export default function LoginPanel() {

    return (

        <div className={"login-page-general-container"}>

            <Card className={"login-page-panel"}>

                <Card.Body >
                    <Row>
                        <Col className={"login-page-hero-container"}>
                                <LoginHero/>
                        </Col>

                        <Col className={"login-page-login-card-container"}>
                            <LoginCard/>
                        </Col>
                    </Row>
                </Card.Body>


            </Card>

        </div>

    );
}