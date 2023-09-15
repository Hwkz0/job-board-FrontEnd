import * as React from 'react';
import LoginPanel from "../panels/LoginPanel";

export default function Login() {

    const loginPageStyle = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    };


    return (

        <div
            style={loginPageStyle}>

            <LoginPanel/>

        </div>



    );
}