import React from "react";
import eventdata from "./content/EventData.json";
import "./css/CallForSpeaker.scss";
export const CallForSpeaker = () => {
  return (
    <div className="dec2022-cfs bg-white">
      <h1 className="dec2022-cfs-heading text-uppercase">Call for Speakers</h1>

      <div className="dec2022-cfs-para-text">
        Register today for the chance to speak at the event. M365 Saturday
        Bangalore 2022 is calling for speakers. If you are a Microsoft 365
        Expert and have an interesting topic to share Register today.
      </div>
      <div className="dec2022-cfs-text">
        <a
          className="dec2022-cfs-button"
          href={eventdata[0].registrationLink}
          target="_blank"
          rel="noreferrer"
        >
          <p>Call for Speakers !</p>
        </a>
      </div>
    </div>
  );
};
