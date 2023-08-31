import Card from "react-bootstrap/Card";
import * as React from "react";
import EventCard from "../cards/EventCard";

export default function EventsPanel() {

    const eventsPanelStyles = {
        backgroundColor: 'var(--bg-secondary)',
        color: 'var(--text-color)',
        height: '100vh',
        borderRadius: '0',
        margin: '0',
        padding: '0',
        display: 'flex',
        alignItems: 'flex-start',
        flexGrow: '1',
        boxShadow: 'none',
        width: '26vw',
        overflow: 'hidden',
    }


    return (

        <Card
            style={eventsPanelStyles}>

            <Card.Body>

                <EventCard/>

            </Card.Body>


        </Card>


    );
}