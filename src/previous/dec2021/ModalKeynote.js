import React from "react";
import {
  Modal,
  ModalHeader,
  //  ModalBody
} from "reactstrap";
import "./css/Modal.scss";
import LinkedInlogo from "./images/website/LinkedInlogo.png";
import twitterlogo from "./images/website/twitterblue.png";

const ModalKeynote = ({ modal, toggle, data }) => {
  const closeBtn = <button className="dec2021-close" onClick={toggle}></button>;
  // console.log("modal data", data);
  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        <div className="dec2021-modalHeader">
          <ModalHeader toggle={toggle} close={closeBtn}>
            {data.speakerName}
            {/* <button type="button" className="dec2021-close-icon"></button> */}
          </ModalHeader>
        </div>
        <div className="nopadding">
          <div className="p-5 text-center">
            <img
              src={`${data.speakerImage}`}
              alt={data.speakerAltText}
              className="dec2021-modal-image"
            />
          </div>
          <div className="dec2021-bg-grey bg-grey p-5">
            <h4 className="mb-4">BIO</h4>
            <p className="dec2021-speaker-information">
              {data.speakerInformation}
            </p>

            <div className="dec2021-divider"></div>
            <div className="dec2021-image-array">
              {data.speakerLinkedIn !== null && (
                <a href={data.speakerLinkedIn} target="_blank" rel="noreferrer">
                  <img
                    src={LinkedInlogo}
                    alt="LinkedIn logo"
                    className="mr-4 mx-4"
                  />
                </a>
              )}
              {data.speakerTwitter !== null ? (
                <a href={data.speakerTwitter} target="_blank" rel="noreferrer">
                  <img src={twitterlogo} alt="Twitter logo" />
                </a>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ModalKeynote;
