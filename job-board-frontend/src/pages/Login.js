import * as React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import '../css/Login.css';
import {Link} from "react-router-dom";

export default function Login() {
    return (
        <div className="card-container">
        <Card  className="card">

            <Card.Body>

                <Card.Title style={{ fontSize: '32px' , fontWeight: 'bold' }} >Login</Card.Title>

                <br />

                <Form>
                    <Form.Group className="mb-3" controlId="formGroupEmail">

                        <Form.Label style={{fontSize:'18px'}} className="mb-3"  >Email address</Form.Label>

                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>


                    <Form.Group className="mb-3" controlId="formGroupPassword">

                        <Form.Label style={{fontSize:'18px'}}  className="mb-3" >Password</Form.Label>

                        <Form.Control type="password" placeholder="Password" />

                    </Form.Group>
                </Form>


            <div>
                <Form.Check // prettier-ignore
                    className={"switch"}
                    type="switch"
                    id="custom-switch"
                    label="Remember me"
                />
            </div>

                <br/><br/>

                <div>
                <Card.Text>
                    <Link className={'mb-3'} to={"/register"} style={{ color: 'white' }} >Don't have an account? Register here.</Link>
                </Card.Text>
                </div>

                <div style={{ display: 'flex', justifyContent:'center', gap: '1rem', marginTop: '1rem' }} >
                <Button variant="primary" size={"lg"} >Login</Button>
                <Button variant="danger" size={"lg"} >Cancel</Button>
                </div>

            </Card.Body>
        </Card>
        </div>
    );
}