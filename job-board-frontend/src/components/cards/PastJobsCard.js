import Card from "react-bootstrap/Card";
import '../../css/card/PastJobsCard.css';
import * as React from "react";


export default function PastJobsCard() {

    // TODO: LINK TO BACKEND API TO GET PAST JOBS DATA
    // UNTIL THEN IT S GOING TO BE JUST A PLACEHOLDER

    const pastJobData = [
        {
            jobTitle: "Software Engineer",
            companyName: "InnovateTech Labs",
            employmentDate: " 28 June 2022 - 9 August 2022",
            jobPay: "$500",
        },
        {
            jobTitle: "Social Media Manager",
            companyName: "GrowthVista Media",
            employmentDate: "10 February 2021 - 18 February 2021",
            jobPay: "$325",
        },
        {
            jobTitle: "Technical Support Specialist",
            companyName: "RapidTech Solutions",
            employmentDate: " 19 August 2020 - 20 September 2020",
            jobPay: "$900",
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