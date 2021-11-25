import React from "react";
import HeaderData from "./content/HeaderData.json";
import "./About.scss";

export const About = () => {
  return (
    <div className="about">
      <h1 className="about-heading"> ABOUT </h1>
      <div className="one-day-event">
        A One Day Event Focusing On The Microsoft 365{" "}
        {/*<span> Microsoft </span> */}
      </div>
      <div className="about-para-text">
        M365 SATURDAY BANGALORE 2021 is a one day virtual event organized by the
        Microsoft 365 Saturday Bangalore User group. This is a non-profit
        community event which is free to all registered participants. This event
        will completely focus on the Microsoft 365 services related to Microsoft
        Teams, Microsoft Power Platform and SharePoint. Provide local Technology
        professionals and users with excellent training and networking
        opportunities and Help develop, grow, sharing and encourage new
        speakers.
        {/* <span>
          <a
            href="https://www.meetup.com/Microsoft-365-and-Power-Platform-User-group-India/"
            target="_blank"
            rel="noreferrer"
          >
            Microsoft 365 , Power Platform & Cloud Security India User group
          </a>
        </span>
        */}
      </div>
      <div className="registration-text">
        <a
          className="registration-button"
          href={HeaderData[0].registrationLink}
          target="_blank"
          rel="noreferrer"
        >
          <p>Registrations are free !</p>
        </a>
      </div>
    </div>
  );
};
