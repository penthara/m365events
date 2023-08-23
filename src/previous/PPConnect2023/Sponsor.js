

import React, { useState } from "react";
import "./css/Sponsor.scss";
import SponsorData from "./content/SponsorData.json";
import { Card, CardBody, CardTitle, CardSubtitle, CardText } from "reactstrap";

import dataLearning from "./content/LearningPartner.json";
import { ModalSponsor } from "./ModalSponsor";
export const Sponsor = () => {
  const [modalSponsor, setModalSponsor] = useState(false);

  const toggle = (data) => {
    setModalSponsor(!modalSponsor);
  };

  return (
    <div className="dec2022-sponsor p-md-5 p-3" id="sponsors">
      <h1 className="dec2022-sponsor-heading my-5 text-center">SPONSORS</h1>
      {/* <div className="row dec2022-sponsor-wrapper text-center"> */}
      <div
        className="row dec2022-sponsor-wrapper text-center"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <div className="dec2022-sponsor-StatusHeading diamond">
          Diamond
          <div className="dec2022-horizontal-divider mt-2" />
        </div>

        {SponsorData.filter((data) => {
          return data.sponsorStatus === "diamond";
        }).map((data) => {
          return (
            // <div className="col-xs-12 col-md-6 col-lg-4 dec2022-sponsor-card">
            <div className="col-xs-12 col-md-6 col-lg-4 dec2022-sponsor-card">
              <a
                href={data.sponsorUrl}
                target="_blank"
                rel="noreferrer"
                className="dec2022-sponsor-border"
              >
                <img
                  className="dec2022-sponsor-img"
                  alt={data.sponsorAltText}
                  src={`${data.sponsorImage}`}
                />
              </a>
            </div>
          );
        })}
      </div>

      <div
        className="row dec2022-sponsor-wrapper text-center"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <div className="dec2022-sponsor-StatusHeading platinum">
          Platinum
          <div className="dec2022-horizontal-divider mt-2" />
        </div>

        {SponsorData.filter((data) => {
          return data.sponsorStatus === "platinum";
        }).map((data) => {
          return (
            // <div className="col-xs-12 col-md-6 col-lg-4 dec2022-sponsor-card">
            <div className="col-xs-12 col-md-6 col-lg-4 dec2022-sponsor-card">
              <a
                href={data.sponsorUrl}
                target="_blank"
                rel="noreferrer"
                className="dec2022-sponsor-border"
              >
                <img
                  className="dec2022-sponsor-img"
                  alt={data.sponsorAltText}
                  src={`${data.sponsorImage}`}
                />
              </a>
            </div>
          );
        })}
      </div>

      <div
        className="row dec2022-sponsor-wrapper text-center"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <div className="dec2022-sponsor-StatusHeading gold">
          Gold
          <div className="dec2022-horizontal-divider mt-2" />
          {/* <button onClick={toggle} className="dec2022-applySponsorLink-gold">
            Apply for the Sponsorship
          </button> */}
        </div>

        {SponsorData.filter((data) => {
          return data.sponsorStatus === "gold";
        }).map((data) => {
          return (
            // <div className="col-xs-12 col-md-6 col-lg-4 dec2022-sponsor-card">
            <div className="col-xs-12 col-md-6 col-lg-4 dec2022-sponsor-card">
              <a
                href={data.sponsorUrl}
                target="_blank"
                rel="noreferrer"
                className="dec2022-sponsor-border"
              >
                <img
                  className="dec2022-sponsor-img"
                  alt={data.sponsorAltText}
                  src={`${data.sponsorImage}`}
                />
              </a>
            </div>
          );
        })}
      </div>

      

      <ModalSponsor modal={modalSponsor} toggle={toggle} />
    </div>
  );
};
