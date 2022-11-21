import React, { useState } from "react";
import "./css/Header.scss";
import Sponsors from "./content/SponsorData.json";
import Speakers from "./content/SpeakersData.json";
import Sessions from "./content/Sessions.json";
import NavbarData from "./content/NavbarData.json";
import HeaderData from "./content/HeaderData.json";
import logo from "./images/website/transparentLogo.png";
import twitterLogo from "./images/website/twittericon.png";
import { Navbar, Nav, NavItem, NavLink, Row, Col } from "reactstrap";
import { isMobile } from "react-device-detect";
import { slide as Menu } from "react-burger-menu";
import { ComingSoon } from "./ComingSoon";
import LocationIcon from "./images/website/LocationIcon.png";
import hamburgerclose from "./images/website/close.png";
import { ModalSponsor } from "./ModalSponsor";
import "./css/ComingSoon.scss";

export const Header = () => {
  const [HamburgerOpen, setHamburgerOpen] = useState({ menuOpen: false });
  const handleHambugerMenuStateChange = (state) => {
    setHamburgerOpen({ menuOpen: state.isOpen });
  };
  const closeHamburgerMenu = () => {
    setHamburgerOpen({ menuOpen: false });
  };
  const toggleHamburgerMenu = () => {
    setHamburgerOpen({ menuOpen: !HamburgerOpen.menuOpen });
  };

  const [colorChange, setColorchange] = useState(false);

  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  const [modalSponsor, setModalSponsor] = useState(false);

  const toggle = (data) => {
    setModalSponsor(!modalSponsor);
  };

  window.addEventListener("scroll", changeNavbarColor);

  return (
    <>
      {/* <div className="dec2022-header" id="header"> */}
      <div className="dec2022-header" id="header">
        <div
          className={
            colorChange
              ? "dec2022-head-nav dec2022-navbar-background"
              : "dec2022-head-nav"
          }
        >
          <div className="dec2022-head-nav-align">
            <div className="col-6 col-sm-3 text-center">
              <a href="/" className="dec2022-nav-bar-logo-helper" alt="">
                <img
                  src={logo}
                  alt="sps-logo"
                  className="dec2022-nav-bar-logo"
                />
              </a>
            </div>

            {isMobile && (
              <>
                <Col className="col-3 col-sm-6"> </Col>
                <Col>
                  <Menu
                    isOpen={HamburgerOpen.menuOpen}
                    onStateChange={(state) =>
                      handleHambugerMenuStateChange(state)
                    }
                    right
                    width={"100%"}
                    className={"dec2022-slidebar"}
                    customCrossIcon={
                      <img
                        src={hamburgerclose}
                        onClick={toggleHamburgerMenu}
                        alt="hamburger-menu"
                      />
                    }
                  >
                    {NavbarData.map((data) => {
                      return (
                        <a
                          className="menu-item"
                          href={data.url}
                          onClick={() => closeHamburgerMenu()}
                        >
                          <span>{data.title}</span>
                        </a>
                      );
                    })}
                  </Menu>
                </Col>
              </>
            )}

            {!isMobile && (
              <>
                <Col xs={9} className="dec2022-nav-item">
                  <Navbar>
                    <Nav navbar>
                      {NavbarData.map((data) => {
                        return (
                          <NavItem>
                            <NavLink href={encodeURI(data.url)}>
                              {data.title}
                            </NavLink>
                          </NavItem>
                        );
                      })}
                    </Nav>
                  </Navbar>
                </Col>
              </>
            )}
          </div>
        </div>
        <div className="dec2022-head-data">
          {HeaderData.map((data) => {
            return (
              <>
                <Col md={12} xl={6} className="dec2022-content-left">
                  <Row className="dec2022-siteTitle">
                    <Col>
                      <h1>{data.siteTitle}</h1>
                    </Col>
                  </Row>
                  <Row className="dec2022-subTitle">
                    <Col>
                      <span>{data.subTitle}</span>
                    </Col>
                  </Row>
                  <Row className="dec2022-registrationBtn">
                    <Col>
                      <a href={data.RegLink} target="_blank" rel="noreferrer">
                        <button className="dec2022-register-btn">
                          <span>{data.RegBtn}</span>
                        </button>
                      </a>
                    </Col>
                  </Row>

                  <Row className="dec2022-address">
                    <Col xs={1} className="dec2022-locImg">
                      <a
                        style={{ textDecoration: "none" }}
                        target="_blank"
                        rel="noreferrer"
                        href="https://www.google.com/maps/search/?api=1&query=Microsoft+Prestige+Ferns+Galaxy%2C+Bellandur%2C+Gate+Rd%2C+Bellandur%2C+Bengaluru"
                      >
                        <img src={LocationIcon} alt="" />
                      </a>
                    </Col>
                    <Col className="dec2022-locAddr">
                      <a
                        style={{ textDecoration: "none" }}
                        target="_blank"
                        rel="noreferrer"
                        href="https://www.google.com/maps/search/?api=1&query=Microsoft+Prestige+Ferns+Galaxy%2C+Bellandur%2C+Gate+Rd%2C+Bellandur%2C+Bengaluru"
                      >
                        <span>{data.addrs}</span>
                      </a>
                    </Col>
                  </Row>
                </Col>
                <Col md={12} xl={6} className="dec2022-content-right">
                  <Row className="dec2022-handles col-7">
                    <Col>
                      <a
                        href={
                          "https://twitter.com/search?q=" +
                          encodeURIComponent(data.twitterHashTag)
                        }
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img alt="Twitter logo" src={twitterLogo} />
                        <span className="dec2022-twitterHashTag">
                          {data.twitterHashTag}
                        </span>
                      </a>
                    </Col>
                    <Col>
                      <a
                        href={"https://twitter.com/" + data.twitterHandle}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img alt="Twitter logo" src={twitterLogo} />
                        <span className="dec2022-twitterHandle">
                          {data.twitterHandle}
                        </span>
                      </a>
                    </Col>
                  </Row>
                  <Row className="dec2022-eventDate">
                    <Col md={5} className="dec2022-eventData-border">
                      <span>{data.eventDate}</span>
                    </Col>
                  </Row>
                  <Row className="dec2022-fields">
                    <Col>
                      <span className="dec2022-eventTitle">
                        {data.eventTitle}
                      </span>
                      <div
                        className={
                          isMobile
                            ? "dec2022-fields-row"
                            : "dec2022-fields-row row"
                        }
                      >
                        <Col className="dec2022-sessionNumber">
                          <span>14</span>
                          <span>SPEAKERS</span>
                        </Col>
                        <Col className="dec2022-trackNumber">
                          <span>14</span>
                          <span>SESSIONS</span>
                        </Col>
                        <Col className="dec2022-sponserNumber">
                          <span>7</span>
                          <span>SPONSORS</span>
                        </Col>
                        {/* <a
                          target={"_blank"}
                          href="https://www.eventbrite.com/e/m365-saturday-bangalore-2022-tickets-432972260687?aff=ebdssbdestsearch&keep_tld=1"
                          className="dec2022-coming-soon-RegNow text-center"
                        >
                          <span className="dec2022-coming-soon-txt font-weight-bold">
                            Register Now
                          </span>
                        </a> */}
                        {/* <Row
                          className="dec2022-registrationBtn"
                          style={{ marginTop: "0px", paddingTop: "5%" }}
                        >
                          <Col>
                            <a
                              href={data.RegLink}
                              target="_blank"
                              rel="noreferrer"
                            >
                              <button className="dec2022-register-btn">
                                <span>{data.RegBtn}</span>
                              </button>
                            </a>
                          </Col>
                        </Row> */}
                      </div>
                    </Col>
                  </Row>
                </Col>
              </>
            );
          })}
        </div>
        <div>
          <div className="dec2022-Be-Sponsor">
            <div className="dec2022-Be-Sponsor-wrapper">
              <div className="dec2022-Be-Sponsor-text">
                Sponsorships for M365 Saturday Bangalore 2022 are Now Open!
              </div>
              <div className="dec2022-Be-Sponsor-btn-wrapper">
                <button className="dec2022-Be-Sponsor-btn" onClick={toggle}>
                  <span>Become A Sponsor</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ModalSponsor modal={modalSponsor} toggle={toggle} />
    </>
  );
};
