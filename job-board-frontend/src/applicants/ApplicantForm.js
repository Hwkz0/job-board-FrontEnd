import React, {useEffect, useState} from "react";
import axios from "axios";
import {useNavigate, useParams} from "react-router-dom";
import FormButton from "../components/FormButton";
import InputField from "../actions/InputFields";

export default function ApplicantForm({onSubmit}) {
    const {idOfApplicantToBeUpdated} = useParams();

    const [applicant, setApplicant] = useState({
        applicantFirstName: "",
        applicantLastName: "",
        applicantEmailAddress: "",
        applicantPassword: "",
        applicantPhoneNumber: "",
    });

    const { applicantFirstName, applicantLastName, applicantEmailAddress, applicantPassword, applicantPhoneNumber } = applicant;

    useEffect(() => {
        loadApplicant();
    }, []);

    const loadApplicant = async () => {
        const result = await axios.get("http://localhost:8080/applicant/${idOfApplicantToBeUpdated}");
        setApplicant(result.data);
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded pt-4 mt-2 shadow">
                    <h2 className="text-center mb-4">Edit Applicant</h2>
                    <form onSubmit={e => onSubmit(e)}>
                        <InputField
                            label="First Name"
                            type="text"
                            placeholder="Enter First Name"
                            name="applicantFirstName"
                            value={applicantFirstName}
                            onChange={e => setApplicant({...applicant, [e.target.name]: e.target.value})}
                        />
                        <InputField
                            label="Last Name"
                            type="text"
                            placeholder="Enter Last Name"
                            name="applicantLastName"
                            value={applicantLastName}
                            onChange={e => setApplicant({...applicant, [e.target.name]: e.target.value})}
                        />
                        <InputField
                            label="Email Address"
                            type="text"
                            placeholder="Enter Email Address"
                            name="applicantEmailAddress"
                            value={applicantEmailAddress}
                            onChange={e => setApplicant({...applicant, [e.target.name]: e.target.value})}
                        />
                        <InputField
                            label="Password"
                            type="text"
                            placeholder="Enter Password"
                            name="applicantPassword"
                            value={applicantPassword}
                            onChange={e => setApplicant({...applicant, [e.target.name]: e.target.value})}
                        />
                        <InputField
                            label="Phone Number"
                            type="text"
                            placeholder="Enter Phone Number"
                            name="applicantPhoneNumber"
                            value={applicantPhoneNumber}
                            onChange={e => setApplicant({...applicant, [e.target.name]: e.target.value})}
                        />
                        <FormButton
                            buttonText={"Update Applicant"}
                            buttonColor="primary"
                            onClick={e => onSubmit(e)}
                            onSubmit={e => onSubmit(e)}
                        />
                        <FormButton
                            label="Cancel"
                            type="danger"
                            onClick={() => navigate("/")}
                        />
                    </form>
                </div>
            </div>
        </div>
    );

}