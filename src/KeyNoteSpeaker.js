import React, { useState, useEffect } from "react";
import "./css/Speaker.scss";
import SpeakersData from "./content/SpeakersData.json";
import ModalKeynote from "./ModalKeynote";
import LinkedInlogo from "./images/website/LinkedInlogo.png";
import LazyLoad from "react-lazy-load";
import ImageLoader from "./ImageLoader.js";
import { Card, CardBody, CardTitle, CardSubtitle, CardText } from "reactstrap";
import Twitterlogo from "./images/website/twitterblue.png";
import MVPlogo from "./images/website/mvp.jpg";
import Microsoftlogo from "./images/website/microsoft_logo.png";
import { ApiSpeaker } from "./services/Api";

export const KeyNoteSpeaker = () => {
  const [KeyNoteSpeaker, setKeyNoteSpeaker] = useState([]);

  useEffect(() => {
    let mounted = true;
    ApiSpeaker().then((data) => {
      if (mounted) {
        setKeyNoteSpeaker(data);
      }
    });
    return () => (mounted = false);
  }, []);

  const [modal, setModal] = useState(false);
  const [clickedData, setClickedData] = useState([]);
  const toggle = (data) => {
    setClickedData(data);
    setModal(!modal);
  };
  return (
    <>
      <div className="dec2022-keynote pb-8">
        <h1 className="dec2022-keynote-heading text-center">
          KeyNote Speakers
        </h1>
        {/* <div className="mt-4 mb-4">
          <ComingSoon />
        </div> */}
        <div style={{ display: "flex", justifyContent: "center" }}>
          {KeyNoteSpeaker.filter((data) => data.isTopSpeaker).map((data) => {
            return (
              <>
                <div
                  className="col-xs-12 col-md-6 dec2022-speaker-card-wrapper col-xl-4"
                  key={data.id}
                >
                  <Card className="dec2022-speaker-card shadow nopadding">
                    <div className="dec2022-speaker-image">
                      <div id="dec2022-cube">
                        <div className="dec2022-square-holder">
                          <div className="dec2022-square" id="square"></div>
                        </div>
                      </div>
                      <LazyLoad height={400} debounce={false}>
                        <ImageLoader
                          onClick={() => toggle(data)}
                          src={`${data.profilePicture}`}
                          alt={data.fullName}
                        />
                      </LazyLoad>
                    </div>

                    <div
                      className="dec2022-card-title-wrapper"
                      onClick={() => toggle(data)}
                    >
                      <CardTitle
                        tag="h3"
                        className="dec2022-card-title text-center "
                      >
                        {data.fullName}
                      </CardTitle>
                    </div>
                    <CardBody
                      style={{ backgroundColor: "rgba(63, 105, 129, 0.1)" }}
                    >
                      <div className="dec2022-cursor-click">
                        <CardSubtitle
                          onClick={() => toggle(data)}
                          tag="p"
                          className="mb-2 text-start nopadding col"
                        >
                          {data.tagLine}
                        </CardSubtitle>
                        {/* <CardText
                          className="dec2022-card-text text-start nopadding col"
                          onClick={() => toggle(data)}
                        >
                          {data.questionAnswers[0].answer}

                        </CardText> */}
                      </div>

                      <div className="dec2022-social-media-array">
                        {data.categories[1]?.categoryItems[0]?.name ===
                          "Yes" && (
                          <div>
                            <img
                              src={MVPlogo}
                              alt="MVP"
                              className="dec2022-card-socialmedia nopadding align-self-start dec2022-cursor-none"
                            />
                          </div>
                        )}
                        {data.categories[0]?.categoryItems[0]?.name ===
                          "Yes" && (
                          <div>
                            <img
                              src={Microsoftlogo}
                              alt="Microsoft Employee"
                              className="dec2022-card-socialmedia nopadding align-self-start"
                            />
                          </div>
                        )}
                        {/* --------------------------- */}
                        <div className="d-flex flex-row-reverse">
                          {data.links
                            .filter(
                              (data) =>
                                data.title === "Twitter" ||
                                data.title === "LinkedIn"
                            )
                            .map((link) => {
                              return (
                                <a
                                  href={link.url}
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  <img
                                    src={
                                      link.title === "Twitter"
                                        ? Twitterlogo
                                        : LinkedInlogo
                                    }
                                    alt={
                                      link.title === "Twitter"
                                        ? "Twitter logo"
                                        : "LinkedIn logo"
                                    }
                                    className="dec2022-card-socialmedia align-self-start"
                                  />
                                </a>
                              );
                            })}
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                </div>
              </>
            );
          })}
        </div>
      </div>
      {modal && (
        <ModalKeynote data={clickedData} modal={modal} toggle={toggle} />
      )}
    </>
  );
};
