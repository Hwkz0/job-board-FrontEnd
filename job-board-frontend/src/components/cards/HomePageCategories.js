import FancyBlurButton from "../buttons/FancyBlurButton";
import {Col, Row} from "react-bootstrap";
import Card from "react-bootstrap/Card";


export default function HomePageCategories(){

    const containerStyles = {
        backgroundColor: "transparent",
        width: "50vw",
        boxShadow: "none",
        border: "none"
    };

    const categoriesStyles = {
        textAlign: "left"
    };


    return (

        <div
            className={"mb-5"}>

            <Card
                style={containerStyles}>

                <Card.Body style={categoriesStyles}>

                    <Row >

                        <Col
                            xs={4}
                            className="d-flex">

                            <FancyBlurButton
                                buttonText={"Software Engineer"}/>

                        </Col>

                        <Col
                            xs={4}
                            className="d-flex justify-content-left">

                            <FancyBlurButton
                                buttonText={"CyberSecurity"}/>

                        </Col>

                    </Row>


                    <Row>

                        <Col
                            xs={4}
                            className="d-flex">

                            <FancyBlurButton
                                buttonText={"Network Architects"}/>

                        </Col>

                        <Col
                            xs={4}
                            className="d-flex ">

                            <FancyBlurButton
                                buttonText={"Web developer"}/>

                        </Col>

                    </Row>


                    <Row>

                        <Col
                            xs={4}
                            className="d-flex"
                            style={{ marginLeft: '0.7vw' }}>

                            <FancyBlurButton
                                buttonText={" Database administrators and architects "}/>

                        </Col>

                    </Row>

                </Card.Body>

            </Card>

        </div>
    );
}