import React, { useState, useEffect } from "react";
// import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import "./css/Agenda.scss";
// import Sessions from "./content/Sessions.json";
// import sessLinks from "./content/SessionLinks.json";
import { Row, Col } from "reactstrap";
import ModalAgenda from "./ModalAgenda";
import MicrosoftTeams from "./images/website/MicrosoftTeams.png";
// import Speakers from "./content/SpeakersData.json";
import sessions from "./content/Sessions.json";
import ModalSpeaker from "./ModalSpeaker";
import LazyLoad from "react-lazy-load";
import ImageLoader from "./ImageLoader.js";
import { ApiSpeaker, ApiGrid } from "./services/Api";

export const ShowSessionData = ({ CurrentTrackID }) => {
  // console.log("CurrentTrackID", CurrentTrackID);
  const [gridData, setGridData] = useState();
  const [speakerData, setSpeakerData] = useState();

  useEffect(() => {
    ApiGrid().then((data) => {
      // console.log("Grid api called");
      setGridData(data);
    });

    ApiSpeaker().then((data) => {
      // console.log("speaker api called");
      setSpeakerData(data);
    });
  }, []);

  const [modal, setModal] = useState(false);
  const [clickedData, setClickedData] = useState([]);
  const toggle = (data) => {
    setClickedData(data);
    setModal(!modal);
  };

  const [SpeakerModal, setSpeakerModal] = useState(false);
  const [clickedSpeakerData, setClickedSpeakerData] = useState([]);
  const SpeakerModaltoggle = (data) => {
    setClickedSpeakerData(data);
    setSpeakerModal(!SpeakerModal);
  };

  // const ShowSessionUrl = EventData.showSessionUrl;
  // const CurrentSessions = Sessions.filter(
  //   (d) => d.trackId.toString() === CurrentTrackID
  // );
  return (
    <>
      <div className="container-fluid dec2022-trackdata">
         {console.log(gridData, "check")} 
        
      </div>
      {modal === true ? (
        <ModalAgenda data={clickedData} modal={modal} toggle={toggle} />
      ) : null}
      {SpeakerModal === true ? (
        <ModalSpeaker
          data={clickedSpeakerData}
          modal={SpeakerModal}
          toggle={SpeakerModaltoggle}
        />
      ) : null}
    </>
  );
};
