import Card from "react-bootstrap/Card";
import '../css/HomePageTitle.css';


export default function HomePageTitle(){
    return (

        <div className={"home-page-title-general-container"}>

            <Card className={"home-page-title-card-container"}>

                <Card.Body>

                    <Card.Title>
                        <h1 className={"home-page-title"}>The Innovative Job Platform that ignites Your Career</h1>
                    </Card.Title>

                </Card.Body>

            </Card>

        </div>
    );
}