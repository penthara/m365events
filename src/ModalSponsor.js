import React from "react";
import "./css/Modal.scss";
import { Modal, ModalHeader } from "reactstrap";

export const ModalSponsor = ({ modal, toggle }) => {
  const closeBtn = <button className="dec2022-close" onClick={toggle}></button>;

  return (
    <>
      <Modal isOpen={modal} toggle={toggle} className="dec2022-modalSponsor">
        <div className="dec2022-modalHeader">
          <ModalHeader
            toggle={toggle}
            close={closeBtn}
            id="dec2022-sponsorModal-header"
            className="dec2022-modal-header"
          >
            <div className="dec2022-modal-Headtitle">
              SPONSORSHIP OPPORTUNITY FOR M365 Saturday Bangalore 2022
            </div>
          </ModalHeader>
        </div>
        <div className="dec2022-modalSponsor-body">
          <div className="dec2022-modalSponsor-header">
            <div className="dec2022-modalSponsor-title">BECOME OUR SPONSOR</div>
            <div className="dec2022-modalSponsor-subtitle">
              The perfect event to be in touch with Microsoft 365 professionals
              and to take the pulse of the latest innovations and trends in the
              world of Microsoft 365.
            </div>
          </div>
          <div className="dec2022-modalSponsor-whyUs">
            <div className="dec2022-modalSponsor-title dec2022-modalSponsor-whyUs-title">
              <div className="pt-5">WHY SPONSOR US</div>
            </div>
            <div class="row p-4 gx-5 gy-2">
              <div class="col-12 col-md-6 dec2022-grid-section">
                <div className="dec2022-grid-img1" />
                <div className="dec2022-grid-heading">
                  Brand &#38; Product Positioning
                </div>
                <ul className="dec2022-grid-subHeading">
                  <li>
                    Align yourselves with leading brands and fuel your marketing
                    engine through tech event sponsorship.
                  </li>
                  <li>
                    Present your products &#38; technologies to a global
                    audience of IT Pros and developers.
                  </li>
                </ul>
              </div>
              <div class="col-12 col-md-6 dec2022-grid-section">
                <div className="dec2022-grid-img2" />
                <div className="dec2022-grid-heading">
                  Talent Attraction &#38; Retention
                </div>
                <ul className="dec2022-grid-subHeading">
                  <li>
                    Gain access to a global pool of candidates from different
                    countries.
                  </li>
                  <li>
                    Simplify the hiring process by building credibility within
                    the Open-Source community.
                  </li>
                  <li>
                    Communicate to your employees that you are at the forefront
                    of technology and care about their professional development.
                  </li>
                </ul>
              </div>
              <div class="w-100"></div>
              <div class="col-12 col-md-6 dec2022-grid-section">
                <div className="dec2022-grid-img3" />
                <div className="dec2022-grid-heading">Employer Branding</div>
                <ul className="dec2022-grid-subHeading">
                  <li>
                    Put your company name in line with top industry leaders.
                  </li>
                  <li>
                    Improve company image and brand exposure globally across a
                    significant number of targeted developer groups and
                    communities.
                  </li>
                </ul>
              </div>
              <div class="col-12 col-md-6 dec2022-grid-section">
                <div className="dec2022-grid-img4" />
                <div className="dec2022-grid-heading">Lead Generation</div>
                <ul className="dec2022-grid-subHeading">
                  <li>
                    Increase brand awareness and drive sales pipeline growth.
                  </li>
                  <li>
                    Community events are not typically associated with high lead
                    generation; however, it is one of the best places to promote
                    your products and services and make new prospect leads.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="dec2022-modalSponsor-schemes">
            <div className="dec2022-modalSponsor-title dec2022-modalSponsor-schemes-title">
              <div className="pt-5">SPONSORSHIP SCHEMES</div>
            </div>
            <div class="row p-4 align-items-start gx-4">
              <div class="col-12 col-md-4 ">
                <div className="scheme-card">
                  <div className="dec2022-modalSponsor-schemes-header1">
                    <div>Gold Sponsor</div>
                  </div>
                  <div className="d-flex flex-column align-items-center dec2022-modalSponsor-schemes-body">
                    <div className="d-flex flex-column align-items-center justify-content-center">
                      <span className="dec2022-moneyText1">20,000 INR</span>
                      <div className="dec2022-moneyText1-para">
                        For small to medium sized organizations
                      </div>
                    </div>
                    <div className="dec2022-Sponsor-ulDiv">
                      <ul className="d-flex flex-column align-items-start">
                        <div className="dec2022-Sponsor-divider" />
                        <li>Company logos on the event website as sponsors.</li>
                        <div className="dec2022-Sponsor-divider" />
                        <li>
                          Company logos on the event banners, session slides,
                          swags, and giveaways.
                        </li>
                        <div className="dec2022-Sponsor-divider" />
                        <li>
                          Attendee opt. in contact details.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-12 col-md-4">
                <div className="scheme-card">
                  <div className="dec2022-modalSponsor-schemes-header2">
                    <div>Platinum Sponsor</div>
                  </div>
                  <div className="d-flex flex-column align-items-center dec2022-modalSponsor-schemes-body">
                    <div className="d-flex flex-column align-items-center justify-content-center">
                      <span className="dec2022-moneyText2">30,000 INR</span>
                      <div className="dec2022-moneyText2-para">
                        For small to medium sized organizations
                      </div>
                    </div>
                    <div className="dec2022-Sponsor-ulDiv">
                      <ul className="d-flex flex-column align-items-start">
                        <div className="dec2022-Sponsor-divider" />
                        <li>Company logos on the event website as sponsors.</li>
                        <div className="dec2022-Sponsor-divider" />
                        <li>
                          Company logos on the event banners, session slides,
                          swags, and giveaways.
                        </li>
                        <div className="dec2022-Sponsor-divider" />
                        <li>
                          5% off M365 Saturday Banglore 2023 Sponsorship Fee.
                        </li>
                        <div className="dec2022-Sponsor-divider" />
                        <li>
                          Attendee opt. in contact details.
                        </li>                        
                        <div className="dec2022-Sponsor-divider" />
                        <li>
                          A ten minutes slot to present or talk about your product or any Microsoft 365 product that you recently worked on.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-12 col-md-4 ">
                <div className="scheme-card">
                  <div className="dec2022-modalSponsor-schemes-header3">
                    <div>Diamond Sponsor</div>
                  </div>
                  <div className="d-flex flex-column align-items-center dec2022-modalSponsor-schemes-body">
                    <div className="d-flex flex-column align-items-center justify-content-center">
                      <span className="dec2022-moneyText3">40,000 INR</span>
                      <div className="dec2022-moneyText3-para">
                        For small to medium sized organizations
                      </div>
                    </div>
                    <div className="dec2022-Sponsor-ulDiv">
                      <ul className="d-flex flex-column align-items-start">
                        <div className="dec2022-Sponsor-divider" />
                        <li>All the Benefits in Platinum Sponsorship.</li>
                        <div className="dec2022-Sponsor-divider" />
                        <li>Attendee opt. in contact details.</li>
                        <div className="dec2022-Sponsor-divider" />
                        <li>Company Logo in the pre-event mail.</li>
                        <div className="dec2022-Sponsor-divider" />
                        <li>
                          A forty minutes slot to present or talk about your product or any
                          Microsoft 365 product that you recently worked on.
                        </li>
                        <div className="dec2022-Sponsor-divider" />
                        <li>
                          An Exhibition stall to feature your brand.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="dec2022-btn-wrapper d-flex align-items-center justify-content-center">
                <a
                  className="dec2022-sponsorButton"
                  target="_blank"
                  rel="noreferrer"
                  href="https://forms.office.com/r/T0di0aDZCL"
                >
                  <span>Become A Sponsor now</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};
