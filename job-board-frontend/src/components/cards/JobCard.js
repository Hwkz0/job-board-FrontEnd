import Card from "react-bootstrap/Card";
import '../../css/card/JobCard.css';
import * as React from "react";
import Button from "react-bootstrap/Button";


export default function JobCard() {

    // TODO: LINK TO BACKEND API TO GET PAST JOBS DATA
    // UNTIL THEN IT S GOING TO BE JUST A PLACEHOLDER

    const jobData = [
        {
            companyName: "TechFusion Solutions",
            jobTitle: "Junior Web Developer",
            jobDescription: "Build interactive websites and web applications. Collaborate with a skilled team to create dynamic user experiences.",
        },
        {
            companyName: "BrightPath Innovations",
            jobTitle: "Marketing Coordinator",
            jobDescription: "Drive marketing campaigns, manage social media, and analyze performance data to boost brand visibility and engagement.",
        },
        {
            companyName: "SwiftStream Enterprises",
            jobTitle: "Customer Support Specialist",
            jobDescription: "Provide exceptional customer service, resolve inquiries, and ensure client satisfaction through effective communication.",
        },

    ];


    return (
        <div  className={"jobs-card-general-container"}>
            {jobData.map((job, index) => (

            <Card key={index} className={"jobs-card"}>
                <div className={"card-split-left-right-container"}>
                <div className={"jobs-card-left"}>

                <Card.Body
                    style={{ textAlign: 'left' }} >

                    <Card.Title className="mb-3"
                                style={{fontSize:' 18px'}}>

                        {job.companyName}

                    </Card.Title>

                    <Card.Subtitle className="mb-2"
                                   style={{fontSize:' 14px'}}>

                        {job.jobTitle}

                    </Card.Subtitle>

                    <Card.Text className={"mb-1"}
                        style={{fontSize:' 12px'}}>

                        {job.jobDescription}

                    </Card.Text>

                </Card.Body>
                </div>

                <div className={"jobs-card-right"}>

                    <Button className={"apply-button"}>Apply</Button>

                </div>

                </div>
            </Card>
             ))}
        </div>
    );
}