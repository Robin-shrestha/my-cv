import React from "react";

const Education = ({ myEducation }) => {
  return (
    <div className="container-component">
      <div className="sub-title">
        <h2>EDUCATION</h2>
      </div>
      <ul>
        {myEducation.map((item) => {
          return (
            <li key={item.id} className="component-list-item">
              <div className="list-left">
                <p>{item.duration}</p>
              </div>
              <div className="list-right">
                <h4>{item.degree}</h4>
                <h5 style={{ paddingTop: "1em" }}>{item.institution}</h5>
                <p className="location">{item.location}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default Education;
