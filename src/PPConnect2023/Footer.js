import React from "react";
import "./css/Footer.scss";
import footerData from "./content/Footerdata.json";
import footerLogo from "./images/website/transparentLogo.png";
// import NavbarData from "./content/NavbarData.json";
import linkedInLogo from "./images/website/LinkedIn-white.png";
import FaceboolLogo from "./images/website/Facebook-white.png";
import TwitterLogo from "./images/website/twittericon.png";

export const Footer = () => {
  return (
    <div className="dec2022-footer" id="footer">
      <div className="dec2022-speaker-grid dec2022-footer-wrapper">
        <div className="col-xs-12 col-lg-4 dec2022-footer-logo-wrapper row">
          <img src={footerLogo} className="dec2022-footerlogo" alt="logo" />
        </div>
        <div className="col-xs-12 col-lg-4 dec2022-contact-us-wrapper">
          <h4 className="text-center">Contact Us</h4>
          <div>
            {footerData.map((data) => {
              return (
                <div className="text-center">
                  <p> Email: {data.email}</p>
                  <p> Mobile: {data.mobile}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="col-xs-12 col-lg-4 dec2022-social-media-wrapper">
          <h4 className="text-center">Social Media</h4>
          <div className="row" style={{ width: "100%" }}>
            {footerData.map((data) => {
              return (
                <div className="col-10 col-xs-12 col-lg-12 dec2022-media-array text-center">
                  <a
                    className="dec2022-social-media-icon"
                    target="_blank"
                    href={data.linkedInLink}
                    rel="noreferrer"
                  >
                    <img src={linkedInLogo} alt="" />
                  </a>
                  <a
                    className="dec2022-social-media-icon"
                    target="_blank"
                    href={data.TwitterLink}
                    rel="noreferrer"
                  >
                    <img src={TwitterLogo} alt="" />
                  </a>
                  <a
                    className="dec2022-social-media-icon"
                    target="_blank"
                    href={data.facebookLink}
                    rel="noreferrer"
                  >
                    <img src={FaceboolLogo} alt="" />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="row dec2022-copyright">
        <div className="col">
          <span>All Rights Reserved © Microsoft 365 Events</span>
        </div>
      </div>
    </div>
  );
};
