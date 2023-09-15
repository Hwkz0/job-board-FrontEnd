import React, {useState} from 'react';
import { Form, Col, Row, Card } from "react-bootstrap";
import OutlineButton from "../buttons/OutlineButton";
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
    };

    const onSubmit = async e => {
        e.preventDefault();
        await axios.post("http://localhost:8080/applicant/register", applicant);
        navigate("/");
    };


    const registerCardGeneralContainerStyle = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
    };

    const registerCardStyle = {
        backgroundColor: "var(--bg-accent)",
        borderRadius: "0",
        color: "var(--text-color)",
        margin: "0",
        padding: "0",
        boxShadow: "none",
        width: "100vw",
        height: "100vh",
        borderLeft: "2px solid #474a4d",
    };

    const registerTitleStyle = {
        fontSize: "3rem",
        fontWeight: "650",
        marginTop: "1rem",
        marginBottom: "1rem",
        padding: "0",
        color: "var(--text-color)",
    };

    const registerFormLabelStyle = {
        fontSize: "1.6rem",
        fontWeight: "500",
        marginTop: "1rem",
        marginBottom: "2rem",
        padding: "0",
        color: "var(--text-color)",
    }

    const registerButtonContainerStyle = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "5rem",
        padding: "0",
    }




    return (

        <div
            style={registerCardGeneralContainerStyle}>

            <Card
                style={registerCardStyle}>

                <Card.Title
                    style={registerTitleStyle}>

                    Register

                </Card.Title>

                <Card.Body
                    style={{display:"flex",
                            flexDirection:"column"}}>

                    <Form>

                        <Row>

                            <Col
                                style={{margin: "1rem 2 rem",}}>

                                <Form.Group
                                    controlId="formFirstName">

                                    <Form.Label
                                        style={registerFormLabelStyle}>

                                        First Name

                                    </Form.Label>

                                    <Form.Control
                                        type="text"
                                        placeholder="First Name"
                                        size="lg" />

                                </Form.Group>

                                <Form.Group
                                    controlId="formPassword">

                                    <Form.Label
                                        style={registerFormLabelStyle}>

                                        Password

                                    </Form.Label>

                                    <Form.Control
                                        type="password"
                                        placeholder="Password"
                                        size="lg" />

                                </Form.Group>

                                <Form.Group
                                    controlId="formEmail">

                                    <Form.Label
                                        style={registerFormLabelStyle}>

                                        Email

                                    </Form.Label>

                                    <Form.Control
                                        type="email"
                                        placeholder="Email"
                                        size="lg" />

                                </Form.Group>

                            </Col>

                            <Col
                                style={{margin: "1rem 2 rem",}}>

                                <Form.Group
                                    controlId="formLastName">

                                    <Form.Label
                                        style={registerFormLabelStyle}>

                                        Last Name

                                    </Form.Label>

                                    <Form.Control
                                        type="text"
                                        placeholder="Last Name"
                                        size="lg" />

                                </Form.Group>

                                <Form.Group
                                    controlId="formConfirmPassword">
                                    <Form.Label
                                        style={registerFormLabelStyle}>

                                        Confirm Password

                                    </Form.Label>

                                    <Form.Control
                                        type="password"
                                        placeholder="Confirm Password"
                                        size="lg"/>

                                </Form.Group>

                                <Form.Group
                                    controlId="formPhoneNumber">

                                    <Form.Label
                                        style={registerFormLabelStyle}>

                                        Phone Number

                                    </Form.Label>

                                    <Form.Control
                                        type="text"
                                        placeholder="Phone Number"
                                        size="lg" />

                                </Form.Group>

                            </Col>

                        </Row>

                    </Form>

                    <div
                        style={registerButtonContainerStyle}>

                        <OutlineButton
                            buttonText={"Register"}
                            outlineColor={"blue-outline"} />

                    </div>

                </Card.Body>
            </Card>
        </div>
    );
}
