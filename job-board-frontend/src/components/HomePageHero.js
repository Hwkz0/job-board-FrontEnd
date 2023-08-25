import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../css/HomePageHero.css';
import HomePageSearchBar from "./HomePageSearchBar";

export default function HomePageHero (){
    return (


        <div className="hero-container">
            <Container fluid className="hero-content">
                <Row>
                    <Col>

                        <h1 className={"hero-title-text"}>Talent Meets Opportunities</h1>

                    </Col>
                </Row>
                <Row>
                    <HomePageSearchBar/>
                </Row>
            </Container>
        </div>


    );
};

