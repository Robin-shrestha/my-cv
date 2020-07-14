import React from "react";
const CV = () => {
  const cvDetail = {
    name: "ROBIN SHRESTHA",
    jobTitle: "Web developer",
    personalDetail: {
      shortDescription: {
        a:
          "An adaptable and responsible graduate seeking an entry-level position in Web development, Software development.",
        b:
          "My degree in electronics and communication along with my self learning and intrest in web development has provided me with a well-rounded background has enabled me to develop an analytical/logical approach to task and software skills.",
        c:
          "In short, I am reliable, hardworking and eager to learn about new technological treands and issues. i am able to work well both on my own initiative or as an part of a team. ",
      },
      contact: {
        PhoneNo: "9813225692",
        Email: "rsresthas@gmail.com",
        linkedIn: "Robin Shrestha",
      },
    },
    workExperience: [
      {
        id: 1,
        companyName: "Softwel Pvt. Ltd",
        jobTitle: "Software Developer/ Electronics Engineer",
        location: "Ekata Marga, New Banehhwor, Kathmandu, Nepal",
        jobDuration: "october-2019 to june-2020",
        shortJobDescripton:
          "Designed and made electronics circuits. Programming the functionallity and handeling of such circuits.",
      },
    ],
    myEducation: [
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
    ],
    mySkills: {
      "Programming Languages": ["Python", "C#", "JavaScript", "HTML", "CSS"],
      "Web Related Frameworks": ["React", "Flask"],
      "Electronic Background": [
        "Electronic Circuit Designing and Production",
        "Eagle Autocad",
        "Microcontroller Programing(Arduino and ESP32)",
      ],
    },
    otherStuffs: {
      Github: (
        <a href="https://github.com/Robin-shrestha">
          https://github.com/Robin-shrestha
        </a>
      ),
    },
  };
  return cvDetail;
};
export default CV;
