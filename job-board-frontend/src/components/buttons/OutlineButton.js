import Container from "react-bootstrap/Container";
import '../../css/buttons/OutlineButton.css';
import PropTypes from "prop-types";



export default function OutlineButton({ buttonText, outlineColor}){

    return(

        <div className={"mb-5"}>

            <Container className={`outline-button ${outlineColor}`} >


                {buttonText}


            </Container>

        </div>

    );

}

OutlineButton.propTypes = {
    buttonText: PropTypes.string.isRequired,
    outlineColor: PropTypes.string.isRequired,
}