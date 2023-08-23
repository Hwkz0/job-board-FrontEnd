import Card from "react-bootstrap/Card";
import '../../css/card/PastJobsCard.css';
import * as React from "react";


export default function PastJobsCard() {

    // TODO: LINK TO BACKEND API TO GET PAST JOBS DATA
    // UNTIL THEN IT S GOING TO BE JUST A PLACEHOLDER

    const pastJobData = [
        {
            jobTitle: "Job Title 1",
            companyName: "Company Name 1",
            employmentDate: "Employment Date 1",
            jobPay: "Pay 1.",
        },
        {
            jobTitle: "Job Title 2",
            companyName: "Company Name 2",
            employmentDate: "Employment Date 2",
            jobPay: "Pay 2.",
        },
        {
            jobTitle: "Job Title 3",
            companyName: "Company Name 3",
            employmentDate: "Employment Date 3",
            jobPay: "Pay 3.",
        },

    ];


    return pastJobData.map((pastJob, index) => (

        <div key={index} className={"past-jobs-general-container"}>
            <Card className={"past-jobs-card"}>

                {/*JOB TITLE HERE*/}

                    <Card.Header style={{fontSize:' 18px'}}>
                        {pastJob.jobTitle}
                    </Card.Header>

                {/*COMPANY NAME HERE*/}

                    <Card.Body>
                        <Card.Title style={{fontSize:' 14px'}}>
                            {pastJob.companyName}
                        </Card.Title>

                        {/*EMPLOYMENT DATE HERE*/}

                        <Card.Title style={{fontSize:' 14px'}}>
                            {pastJob.employmentDate}
                        </Card.Title>

                        {/*JOB PAY HERE*/}

                        <Card.Text style={{fontSize:' 12px'}}>

                            {pastJob.jobPay}

                        </Card.Text>

                    </Card.Body>
            </Card>
        </div>
    ));
}