import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import '../css/FancyBlurButton.css';


export default function FancyBlurButton({ buttonText }){

    return(

            <div className={"fancy-blur-button-general-container , mb-5"}>

                <Container className={"fancy-blur-button"} >
                    {buttonText}
                </Container>

            </div>

          );

}