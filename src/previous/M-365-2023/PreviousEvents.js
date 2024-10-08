// This component is used to display the previous events so it should
//  only be present in the current or latest event web page.
// Do Not Add this component in previous folder

import React from "react";
import "./css/PreviousEvents.scss";
import PrevEvents from "./content/PrevEvents.json";
export const PreviousEvents = () => {
  return (
    <div className="prevEvents">
      <h1 className="prevEvents-heading my-5 text-center">PREVIOUS EVENTS</h1>
      <div className="prevEvents-scroll">
        {PrevEvents.map((data) => {
          return (
            <div className="row prevEvents-wrapper">
              <a href={data.eventLink} target="_blank" rel="noreferrer">
                <img
                  alt="Card"
                  src={data.eventImage}
                  className="prevEventImage"
                  width={"100%"}
                  height={"100%"}
                />
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};
