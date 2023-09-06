import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';


export default function LoginHero (){

    const loginHeroStyle = {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "60vw",
        height: "100vh",
        color: "var(--text-color)",
        textAlign: "center",
        paddingTop: "100px",
        background: "radial-gradient(circle at bottom left, #9a5c3c, #2f3136)"
    }

    const loginHeroTitleTextStyle = {
        fontSize: "75px",
        fontWeight: "600",
        backgroundImage: "linear-gradient(190deg, #559a3c, #6f4297)",
        color: "transparent",
        backgroundClip: "text",
        opacity: "1",
        webkitBackgroundClip: "text",
        paddingBottom: "300px",
        textShadow: "2px 2px 4px rgba(0,0,0,0.1)"
    }



    return (


        <div
            style={{
                position: "relative",
                height: "100vh"}}>


            <Container
                fluid
                style={
                    loginHeroStyle}>

                <Row>

                    <Col>

                        <h1
                            style={
                            loginHeroTitleTextStyle}>

                            What job will
                            <br/>
                            we ignite today?

                        </h1>

                    </Col>

                </Row>

                <Row>

                </Row>

            </Container>

        </div>


    );
};

