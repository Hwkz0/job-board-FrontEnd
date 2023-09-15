import * as React from "react";
import Card from "react-bootstrap/Card";
import {Col, Row} from "react-bootstrap";
import LoginCard from "../cards/LoginCard";
import LoginHero from "./LoginHero";

export default function LoginPanel() {

    const loginPanelGeneralContainerStyle = {
        display: "flex",
        justifyContent: "left",
    };

    const loginPagePanelStyle = {
        backgroundSize: "cover",
        background: "var(--bg-secondary)",
        color: "var(--text-color)",
        height: "100vh",
        width: "100vw",
        borderRadius: "0",
        padding: "0",
        overflow: "hidden",
    };

    const loginPageLoginCardContainerStyle = {
        display: "flex",
        justifyContent: "right",
        alignItems: "center",
        overflow: "hidden",
        margin: "0",
        padding: "0",
    };

    const loginPageHeroContainerStyle = {
        height: "100vh",
        margin: "0",
    }


    return (

        <div
            style={loginPanelGeneralContainerStyle}>

            <Card
                style={loginPagePanelStyle}>

                <Card.Body>

                    <Row>

                        <Col
                            style={loginPageHeroContainerStyle}>

                                <LoginHero/>

                        </Col>

                        <Col
                            style={loginPageLoginCardContainerStyle}>

                            <LoginCard/>

                        </Col>

                    </Row>

                </Card.Body>

            </Card>

        </div>

    );
}