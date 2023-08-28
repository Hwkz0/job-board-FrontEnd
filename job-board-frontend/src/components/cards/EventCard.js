import * as React from "react";
import Button from "react-bootstrap/Button";

import Card from "react-bootstrap/Card";



export default function EventCard() {

    // TODO: LINK TO BACKEND API TO GET PAST JOBS DATA
    // UNTIL THEN IT S GOING TO BE JUST A PLACEHOLDER

    const eventData = [
        {
            eventTitle: "GET QUALIFIED WITH US",
            eventDescription: "Fast-track your career in 4 months. Join us to become job-ready.",
            eventDate: "August - December ",
            buttonText: "Reserve your place!",
        },
        {
            eventTitle: "Welcome to Job-board",
            eventDescription: "This is an innovative idea of a job board project.",
            buttonText: "Find out more!",
        },
    ];

    const cardStyles = {
        backgroundColor: 'var(--bg-accent)',
        borderRadius: 'var(--border-radius)',
        boxShadow: '0 0 15px rgba(0, 0, 0, 0.6)',
        color: 'var(--text-color)',
        padding: '1rem',
        margin: '1rem 1rem 1rem 7px',
        width: '23vw',
        transition: 'background 0.4s, padding 0.4s, box-shadow 0.4s'
    };

    const buttonStyles = {
        border: '1px solid green',
        color: 'white',
        padding: '10px 20px',
        textAlign: 'center',
        textDecoration: 'none',
        fontSize: '16px',
        cursor: 'pointer',
        transitionDuration: '0.4s',
        margin: '0 auto',
        display: 'block',
    };


    return eventData.map((event, index) => (

        <div key={index}>

            <Card
                style={cardStyles} >


                <Card.Body>

                    <div
                        style={{textAlign: 'left'}}
                                    className={"mb-3"}>

                    <Card.Header
                        style={{fontSize:'18px', textAlign: 'center'}}
                                            className={"mb-2"}>

                        {event.eventTitle}

                    </Card.Header>



                        <Card.Text
                            style={{fontSize:'14 px', textAlign: 'center'}}
                                                className={"mb-3"}>

                            {event.eventDate}

                        </Card.Text>


                        <Card.Text
                            style={{fontSize:'14 px'}}
                                className={"mb-3"}>

                            {event.eventDescription}

                    </Card.Text>


                    </div>

                    <Button
                        style={buttonStyles}
                            variant="outline-success">

                        {event.buttonText}

                    </Button>

                </Card.Body>

            </Card>

        </div>

    ));
}