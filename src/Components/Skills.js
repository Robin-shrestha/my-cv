import React from "react";

const Skills = ({ mySkills }) => {
  return (
    <div className="container-component">
      <div className="sub-title">
        <h2>SKILLS</h2>
      </div>
      <ul className="container-component-list">
        {Object.entries(mySkills).map(([key, value]) => {
          return (
            <li key={key} className="component-list-item">
              <div className="list-left">
                <span className="key">{key}</span>
              </div>
              <div className="list-right">
                {value.map((item, index) => {
                  return <span key={index}>&#8226;{item} </span>;
                })}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default Skills;
