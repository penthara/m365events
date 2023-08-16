import React from "react";
// import HeaderData from "./content/HeaderData.json";
import "./css/About.scss";

export const About = () => {
  return (
    <div className="dec2022-about pb-8">
      <h1 className="dec2022-about-heading"> ABOUT </h1>
      <div className="dec2022-one-day-event">
        A One Day Event Focusing On The Microsoft 365{" "}
        {/*<span> Microsoft </span> */}
      </div>
      <div className="dec2022-about-para-text">
        M365 SATURDAY BANGALORE 2022 is a one day event organized by the
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
      <div className="dec2022-registration-text">
        {/* <a className="dec2022-registration-button" href="#sessions-recordings">
          <p>Coming Soon</p>
        </a> */}
        <a
          target={"_blank"}
          className="dec2022-registration-button"
          href="https://www.eventbrite.co.uk/e/microsoft-power-platform-connect-2023-bangalore-tickets-679262009957?aff=oddtdtcreator"
        >
          <p> Register Now </p>
        </a>
      </div>
    </div>
  );
};
