import React from "react";
import "./App.css";
import WorkExp from "./Components/WorkExp";
import Header from "./Components/Header";
import Education from "./Components/Education";
import Skills from "./Components/Skills";
import Others from "./Components/Others";

import PersonalDetails from "./Components/PersonalDetails";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container-main">
        <PersonalDetails />
        <WorkExp />
        <Education />
        <Skills />
        <Others />
      </div>
    </div>
  );
}

export default App;
