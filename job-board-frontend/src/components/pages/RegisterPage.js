import React, { useState } from "react";
import RegisterPanel from "../panels/RegisterPanel";

export default function RegisterPage() {

    return (

        <div
            style={{display:"flex",
                    justifyContent:"center",
                    alignItems:"center"}}>

            <RegisterPanel/>

        </div>

    );

}