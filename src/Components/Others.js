import React from "react";

const Others = ({ otherStuffs }) => {
  return (
    <div className="container-component">
      <div className="sub-title">
        <h2>OTHERS</h2>
      </div>
      <ul className="container-component-list">
        {Object.entries(otherStuffs).map(([key, value]) => {
          return (
            <li key={key} className="component-list-item">
              <div className="list-left">
                <span className="key">{key}</span>
              </div>
              <div className="list-right">{value}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default Others;
