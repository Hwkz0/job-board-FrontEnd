import '../../css/buttons/FancyBlurButton.css';


export default function FancyBlurButton ({ buttonText }) {

    return(

            <div className={"mb-5"}>

                <button className={"fancy-blur-button"} >

                    {buttonText}

                </button>

            </div>

          );

}