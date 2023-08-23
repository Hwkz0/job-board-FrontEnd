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

        <div className="general-card-container">

            {/*previous jobs panel*/}

                <Card className={"card-left"} style={{ textAlign: 'left' }}>
                    <Card.Body>

                        <Card.Title

                                    className={"mb-3"} >

                            Previous Jobs

                        </Card.Title>

                        <Form.Control className={"mb-3"} size="sm" type="text" placeholder="Search previous jobs" />

                        <Card className={"past-jobs-card"}>

                            <Card.Header style={{fontSize:' 18px'}}>Job title</Card.Header>

                            <Card.Body>
                                <Card.Title style={{fontSize:' 14px'}}>
                                    Company name
                                </Card.Title>
                                <Card.Title style={{fontSize:' 14px'}}>
                                    Employment date
                                </Card.Title>

                                <Card.Text style={{fontSize:' 12px'}}>
                                    Lorem Ipsum Job Descriptium.
                                </Card.Text>

                            </Card.Body>
                        </Card>

                        <Card className={"past-jobs-card"}>

                            <Card.Header style={{fontSize:' 18px'}}>Job title</Card.Header>

                            <Card.Body>
                                <Card.Title style={{fontSize:' 14px'}}>
                                    Company name
                                </Card.Title>
                                <Card.Title style={{fontSize:' 14px'}}>
                                    Employment date
                                </Card.Title>

                                <Card.Text style={{fontSize:' 12px'}}>
                                    Lorem Ipsum Job Descriptium.
                                </Card.Text>

                            </Card.Body>
                        </Card>

                        <Card className={"past-jobs-card"}>

                            <Card.Header style={{fontSize:' 18px'}}>Job title</Card.Header>

                            <Card.Body>
                                <Card.Title style={{fontSize:' 14px'}}>
                                    Company name
                                </Card.Title>
                                <Card.Title style={{fontSize:' 14px'}}>
                                    Employment date
                                </Card.Title>

                                <Card.Text style={{fontSize:' 12px'}}>
                                    Lorem Ipsum Job Descriptium.
                                </Card.Text>

                            </Card.Body>
                        </Card>


                    </Card.Body>

                </Card>


                {/*main job panel*/}

                <Card className={"card-middle"}>

                <Card.Body>

                    <Tabs
                        defaultActiveKey="home"
                        id="uncontrolled-tab-example"
                        className="mb-3"
                    >
                        <Tab eventKey="home" title="Offers">

                            <div className={"main-jobs-panel-card-container"}>

                                <Card className={"jobs-card"}>

                                    <Card.Body  style={{ textAlign: 'left' }} >

                                        <Card.Title className="mb-3" >Company Name</Card.Title>

                                        <Card.Subtitle className="mb-2">Job Title</Card.Subtitle>

                                        <Card.Text style={{fontSize:'14px'}}>
                                            Lorem Ipsum Job Descriptium.
                                            Lorem Ipsum Job Descriptium.
                                        </Card.Text>

                                        <Button variant="primary">Apply</Button>

                                    </Card.Body>



                                </Card>

                                <Card className={"jobs-card"}>

                                    <Card.Body  style={{ textAlign: 'left' }} >

                                        <Card.Title className="mb-3" >Company Name</Card.Title>

                                        <Card.Subtitle className="mb-2">Job Title</Card.Subtitle>

                                        <Card.Text style={{fontSize:'14px'}}>
                                            Lorem Ipsum Job Descriptium.
                                            Lorem Ipsum Job Descriptium.
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




            {/*events panel*/}

            <Card className={"card-right"}>
                <Card.Body style={{ textAlign: 'left' }} >

                    <Card className={"events-card"}>
                        <Card.Body>
                            <Card.Title style={{fontSize:'18px'}} >GET QUALIFIED</Card.Title>
                            <Card.Text style={{fontSize:'14 px'}}>
                                Join our events to get qualified for the job you want.
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card className={"events-card"}>
                        <Card.Body>
                            <Card.Title style={{fontSize:'18px'}} >Welcome to Job-board</Card.Title>
                            <Card.Text style={{fontSize:'14px'}}>
                                This is an innovative idea of a job board project.
                            </Card.Text>

                            <Button variant="outline-success" type={'sm'}>Find out more!</Button>
                        </Card.Body>
                    </Card>


                </Card.Body>

            </Card>


        </div>

    );
}


