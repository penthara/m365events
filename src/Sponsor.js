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

      <div
        className="row dec2022-sponsor-wrapper text-center"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="dec2022-sponsor-StatusHeading learning mb-4">
          Learning Partners
          <div className="dec2022-horizontal-divider mt-2 mb-4" />
        </div>
        <Card
          style={{
            minWidth: "280px",
            maxWidth: "350px",
            marginTop: "5rem",
            margin: "auto",
            paddingInline: "0px",
          }}
          className="dec2022-speaker-card shadow nopadding card dec2022-learningPartner"
        >
          <a
            href="https://books.google.co.in/books/about/Developers_Road_ahead.html?id=SqsxEAAAQBAJ&redir_esc=y"
            style={{ textDecoration: "none" }}
            target="_blank"
          >
            <img src={dataLearning[0].image} style={{ width: "100%" }} />
          </a>
          <a
            href="https://books.google.co.in/books/about/Developers_Road_ahead.html?id=SqsxEAAAQBAJ&redir_esc=y"
            style={{ textDecoration: "none" }}
            target="_blank"
          >
            <CardSubtitle
              tag="h3"
              style={{
                color: "black",
                fontSize: "1.5rem",
                paddingTop: "1.5rem",
              }}
              className="mb-2 text-start nopadding col "
            >
              {dataLearning[0].title}
            </CardSubtitle>
          </a>
          <a
            href="https://books.google.co.in/books/about/Developers_Road_ahead.html?id=SqsxEAAAQBAJ&redir_esc=y"
            style={{ textDecoration: "none" }}
            target="_blank"
          >
            <CardSubtitle
              tag="p"
              style={{ fontSize: "1.2rem", paddingBlock: "0.5rem" }}
              className="mb-2 pt-2 text-start nopadding col"
            >
              {dataLearning[0].writer}
            </CardSubtitle>
          </a>
        </Card>
        <div
          style={{
            height: "fit-content",
          }}
          className="col-xs-12 col-md-6 col-lg-4 mt-4 dec2022-sponsor-card dec2022-learning-card"
        >
          <a
            href={dataLearning[1].title}
            target="_blank"
            rel="noreferrer"
            className="dec2022-sponsor-border"
          >
            <img
              className="dec2022-Learningsponsor-img"
              alt={dataLearning[1].writer}
              src={`${dataLearning[1].image}`}
            />
          </a>
        </div>
      </div>

      <ModalSponsor modal={modalSponsor} toggle={toggle} />
    </div>
  );
};
