// import React from "react";
// import "./css/Sponsor.scss";
// import SponsorData from "./content/SponsorData.json";
// import LinkedInlogo from "./images/website/LinkedInlogo.png";
// import Twitterlogo from "./images/website/twitterblue.png";

// export const Sponsor = () => {
//   return (
//     <div className="dec2022-sponsor p-md-5 p-3" id="sponsors">
//       <h1 className="dec2022-sponsor-heading my-5 text-center">SPONSORS</h1>
//       <div className="row dec2022-sponsor-wrapper text-center">
//         {SponsorData.map((data) => {
//           return (
//             <>
//               <div className="col-xs-12 col-md-6 col-lg-4 dec2022-sponsor-card">
//                 <a
//                   href={data.sponsorUrl}
//                   target="_blank"
//                   rel="noreferrer"
//                   className="dec2022-sponsor-border"
//                 >
//                   <img
//                     className="dec2022-sponsor-img"
//                     alt={data.sponsorAltText}
//                     src={`${data.sponsorImage}`}
//                   />
//                 </a>
//               </div>
//               {/* <div className="dec2022-social-media-array">
//                 {data.sponsorLinkedIn !== null ? (
//                   <a
//                     href={data.sponsorLinkedIn}
//                     target="_blank"
//                     rel="noreferrer"
//                   >
//                     <img
//                       src={LinkedInlogo}
//                       alt="LinkedIn logo"
//                       className="card-linkedIn nopadding align-self-start"
//                     />
//                   </a>
//                 ) : (
//                   <></>
//                 )}
//                 {data.sponsorTwitter !== null ? (
//                   <a
//                     href={data.sponsorTwitter}
//                     target="_blank"
//                     rel="noreferrer"
//                   >
//                     <img
//                       src={Twitterlogo}
//                       alt="Twitter logo"
//                       className="card-linkedIn nopadding align-self-start"
//                     />
//                   </a>
//                 ) : (
//                   <></>
//                 )}
//               </div> */}
//             </>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

import React, { useState } from "react";
import "./css/Sponsor.scss";
import SponsorData from "./content/SponsorData.json";
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
        <div
          className="mt-4 dec2022-applySponsorText d-flex justify-content-center align-items-center"
          style={{ height: "10rem" }}
        >
          <button
            onClick={toggle}
            className="dec2022-applySponsorLink"
            style={{ cursor: "pointer" }}
          >
            Apply for the Sponsorship
          </button>
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
          <button
            onClick={toggle}
            className="dec2022-applySponsorLink"
            style={{
              cursor: "pointer",
              fontSize: "1.5rem",
              textDecoration: "underline",
              paddingTop: "4rem",
              color: "#eaaf0e",
            }}
          >
            Apply for the Sponsorship
          </button>
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
                  style={
                    data.sponsorName === "Rapid Circle"
                      ? { transform: "scale(1.3)" }
                      : ""
                  }
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
