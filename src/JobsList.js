import React from "react";

function JobsList({ name, index, changeJob, jobs, value }) {
  return (
    <button
      className={
        jobs[value].company === name ? "job-btn active-btn" : "job-btn"
      }
      onClick={() => changeJob(index)}
    >
      {name}
    </button>
  );
}

export default JobsList;
