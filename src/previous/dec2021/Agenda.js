import React, { useState } from "react";
import "./css/Agenda.scss";
import { ShowSessionData } from "./ShowSessionData";
// import Sessions from "./content/Sessions.json";
import TrackDetails from "./content/TrackDetails.json";
import { Col } from "reactstrap";

export const Agenda = () => {
  const trackfunc = (trackValue) => {
    setTrack(trackValue);
    var temptrack = trackDetailsState;
    let i = 0;
    for (i = 0; i < temptrack.length; i++) {
      if (temptrack[i].trackId == trackValue) {
        temptrack[i].isActive = true;
      } else {
        temptrack[i].isActive = false;
      }
    }
    setTrackDetails(temptrack);
  };
  const [track, setTrack] = useState("1");

  const [trackDetailsState, setTrackDetails] = useState(TrackDetails);

  return (
    <div className="dec2021-agenda" id="agenda">
      <h1 className="dec2021-agenda-heading"> AGENDA </h1>
      <div className="dec2021-agenda-para-text-1">
        Check out the agenda and the sessions for the M365 SATURDAY BANGALORE
        2021 event.
      </div>
      <div className="dec2021-agenda-para-text-2">
        This event has a collection of fantastic sessions and demos by
        professionals.
      </div>
      <div className="container-fluid dec2021-track-list">
        <div className="row dec2021-track-row">
          {trackDetailsState.map((data) => {
            return (
              <Col
                xs="4"
                className="dec2021-tracks"
                key={data.trackId}
                onClick={() => trackfunc(data.trackId)}
              >
                {data.isActive === true ? (
                  <div
                    className="dec2021-track-data"
                    style={{ backgroundColor: "#2c4fb4", color: "#fff" }}
                  >
                    <div className="dec2021-track-head">{data.trackTitle}</div>
                    <span className="dec2021-track-span">
                      {data.trackSubTitle}
                    </span>
                    <span className="dec2021-track-date">{data.trackDate}</span>
                  </div>
                ) : (
                  <div className="dec2021-track-data">
                    <div className="dec2021-track-head">{data.trackTitle}</div>
                    <span className="dec2021-track-span">
                      {data.trackSubTitle}
                    </span>
                    <span className="dec2021-track-date">{data.trackDate}</span>
                  </div>
                )}
              </Col>
            );
          })}
        </div>
      </div>
      <ShowSessionData CurrentTrackID={track} />
    </div>
  );
};
