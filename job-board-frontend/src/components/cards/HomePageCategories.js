import Card from "react-bootstrap/Card";
import '../../css/card/HomePageCategories.css';
import Button from "react-bootstrap/Button";
import FancyBlurButton from "../buttons/FancyBlurButton";
import {Col, Row} from "react-bootstrap";


export default function HomePageCategories(){
    return (

        <div className={"home-page-categories-general-container"}>

            <Card className={"home-page-categories-card-container"}>

                <Card.Body>

                    <Row >

                        <Col xs={4}  className="d-flex" ><FancyBlurButton buttonText={"Software Engineer"}/></Col>

                        <Col xs={4}  className="d-flex justify-content-left"> <FancyBlurButton buttonText={"CyberSecurity"}/> </Col>


                    </Row>

                    <Row>
                        <Col xs={4}  className="d-flex"> <FancyBlurButton buttonText={"Network Architects"}/> </Col>

                        <Col xs={3}   className="d-flex"><FancyBlurButton buttonText={"Web developer"}/></Col>
                    </Row>

                    <Row>

                        <Col xs={4} className="d-flex" style={{ marginLeft: '0.7vw' }}>
                            <FancyBlurButton buttonText={" Database administrators and architects "}/>
                        </Col>

                    </Row>


                </Card.Body>




            </Card>

        </div>
    );
}