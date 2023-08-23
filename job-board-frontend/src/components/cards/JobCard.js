import Card from "react-bootstrap/Card";
import '../../css/card/JobCard.css';
import * as React from "react";
import Button from "react-bootstrap/Button";


export default function JobCard() {

    // TODO: LINK TO BACKEND API TO GET PAST JOBS DATA
    // UNTIL THEN IT S GOING TO BE JUST A PLACEHOLDER

    const jobData = [
        {
            companyName: "Company Name 1",
            jobTitle: "Job Title 1",
            jobDescription: "Job Description 1 Job Description 1",
        },
        {
            companyName: "Company Name 2",
            jobTitle: "Job Title 2",
            jobDescription: "Job Description 2 Job Description 2",
        },
        {
            companyName: "Company Name 3",
            jobTitle: "Job Title 3",
            jobDescription: "Job Description 3 Job Description 3",
        },

    ];


    return (
        <div  className={"jobs-card-general-container"}>
            {jobData.map((job, index) => (
            <Card key={index} className={"jobs-card"}>

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

            </Card>
             ))}
        </div>
    );
}