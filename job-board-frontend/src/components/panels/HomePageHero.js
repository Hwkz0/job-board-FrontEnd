import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../../css/panel/HomePageHero.css';
import HomePageSearchBar from "../searchbar/HomePageSearchBar";

export default function HomePageHero (){
    return (


        <div className="hero-container">
            <Container fluid className="hero-content">
                <Row>
                    <Col>

                        <h1 className={"hero-title-text"}>Talent Meets <br/> Opportunities</h1>

                    </Col>
                </Row>
                <Row>
                    <HomePageSearchBar/>
                </Row>
            </Container>
        </div>


    );
};

