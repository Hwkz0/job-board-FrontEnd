import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../../css/panel/LoginHero.css';

export default function LoginHero (){
    return (


        <div className="login-hero-container">
            <Container fluid className="login-hero-content">
                <Row>
                    <Col>

                        <h1 className={"login-hero-title-text"}>What job will <br/> we ignite today?</h1>

                    </Col>
                </Row>
                <Row>

                </Row>
            </Container>
        </div>


    );
};

