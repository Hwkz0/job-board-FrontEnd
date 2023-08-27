import axios from "axios";
import React, { useEffect, useState} from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

export default function EditApplicant() {

    let navigate = useNavigate();

    const { idOfApplicantToBeUpdated } = useParams();

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
    };

    useEffect(() => {
        loadApplicant();
    }, []);

    const onSubmit = async e => {
        e.preventDefault();
        await axios.put(`http://localhost:8080/applicant/update/${idOfApplicantToBeUpdated}`, applicant);
        navigate("/");
    }

    const loadApplicant = async () => {
        const result = await axios.get(`http://localhost:8080/applicant/${idOfApplicantToBeUpdated}`);
        setApplicant(result.data);
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded pt-4 mt-2 shadow">
                    <h2 className="text-center mb-4">Edit Applicant</h2>
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
                            <label htmlFor="applicantEmailAddress" className="form-label">Email Address</label>
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Enter Email Address"
                                id="applicantEmailAddress"
                                name="applicantEmailAddress"
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

                        <button type="submit" className="btn btn-primary">
                            Edit Applicant
                        </button>

                        <Link className="btn btn-outline-danger my-2" to="/">
                            Back to Home
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    );
}