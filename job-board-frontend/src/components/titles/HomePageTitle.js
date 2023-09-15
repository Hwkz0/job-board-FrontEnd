import Card from "react-bootstrap/Card";

export default function HomePageTitle(){

    const homePageTitleCardContainerStyle = {
        backgroundColor: "transparent",
        display: "flex",
        width: "35vw",
        boxShadow: "none",
        border: "none",
    }


    return (

        <div
            style={{display: "flex"}}>

            <Card
                style={homePageTitleCardContainerStyle}>

                <Card.Body>

                    <Card.Title>

                        <h1
                            style={{textAlign: "left"}}>

                            The Innovative Job Platform that ignites Your Career

                        </h1>

                    </Card.Title>

                </Card.Body>

            </Card>

        </div>
    );
}