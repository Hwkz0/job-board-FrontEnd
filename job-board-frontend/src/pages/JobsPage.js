import PastJobsPanel from "../components/panels/PastJobsPanel";
import * as React from "react";
import '../css/pages/JobsPage.css';
import JobApplyPanel from "../components/panels/JobApplyPanel";
import EventsPanel from "../components/panels/EventsPanel";

export default function FindJobs() {
    return (

        <div className={"find-jobs-general-card-container"}>

            <PastJobsPanel/>

            <JobApplyPanel/>

            <EventsPanel/>

        </div>

    );
}
