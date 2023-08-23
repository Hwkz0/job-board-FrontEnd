import Card from "react-bootstrap/Card";
import '../../css/panel/JobApplyPanel.css';
import * as React from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Button from "react-bootstrap/Button";
import JobCard from "../cards/JobCard";

export default function JobApplyPanel() {

    return (
        <div className={"job-apply-general-container"}>

            <Card className={"job-apply-panel"}
                  style={{ textAlign: 'left' }}>

                <Card.Body>

                    <Tabs
                        defaultActiveKey="home"
                        id="uncontrolled-tab-example"
                        className="mb-3">


                        <Tab eventKey="home" title="Offers">

                            <div className={"job-apply-general-container"}>

                                <JobCard/>


                                {/*TODO: ADD CARD NEXT TO JOB CARD WITH PAY AND ONE WITH APPLY BUTTON THAT WILL OPEN A MODAL WITH MORE INFO*/}


                            </div>




                        </Tab>


                        <Tab eventKey="profile" title="All">








                        </Tab>

                    </Tabs>
                </Card.Body>

            </Card>



        </div>

    );
}