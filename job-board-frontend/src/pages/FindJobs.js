import * as React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../css/FindJobs.css';
import CardGroup from 'react-bootstrap/CardGroup';
import Form from 'react-bootstrap/Form';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

export default function FindJobs() {
    return (
        <div className="card-container">
                <Card className={"card-left"}>
                    <Card.Body>
                        <Card.Title style={{ textAlign: 'left' }} className={"mb-3"} >Previous Jobs</Card.Title>
                        <Form.Control className={"mb-3"} size="sm" type="text" placeholder="Search previous jobs" />
                    </Card.Body>
                </Card>

                <Card className={"card-right"}>
                <Card.Body>
                    <Tabs
                        defaultActiveKey="profile"
                        id="uncontrolled-tab-example"
                        className="mb-3"
                    >
                        <Tab eventKey="home" title="Offers">

                            <div className={"card-container"}>
                                <Card className={"job-card"}>
                                    <Card.Body  style={{ textAlign: 'left' }} >
                                        <Card.Title className={"mb-3"} >Company Name</Card.Title>
                                        <Card.Subtitle className="mb-2">Job Title</Card.Subtitle>
                                        <Card.Text style={{fontSize:'14px'}}>
                                            Lorem Ipsum Job Description.
                                            Lorem Ipsum Job Description.
                                        </Card.Text>

                                        <Button variant="primary">Apply</Button>
                                    </Card.Body>
                                </Card>
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


