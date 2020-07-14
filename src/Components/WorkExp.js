import React from "react";

function WorkExp({ workExperience }) {
  return (
    <div className="container-component">
      <div className="sub-title">
        <h2>WORK EXPERIENCE</h2>
      </div>
      <ul className="container-component-list">
        {workExperience.map((item) => {
          return Jobs(item);
        })}
      </ul>
    </div>
  );
}
const Jobs = (experience) => {
  return (
    <li key={experience.id} className="component-list-item">
      <div className="list-left">
        <p>{experience.jobDuration}</p>
      </div>
      <div className="list-right">
        <h4>{experience.companyName}</h4>
        <h5>{experience.jobTitle}</h5>
        <p className="location">{experience.location}</p>
        <p>{experience.shortJobDescripton}</p>
      </div>
    </li>
  );
};

export default WorkExp;
