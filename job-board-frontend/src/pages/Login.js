import * as React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import '../css/Login.css';
import {Link} from "react-router-dom";
import LoginCard from "../components/cards/LoginCard";
import LoginHero from "../components/panels/LoginHero";
import LoginPanel from "../components/panels/LoginPanel";

export default function Login() {
    return (

        <div className={"login-general-container"}>

            <LoginPanel/>

        </div>



    );
}