import Card from "react-bootstrap/Card";
import '../../css/card/EventCard.css';
import * as React from "react";
import Button from "react-bootstrap/Button";


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


    return eventData.map((event, index) => (

        <div key={index} className={"past-jobs-general-container"}>

            <Card className={"events-card"}>

                <Card.Body>

                    <div style={{ textAlign: 'left' }} className={"mb-3"} >

                    <Card.Header style={{fontSize:'18px',textAlign: 'center'} } className={"mb-2"} >{event.eventTitle}</Card.Header>

                        <Card.Text style={{fontSize:'14 px', textAlign: 'center'}} className={"mb-3"}>

                            {event.eventDate}

                        </Card.Text>


                        <Card.Text style={{fontSize:'14 px'}} className={"mb-3"}>

                        {event.eventDescription}

                    </Card.Text>


                    </div>

                    <Button variant="outline-success" className={"event-apply-button"} type={'sm'}>{event.buttonText}</Button>

                </Card.Body>

            </Card>
        </div>
    ));
}