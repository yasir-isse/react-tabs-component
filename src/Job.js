import React from "react";
import { FaAngleDoubleRight } from "react-icons/fa";

function Job({ id, title, company, dates, duties }) {
  return (
    <article className="job-info">
      <h3>{title}</h3>
      <h4>{company}</h4>
      <p className="job-date">{dates}</p>
      {duties.map((item, index) => {
        return (
          <div key={id + index} className="job-desc">
            <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
            <p>{item}</p>
          </div>
        );
      })}
      <button type="button" className="btn">
        more info
      </button>
    </article>
  );
}

export default Job;
