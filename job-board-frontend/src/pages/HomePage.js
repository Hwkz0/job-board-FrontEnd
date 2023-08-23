import PastJobsPanel from "../components/panels/PastJobsPanel";
import * as React from "react";
import '../css/FindJobs.css';
import JobApplyPanel from "../components/panels/JobApplyPanel";

export default function HomePage() {
    return (

        // FOR NOW IT S JUST GOING TO BE A TEST PAGE FOR INDIVIDUALIZING COMPONENTS FROM /jobs PAGE
        //LATER I LL REINTRODUCE THE CAROUSEL AND MAIN PAGE COMPONENTS


        <div className={"general-card-container"}>

        <PastJobsPanel/>

        <JobApplyPanel/>

        </div>

    );
}
