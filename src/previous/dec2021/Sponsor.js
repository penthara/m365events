import React from "react";
import "./css/Sponsor.scss";
import SponsorData from "./content/SponsorData.json";
import LinkedInlogo from "./images/website/LinkedInlogo.png";
import Twitterlogo from "./images/website/twitterblue.png";

export const Sponsor = () => {
  return (
    <div className="dec2021-sponsor p-md-5 p-3" id="sponsors">
      <h1 className="dec2021-sponsor-heading my-5 text-center">SPONSORS</h1>
      <div className="row dec2021-sponsor-wrapper text-center">
        {SponsorData.map((data) => {
          return (
            <>
              <div className="col-xs-12 col-md-6 col-lg-4 dec2021-sponsor-card">
                <a
                  href={data.sponsorUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="dec2021-sponsor-border"
                >
                  <img
                    className="dec2021-sponsor-img"
                    alt={data.sponsorAltText}
                    src={`${data.sponsorImage}`}
                  />
                </a>
              </div>
              {/* <div className="dec2021-social-media-array">
                {data.sponsorLinkedIn !== null ? (
                  <a
                    href={data.sponsorLinkedIn}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src={LinkedInlogo}
                      alt="LinkedIn logo"
                      className="card-linkedIn nopadding align-self-start"
                    />
                  </a>
                ) : (
                  <></>
                )}
                {data.sponsorTwitter !== null ? (
                  <a
                    href={data.sponsorTwitter}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src={Twitterlogo}
                      alt="Twitter logo"
                      className="card-linkedIn nopadding align-self-start"
                    />
                  </a>
                ) : (
                  <></>
                )}
              </div> */}
            </>
          );
        })}
      </div>
    </div>
  );
};
