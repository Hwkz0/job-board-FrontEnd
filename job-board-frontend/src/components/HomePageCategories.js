import Card from "react-bootstrap/Card";
import '../css/HomePageCategories.css';
import Button from "react-bootstrap/Button";
import FancyBlurButton from "./FancyBlurButton";


export default function HomePageCategories(){
    return (

        <div className={"home-page-categories-general-container"}>

            <Card className={"home-page-categories-card-container"}>

                <Card.Body>

                    <FancyBlurButton buttonText={"Software"}/>

                    <FancyBlurButton buttonText={"Data Science"}/>


                </Card.Body>




            </Card>

        </div>
    );
}