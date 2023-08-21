import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate} from "react-router-dom";

export default function RegisterApplicant() {

    let navigate = useNavigate();

    const [applicant, setApplicant] = useState({
        applicantFirstName: "",
        applicantLastName: "",
        applicantEmailAddress: "",
        applicantPassword: "",
        applicantPhoneNumber: "",
    });

    const { applicantFirstName, applicantLastName, applicantEmailAddress, applicantPassword, applicantPhoneNumber } = applicant;

    const onInputChange = e => {
        setApplicant({ ...applicant, [e.target.name]: e.target.value });
    }

    const onSubmit = async e => {
        e.preventDefault();
        await axios.post("http://localhost:8080/applicant/register", applicant);
        navigate("/");
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded pt-4 mt-2 shadow">
                    <h2 className="text-center mb-4">Register Applicant</h2>
                    <form onSubmit={e => onSubmit(e)}>
                        <div className="mb-3">
                            <label htmlFor="applicantFirstName" className="form-label">First Name</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter First Name"
                                id="applicantFirstName"
                                name="applicantFirstName"
                                value={applicantFirstName}
                                onChange={e => onInputChange(e)}
                            />
            </div>

                        <div className="mb-3">
                            <label htmlFor="applicantLastName" className="form-label">Last Name</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter Last Name"
                                id="applicantLastName"
                                name="applicantLastName"
                                value={applicantLastName}
                                onChange={e => onInputChange(e)}
                            />
            </div>

                        <div className="mb-3">
                            <label htmlFor="applicantEmailAdress" className="form-label">Email Address</label>
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Enter Email Address"
                                id="applicantEmailAdress"
                                name="applicantEmailAdress"
                                value={applicantEmailAddress}
                                onChange={e => onInputChange(e)}
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="applicantPassword" className="form-label">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Enter Password"
                                id="applicantPassword"
                                name="applicantPassword"
                                value={applicantPassword}
                                onChange={e => onInputChange(e)}
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="applicantPhoneNumber" className="form-label">Phone Number</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter Phone Number"
                                id="applicantPhoneNumber"
                                name="applicantPhoneNumber"
                                value={applicantPhoneNumber}
                                onChange={e => onInputChange(e)}
                            />
                        </div>

                        <button type="submit" className="btn btn-primary">Register</button>
                        <Link className="btn btn-danger mx-2" to="/">
                            Cancel
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    );


}