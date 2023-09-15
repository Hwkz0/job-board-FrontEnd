import Card from "react-bootstrap/Card";
import * as React from "react";
import Form from "react-bootstrap/Form";
import PastJobsCard from "../cards/PastJobsCard";


export default function PastJobsPanel() {

    const pastJobsPanelStyles = {
        backgroundColor: "var(--bg-accent)",
        color: "var(--text-color)",
        textAlign: "left",
        height: "100vh",
        width: "25vw",
        borderRadius: "0",
        margin: "0",
        padding: "0",
        display: "flex",
        boxShadow: "none",
        borderRight: "1px solid dimgray",
        overflowX: "hidden",
    }




    return (

        <div
            style={{display: "flex"}}>

            <Card
                style={pastJobsPanelStyles}>

                <Card.Body>

                <Card.Title
                    className={"mb-3"} >

                    Previous Jobs

                </Card.Title>

                <Form.Control
                    className={"mb-3"} size="sm" type="text" placeholder="Search previous jobs" />

                    <PastJobsCard/>

                </Card.Body>

            </Card>



        </div>

    );
}