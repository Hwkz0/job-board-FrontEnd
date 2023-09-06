import Card from "react-bootstrap/Card";
import * as React from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import JobCard from "../cards/JobCard";

export default function JobApplyPanel() {

    const jobApplyPanelStyle = {
        backgroundColor: "var(--bg-secondary)",
        color: "var(--text-color)",
        height: "100vh",
        width: "49vw",
        borderRadius: "0",
        margin: "0",
        padding: "0",
        display: "flex",
        boxShadow: "none",
        borderRight: "1px solid dimgray",
        overflow: "hidden",
        textAlign: "left",
    }


    return (
        <div>

            <Card
                  style={
                        jobApplyPanelStyle}>

                <Card.Body>

                    <Tabs
                        defaultActiveKey="home"
                        id="uncontrolled-tab-example"
                        className="mb-3" >


                        <Tab eventKey="home"
                             title={
                            <span
                                style={{
                                    color: "green" }}>

                                Offers

                            </span>}>

                            <div>

                                <JobCard/>


                                {/*TODO: ADD CARD NEXT TO JOB CARD WITH PAY AND ONE WITH APPLY BUTTON THAT WILL OPEN A MODAL WITH MORE INFO*/}


                            </div>




                        </Tab>


                        <Tab
                            eventKey="profile"
                            title={<span
                                style={{
                                    color: "green" }}>

                                All

                        </span>} >


                        </Tab>

                    </Tabs>

                </Card.Body>

            </Card>


        </div>

    );
}