import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import HomePageSearchBar from "../searchbar/HomePageSearchBar";

export default function HomePageHero (){

    const heroContainerStyle = {
        position: "relative",
        marginTop: "60px",
    };

    const heroContentStyle = {
        display: "flex",
        textAlign: "center",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        color: "white",
    };

    const heroTitleStyle = {
        fontSize: "6rem",
        fontWeight: "600",
        backgroundImage: "linear-gradient(to left, #559a3c, #6f4297)",
        color: "transparent",
        backgroundClip: "text",
        opacity: "1",
        webkitBackgroundClip: "text",
    };


    return (


        <div
            style={heroContainerStyle}>

            <Container
                fluid
                style={heroContentStyle}>

                <Row>
                    <Col>

                        <h1
                            style={heroTitleStyle}>

                            Talent Meets
                            <br/>
                            Opportunities

                        </h1>

                    </Col>

                </Row>

                <Row>

                    <HomePageSearchBar/>

                </Row>

            </Container>

        </div>

    );
};

