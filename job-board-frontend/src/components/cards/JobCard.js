import Card from "react-bootstrap/Card";
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

    const jobCardSplitLeftRightContainerStyles = {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%'
    };

    const jobCardLeftStyles = {
        width: '75%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    };

    const jobCardRightStyles = {
        width: '25%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    };

    const jobCardStyles = {
        height: '22vh',
        width: '40vw',
        backgroundColor: 'var(--bg-accent)',
        borderRadius: 'var(--border-radius)',
        border: '1px solid green',
        boxShadow: '0 0 15px rgba(0, 0, 0, 0.6)',
        color: 'var(--text-color)',
        padding: '1rem',
        margin: '1rem 1rem 1rem 7px',
        transition: 'height 0.7s, width 0.7s , background 0.7s, border 0.7s, box-shadow 0.7s'
    };


    const jobCardHoverStyles = {
        backgroundColor: 'rgba(72,74,77,0.92)',
        width: '41vw',
        height: '24vh',
        cursor: 'pointer',
        transition: 'height 0.7s , width 0.7s, , background 0.7s, border 0.7s, cursor 0.7s'
    };

    const jobCardButtonStyles = {
        backgroundColor: '#16911e',
        border: 'none',
        color: 'white',
        padding: '15px 32px',
        textAlign: 'center',
        textDecoration: 'none',
        display: 'inline-block',
        fontSize: '16px',
        cursor: 'pointer',
        transitionDuration: '0.4s',
    }

    const jobCardButtonHoverStyles = {
        backgroundColor: '#16911e',
        padding: '16px 34px',
        boxShadow: '0 12px 16px 0 rgba(0, 0, 0, 0.24), 0 17px 50px 0 rgba(0, 0, 0, 0.19)',
    }



    return (

        <div>

            {jobData.map((job, index) => (

            <Card key={index}
                  style={jobCardStyles}
                  onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = jobCardHoverStyles.backgroundColor;
                      e.currentTarget.style.border = jobCardHoverStyles.border;
                      e.currentTarget.style.width = jobCardHoverStyles.width;
                      e.currentTarget.style.height = jobCardHoverStyles.height;
                      e.currentTarget.style.cursor = jobCardHoverStyles.cursor;
                      e.currentTarget.style.transition = jobCardHoverStyles.transition;
                  }}

                  onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = jobCardStyles.backgroundColor;
                      e.currentTarget.style.border = jobCardStyles.border;
                      e.currentTarget.style.width = jobCardStyles.width;
                      e.currentTarget.style.height = jobCardStyles.height;
                      e.currentTarget.style.cursor = 'default';
                      e.currentTarget.style.transition = jobCardStyles.transition;
                  }}>

                <div
                    style={jobCardSplitLeftRightContainerStyles}>

                <div
                    style={jobCardLeftStyles}>

                <Card.Body
                        style={{textAlign: 'left' }} >

                    <Card.Title
                        style={{fontSize:' 18px'}}
                            className="mb-3">

                        {job.companyName}

                    </Card.Title>

                    <Card.Subtitle
                        style={{fontSize:' 14px'}}
                            className="mb-2">

                        {job.jobTitle}

                    </Card.Subtitle>

                    <Card.Text
                        style={{fontSize:' 12px'}}
                            className={"mb-1"}>

                        {job.jobDescription}

                    </Card.Text>

                </Card.Body>

                </div>

                <div
                    style={jobCardRightStyles}>

                    <Button
                        style={jobCardButtonStyles}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = jobCardButtonHoverStyles.backgroundColor;
                            e.currentTarget.style.padding = jobCardButtonHoverStyles.padding;
                            e.currentTarget.style.boxShadow = jobCardButtonHoverStyles.boxShadow;
                        }}

                        onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = jobCardButtonStyles.backgroundColor;
                            e.currentTarget.style.padding = jobCardButtonStyles.padding;
                            e.currentTarget.style.boxShadow = 'none';
                        }}
                    >

                        Apply

                    </Button>

                </div>

                </div>

            </Card>

             ))}

        </div>
    );
}