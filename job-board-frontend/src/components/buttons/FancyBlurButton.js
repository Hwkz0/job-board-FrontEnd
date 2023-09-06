import '../../css/buttons/FancyBlurButton.css';


export default function FancyBlurButton ({ buttonText }) {

    const fancyBlurButtonStyle = {
        all: "unset",
        marginBottom: "1vh",
        minWidth: "7vw",
        width: "auto",
        height: "5.2vh",
        fontSize: "2.3vh",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        whiteSpace: "nowrap",
        userSelect: "none",
        cursor: "pointer",
        zIndex: "1",
        padding: "10px 20px",
    }




    return(

            <div className={"mb-5"}>

                <button className={"fancy-blur-button"} >

                    {buttonText}

                </button>

            </div>

          );

}