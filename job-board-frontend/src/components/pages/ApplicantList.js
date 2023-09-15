import React, {useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams} from "react-router-dom";
import {Button} from "@mui/material";

export default function ApplicantList() {

    const [applicants, setApplicants] = useState([]);

    const {applicantId} = useParams();

    useEffect(() => {
        loadApplicants();
    },[]);

    const loadApplicants = async () => {
        const result = await axios.get("http://localhost:8080/applicant/all-applicants");
        setApplicants(result.data);
    };

    const deleteApplicant = async (id) => {
        await axios.delete(`http://localhost:8080/applicant/delete/${applicantId}`);
        loadApplicants();
    }

    return (
        <div
            className="container">

            <div
                className="py-4">

                <table
                    className="table border shadow">

                    <thead
                        className="thead-dark">

                        <tr>

                            <th
                                scope="col">

                                Applicant ID

                            </th>

                            <th
                                scope="col">

                                First Name

                            </th>

                            <th
                                scope="col">

                                Last Name

                            </th>

                            <th
                                scope="col">

                                Email Address

                            </th>

                            <th
                                scope="col">

                                Password

                            </th>

                            <th
                                scope="col">

                                Phone Number

                            </th>

                        </tr>

                    </thead>

                    <tbody>
                        {applicants.map((applicant, index) => (

                            <tr>

                                <th
                                    scope="row">

                                    {index + 1}

                                </th>

                                <td>
                                    {applicant.applicantFirstName}
                                </td>

                                <td>
                                    {applicant.applicantLastName}
                                </td>

                                <td>
                                    {applicant.applicantEmailAddress}
                                </td>

                                <td>
                                    {applicant.applicantPassword}
                                </td>

                                <td>
                                    {applicant.applicantPhoneNumber}
                                </td>

                                <td>
                                    <Link
                                        className="btn btn-primary mr-2"
                                        to={`/applicant/${applicant.applicantId}`}>

                                        View

                                    </Link>

                                    <Link
                                        className="btn btn-outline-primary mr-2"
                                        to={`/applicant/update/${applicant.applicantId}`}>

                                        Edit

                                    </Link>

                                    <Button
                                        className="btn btn-danger"
                                        onClick={() => deleteApplicant(applicant.applicantId)}>

                                        Delete

                                    </Button>

                                </td>

                            </tr>

                        ))}

                    </tbody>

                </table>

            </div>

        </div>
    );

}