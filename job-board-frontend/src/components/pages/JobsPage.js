import PastJobsPanel from "../panels/PastJobsPanel";
import * as React from "react";
import JobApplyPanel from "../panels/JobApplyPanel";
import EventsPanel from "../panels/EventsPanel";

export default function FindJobs() {
    return (

        <div
            style={{display:"flex"}}>

            <PastJobsPanel/>

            <JobApplyPanel/>

            <EventsPanel/>

        </div>

    );
}
