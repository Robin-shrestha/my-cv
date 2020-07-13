import React from "react";
import ContactInfo from "./ContactInfo";

function PersonalDetails() {
  const shortDescription = {
    a:
      "An adaptable and responsible graduate seeking an entry-level position in Web development, Software development.",
    b:
      "My degree in electronics and communication along with my self learning and intrest in web development has provided me with a well-rounded background has enabled me to develop an analytical/logical approach to task and software skills.",
    c:
      "In short, I am reliable, hardworking and eager to learn about new technological treands and issues. i am able to work well both on my own initiative or as an part of a team. ",
  };

  return (
    <div className="container-personal-detail">
      <ul className="container-summary">
        <p id="hire-reason">Why you should hire me?</p>
        {Object.entries(shortDescription).map(([key, value]) => {
          return <li key={key}>{value}</li>;
        })}
      </ul>
      <ContactInfo />
    </div>
  );
}

export default PersonalDetails;
