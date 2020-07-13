import React from "react";

const Skills = () => {
  const mySkills = {
    "Programming Languages": ["Python", "C#", "JavaScript", "HTML", "CSS"],
    "Web Related Frameworks": ["React", "Flask"],
    "Electronic Background": [
      "Electronic Circuit Designing and Production",
      "Eagle Autocad",
      "Microcontroller Programing(Arduino and ESP32)",
    ],
  };
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
