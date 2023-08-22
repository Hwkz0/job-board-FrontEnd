import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

export default function EditApplicant() {

    const [applicant, setApplicant] = useState({
        applicantFirstName: "",
        applicantLastName: "",
        applicantEmailAddress: "",
        applicantPassword: "",
        applicantPhoneNumber: "",
    });

    const {getApplicantById} = useParams();


    const { applicantFirstName, applicantLastName, applicantEmailAdress, applicantPassword, applicantPhoneNumber } = applicant;

    const onInputChange = async e => {
        const result = await axios.get("http://localhost:8080/applicant/${getApplicantById}");
        setApplicant(result.data);
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded pt-4 mt-2 shadow">
                    <h2 className="text-center mb-4">Edit Applicant</h2>

                    <div className="card">
                        <div className="card-header">
                            Details of Applicant with ID {getApplicantById}
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">First Name: {applicantFirstName}</li>
                                <li className="list-group-item">Last Name: {applicantLastName}</li>
                                <li className="list-group-item">Email Address: {applicantEmailAdress}</li>
                                <li className="list-group-item">Password: {applicantPassword}</li>
                                <li className="list-group-item">Phone Number: {applicantPhoneNumber}</li>
                            </ul>
                    </div>
                    </div>

                    <Link className="btn btn-primary my-2" to="/">
                        Back to Home
                    </Link>
                </div>
            </div>
        </div>
    );
}