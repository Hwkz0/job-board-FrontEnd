import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate} from "react-router-dom";
import RegisterPanel from "../components/RegisterPanel";

export default function RegisterPage() {

    return (

        <div className={"register-page-general-container"}>
            <RegisterPanel/>
        </div>

    );

}