import React from "react";
import ContactInfo from "./ContactInfo";

function PersonalDetails({ personalDetail }) {
  return (
    <div className="container-personal-detail">
      <ul className="container-summary">
        <p id="hire-reason">Why you should hire me?</p>
        {Object.entries(personalDetail.shortDescription).map(([key, value]) => {
          return <li key={key}>{value}</li>;
        })}
      </ul>
      <ContactInfo contact={personalDetail.contact} />
    </div>
  );
}

export default PersonalDetails;
