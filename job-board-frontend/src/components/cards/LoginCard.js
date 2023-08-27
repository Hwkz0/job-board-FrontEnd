import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import {Button} from "react-bootstrap";
import '../../css/card/LoginCard.css';
import {Link} from "react-router-dom";
import OutlineButton from "../buttons/OutlineButton";


export default function LoginCard() {
    return (
        <div className="login-card-general-container">
            <Card  className="login-card">

                <Card.Body>

                    <Card.Title  className={"login-title"} >
                        Login
                    </Card.Title>


                    <Form>
                        <Form.Group className="login-form" controlId="formGroupEmail">

                            <Form.Label className="login-form-label">
                                Email address
                            </Form.Label>

                            <Form.Control type="email" size="lg" placeholder="Enter email" />
                        </Form.Group>


                        <Form.Group className="mb-3" controlId="formGroupPassword">

                            <Form.Label className="form-label" >Password</Form.Label>

                            <Form.Control type="password" size="lg" placeholder="Password" />

                        </Form.Group>
                    </Form>


                    <div>
                        <Form.Check // prettier-ignore
                            className={"login-switch"}
                            type="switch"
                            id="custom-switch"
                            label="Remember me"
                        />
                    </div>

                    <br/><br/>

                    <div>
                        <Card.Text>
                            <Link className={'no-account-link'} to={"/register"} style={{ color: 'white' }} >Don't have an account? <br/>Register here.</Link>
                        </Card.Text>
                    </div>

                    <div className={"login-register-button-container"}  >
                        <OutlineButton buttonText={"Login"} outlineColor="blue-outline"/>
                        <OutlineButton buttonText={"Cancel"} outlineColor="red-outline"/>
                    </div>

                </Card.Body>
            </Card>
        </div>
    );

}