import FancyBlurButton from "../buttons/FancyBlurButton";
import {Col, Row} from "react-bootstrap";
import Card from "react-bootstrap/Card";


export default function HomePageCategories(){

    const homePageCategoriesCardStyles = {
        backgroundColor: "transparent",
        width: "50vw",
        boxShadow: "none",
        border: "none",
        textAlign: "left"
    };


    return (

        <div
            className={"mb-5"}>

            <Card
                style={homePageCategoriesCardStyles}>

                <Card.Body>

                    <Row>

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
                            style={{ marginLeft: '0.7vw' }}>
                            xs={4}
                            className="d-flex"


                            <FancyBlurButton
                                buttonText={" Database administrators and architects "}/>

                        </Col>

                    </Row>

                </Card.Body>

            </Card>

        </div>
    );
}