import React from "react";
import "./App.css";
import WorkExp from "./Components/WorkExp";
import Header from "./Components/Header";
import Education from "./Components/Education";
import Skills from "./Components/Skills";
import Others from "./Components/Others";
import PersonalDetails from "./Components/PersonalDetails";
import CV from "./CV";

function App() {
  const cvDetail = CV();
  return (
    <div className="App">
      <Header />
      <div className="container-main">
        <PersonalDetails personalDetail={cvDetail.personalDetail} />
        <WorkExp workExperience={cvDetail.workExperience} />
        <Education myEducation={cvDetail.myEducation} />
        <Skills mySkills={cvDetail.mySkills} />
        <Others otherStuffs={cvDetail.otherStuffs} />
      </div>
    </div>
  );
}

export default App;
