import React from "react";

const Education = () => {
  const myEducation = [
    {
      id: 1,
      degree: "Bachleors Degree in Electronics and Communication",
      duration: "November-2015 to October-2019",
      institution: "Kathmandu Engineering College",
      location: " Kalimati, Kathmandu",
    },
    {
      id: 2,
      degree: "HSEB +2",
      duration: "2013-2015",
      institution: "Little Angels' College",
      location: " Hattiban, Lalitpur",
    },
  ];
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
                <h5>{item.institution}</h5>
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
