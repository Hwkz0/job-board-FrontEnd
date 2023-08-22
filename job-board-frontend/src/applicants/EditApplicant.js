import React from "react";
import {Link, useNavigate} from "react-router-dom";
import ApplicantForm from "./ApplicantForm";
import FormButton from "../components/FormButton";
import axios from "axios";
import App from "../App";

export default function EditApplicant() {
    let navigate = useNavigate();

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:8080/applicant/update/${idOfApplicantToBeUpdated}", applicant);
        navigate("/");
    };

    return (
        <div className="container">
            <ApplicantForm onSubmit={onSubmit} />
            <Link to={"/"} className="btn btn-danger ms-2">
                Cancel
            </Link>
        </div>
    );
    }