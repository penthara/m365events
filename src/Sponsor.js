import React from "react";
import "./Sponsor.scss";
import SponsorData from "./content/SponsorData.json";
import LinkedInlogo from "./images/website/LinkedInlogo.png";
import Twitterlogo from "./images/website/twitterblue.png";

export const Sponsor = () => {
  return (
    <div className="sponsor p-md-5 p-3" id="sponsors">
      <h1 className="sponsor-heading my-5 text-center">SPONSORS</h1>
      <div className="row sponsor-wrapper text-center">
        {SponsorData.map((data) => {
          return (
            <div className=" col-xs-12 col-md-6 col-lg-4 sponsor-card">
              <a
                href={data.sponsorUrl}
                target="_blank"
                rel="noreferrer"
                className="sponsor-border"
              >
                <img
                  className="sponsor-img"
                  alt={data.sponsorAltText}
                  src={`${data.sponsorImage}`}
                />

                <div className="social-media-array">
                  {data.speakerLinkedIn !== null ? (
                    <a
                      href={data.speakerLinkedIn}
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
                  {data.speakerTwitter !== null ? (
                    <a
                      href={data.speakerTwitter}
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
                </div>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};
