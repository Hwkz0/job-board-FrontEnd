import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import {Link} from "react-router-dom";
import OutlineButton from "../buttons/OutlineButton";
import Container from "react-bootstrap/Container";


export default function LoginCard() {

    const loginCardStyles = {
        backgroundColor: 'var(--bg-accent)',
        color:'var(--text-color)',
        width: '40vw',
        height: '100vh',
        borderRadius: '0',
        margin: '0',
        padding: '0',
    };

    const loginCardTitleStyles = {
        fontSize: '3rem',
        fontWeight: 'bold',
        marginTop: '1rem',
        marginBottom: '2rem',
        padding: '0',
        color: 'var(--text-color)',
    };

    const loginCardLabelStyles = {
        fontSize: '1.5rem',
        fontWeight: 'bold',
        marginTop: '1rem',
        marginBottom: '2rem',
        padding: '0',
        color: 'var(--text-color)',
    }

    const loginCardFormStyles = {
        width: '100%',
        height: '100%',
        marginTop: '0.5rem',
        marginBottom: '0.5rem',
        padding: '0',
    };

    const loginCardSwitchStyles = {
        fontSize: '1.5rem',
        position: 'relative',
        textAlign: 'left',
        display: 'inline-block',
        width: '100%',
        height: '100%',
        float: 'left',
        marginTop: '1rem',
    };

    const noAccountLinkStyles = {
        fontSize: '1.2rem',
        fontWeight: 'bold',
        justifyContent: 'center',
        marginTop: '1rem',
        marginBottom: '2rem',
        padding: '1rem',
        color: 'var(--text-color)',

    }

    const loginRegisterButtonContainerStyles = {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        gap: '1rem',
        width: '100%',
        height: '100%',
        marginTop: '1rem',
        marginBottom: '1rem',
        padding: '0',
    }






    return (
        <div>
            <Card
                style={loginCardStyles}>

                <Card.Body>

                    <Card.Title
                        style={loginCardTitleStyles}>

                        Login

                    </Card.Title>


                    <Form>
                        <Form.Group
                            style={loginCardFormStyles}
                            controlId="formGroupEmail">

                            <Form.Label
                                style={loginCardLabelStyles}>

                                Email address

                            </Form.Label>

                            <Form.Control
                                type="email"
                                size="lg"
                                placeholder="Enter email" />

                        </Form.Group>


                        <Form.Group
                            style={loginCardFormStyles}
                            controlId="formGroupPassword">

                            <Form.Label
                                style={loginCardLabelStyles}>

                                Password

                            </Form.Label>

                            <Form.Control
                                type="password"
                                size="lg"
                                placeholder="Password" />

                        </Form.Group>
                    </Form>

                <Container>
                    <div>
                        <Form.Check
                            style={loginCardSwitchStyles}
                            type="switch"
                            id="custom-switch"
                            label="Remember me"

                        />
                    </div>
                </Container>

                <Container className={"mb-5"}>
                    <div >
                        <Card.Text>
                            <Link
                                to={"/register"}
                                style={noAccountLinkStyles} >


                                <br/> Don't have an account? <br/>Register here.

                            </Link>

                        </Card.Text>
                    </div>
                </Container>

                    <div
                        style={loginRegisterButtonContainerStyles}>

                        <OutlineButton
                            buttonText={"Login"}
                            outlineColor="blue-outline"/>

                        <OutlineButton
                            buttonText={"Cancel"}
                            outlineColor="red-outline"/>

                    </div>

                </Card.Body>
            </Card>
        </div>
    );

}