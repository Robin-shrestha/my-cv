import React from "react";

const ContactInfo = () => {
  const contact = {
    PhoneNo: "9813225692",
    Email: "rsresthas@gmail.com",
    linkedIn: "Robin Shrestha",
  };
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
