import RegisterCard from "../cards/RegisterCard";


export default function RegisterPanel() {

    const registerPanelGeneralContainerStyle = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
    };

    const registerPanelStyle = {
        backgroundColor: "var(--bg-accent)",
        borderRadius: "0",
        color: "var(--text-color)",
        margin: "0",
        padding: "0",
        boxShadow: "none",
        height: "100vh",
        borderLeft: "2px solid #474a4d",
    }


    return (

        <div
            style={registerPanelGeneralContainerStyle}>

            <div
                style={registerPanelStyle}>

                <RegisterCard/>

            </div>

        </div>


    );
}