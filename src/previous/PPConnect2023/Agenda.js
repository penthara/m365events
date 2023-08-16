import React, { useState, useEffect } from "react";
import "./css/Agenda.scss";
import { ShowSessionData } from "./ShowSessionData";
// import Sessions from "./content/Sessions.json";
import TrackDetails from "./content/TrackDetails.json";
import { Col } from "reactstrap";
import { ComingSoon } from "./ComingSoon";
import { ApiSession } from "./services/Api";

export const Agenda = () => {
  const [sessions, setSessions] = useState([]);

  useEffect(() => {
    let mounted = true;
    ApiSession().then((data) => {
      if (mounted) {
        setSessions(data);
      }
    });
    return () => (mounted = false);
  }, []);

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
    <div className="dec2022-agenda pb-8" id="agenda">
      <h1 className="dec2022-agenda-heading"> AGENDA </h1>
      {/* Remove Following div after Agenda Availability */}
      {/* <div className="mt-4">
        <ComingSoon />
      </div> */}
      <div className="dec2022-agenda-para-text-1">
        Check out the agenda and the sessions for the MICROSOFT POWER PLATFORM CONNECT 2023 BANGALORE event.
      </div>
      <div className="dec2022-agenda-para-text-2">
        This event has a collection of fantastic sessions and demos by
        professionals.
      </div>
      <div className="container-fluid dec2022-track-list">
        <div
          style={{ justifyContent: "center" }}
          className="row dec2022-track-row"
        >
          {trackDetailsState.map((data) => {
            return (
              <Col
                xs="4"
                className="dec2022-tracks"
                key={data.trackId}
                onClick={() => trackfunc(data.trackId)}
              >
                {data.isActive === true ? (
                  <div
                    className="dec2022-track-data"
                    style={{ backgroundColor: "#0a2f4ee3", color: "#fff" }}
                  >
                    <div className="dec2022-track-head">{data.trackTitle}</div>
                    <span className="dec2022-track-span">
                      {data.trackSubTitle}
                    </span>
                    <span className="dec2022-track-date">{data.trackDate}</span>
                  </div>
                ) : (
                  <div className="dec2022-track-data">
                    <div className="dec2022-track-head">{data.trackTitle}</div>
                    <span className="dec2022-track-span">
                      {data.trackSubTitle}
                    </span>
                    <span className="dec2022-track-date">{data.trackDate}</span>
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
