import Card from "react-bootstrap/Card";
import '../../css/panel/EventsPanel.css';
import * as React from "react";
import Button from "react-bootstrap/Button";
import EventCard from "../cards/EventCard";

export default function EventsPanel() {

    return (
        <div className={"events-panel-general-container"}>
        <Card className={"events-panel"}>

            <Card.Body>
                <EventCard/>
            </Card.Body>


        </Card>

        </div>
    );
}