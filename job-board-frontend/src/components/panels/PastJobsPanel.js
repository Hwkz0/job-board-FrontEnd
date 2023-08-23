import Card from "react-bootstrap/Card";
import '../../css/panel/PastJobsPanel.css';
import * as React from "react";
import Form from "react-bootstrap/Form";
import PastJobsCard from "../cards/PastJobsCard";


export default function PastJobsPanel() {

    return (
        <div className={"past-job-general-container"}>

            <Card
                className={"past-jobs-panel"}
                style={{ textAlign: 'left' }}>

                <Card.Body>

                    {/*PANEL TITLE HERE*/}

                <Card.Title

                    className={"mb-3"} >

                    Previous Jobs

                </Card.Title>

                    {/*SEARCH BAR HERE*/}

                <Form.Control className={"mb-3"} size="sm" type="text" placeholder="Search previous jobs" />

                    {/*SHOW CARDS OF PAST JOBS HERE*/}

                    <PastJobsCard/>

                </Card.Body>
            </Card>



        </div>

    );
}