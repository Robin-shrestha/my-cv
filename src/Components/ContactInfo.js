import React from "react";

const ContactInfo = ({ contact }) => {
  return (
    <div className="container-contact">
      <div className="sub-title">
        <h2>CONTACT:</h2>
      </div>
      {Object.entries(contact).map(([key, value]) => {
        return (
          <p key={key}>
            <span className="key">{key}:</span> {value}
          </p>
        );
      })}
    </div>
  );
};
export default ContactInfo;
