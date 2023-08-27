import React, {useState} from 'react';
import '../css/RegisterCard.css';
import { Form, Col, Row, Card } from "react-bootstrap";
import OutlineButton from "./buttons/OutlineButton";
import {useNavigate} from "react-router-dom";
import axios from "axios";

export default function RegisterCard() {

    let navigate = useNavigate();

    const [applicant, setApplicant] = useState({
        applicantFirstName: "",
        applicantLastName: "",
        applicantEmailAddress: "",
        applicantPassword: "",
        applicantPhoneNumber: "",
    });

    const { applicantFirstName, applicantLastName, applicantEmailAddress, applicantPassword, applicantPhoneNumber } = applicant;

    const onInputChange = e => {
        setApplicant({ ...applicant, [e.target.id]: e.target.value });
    }

    const onSubmit = async e => {
        e.preventDefault();
        await axios.post("http://localhost:8080/applicant/register", applicant);
        navigate("/");
    };



    return (
        <div className="register-card-general-container">
            <Card className="register-card">
                <Card.Title className="register-title">
                    Register
                </Card.Title>
                <Card.Body className="register-card-body">

                    <Form>
                        <Row>

                            <Col className={"register-form-gap"}>
                                <Form.Group controlId="formFirstName">
                                    <Form.Label className={"register-form-label"}>First Name</Form.Label>
                                    <Form.Control type="text" placeholder="First Name" size="lg" />
                                </Form.Group>

                                <Form.Group controlId="formPassword">
                                    <Form.Label className={"register-form-label"} >Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" size="lg" />
                                </Form.Group>

                                <Form.Group controlId="formEmail">
                                    <Form.Label className={"register-form-label"} >Email</Form.Label>
                                    <Form.Control type="email" placeholder="Email" size="lg" />
                                </Form.Group>
                            </Col>

                            <Col className={"register-form-gap"}>
                                <Form.Group controlId="formLastName">
                                    <Form.Label className={"register-form-label"} >Last Name</Form.Label>
                                    <Form.Control type="text" placeholder="Last Name" size="lg" />
                                </Form.Group>

                                <Form.Group controlId="formConfirmPassword">
                                    <Form.Label className={"register-form-label"} >Confirm Password</Form.Label>
                                    <Form.Control type="password" placeholder="Confirm Password" size="lg" />
                                </Form.Group>

                                <Form.Group controlId="formPhoneNumber">
                                    <Form.Label className={"register-form-label"} >Phone Number</Form.Label>
                                    <Form.Control type="text" placeholder="Phone Number" size="lg" />
                                </Form.Group>
                            </Col>
                        </Row>
                    </Form>

                    <div className="register-button-container">

                        <OutlineButton  buttonText={"Register"} outlineColor={"blue-outline"} />

                    </div>

                </Card.Body>
            </Card>
        </div>
    );
}
