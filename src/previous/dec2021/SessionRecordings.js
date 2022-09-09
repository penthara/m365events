import React, { useEffect, useState } from "react";
import YoutubePlaylist from "./content/YoutubePlaylist.json";

import "./css/SessionRecordings.scss";
export const SessionRecordings = () => {
  const [prev, setPrev] = useState("select-1");
  const [vId, setVid] = useState("1");

  const [sel, setSel] = useState("select-1");
  const [isMobile] = useState(window.innerWidth < 768);

  const [iframeLink, setIframeLink] = useState(
    "https://www.youtube.com/embed?listType=playlist&list=PLAxd9YKM358PpprhNqTTvjshSNOpwFkVK&rel=0&index=1"
  );
  useEffect(() => {
    // vidSelected();
    if (prev) {
      document.getElementById(prev).style.backgroundColor = "#061C25";
    }
    if (sel) {
      document.getElementById(sel).style.backgroundColor = "#181818";
    }
  }, [prev, sel, vId]);

  return (
    <>
      <div className="d-flex flex-column align-items-center dec2021-session-recording">
        <div className="mb-4" id="sessions-recordings">
          <h1 className="dec2021-session-recording-heading mb-4">
            Session Recordings
          </h1>
        </div>
        <div className="dec2021-youtube-wrapper mt-4">
          <div className="dec2021-youtube-container">
            <iframe
              className="dec2021-youtube-iframe"
              src={iframeLink}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen;"
            ></iframe>
          </div>
          <div className="dec2021-sidebar-container">
            <div className="dec2021-yt-sidebar d-flex flex-column">
              <div>
                <div className="dec2021-yt-sidebar-header mb-4">
                  M365 BANGALORE 2021
                  <div className="dec2021-yt-sidebar-header-subheading mt-1">
                    Microsoft 365 Saturday Bangalore 2021 - {vId} / 17
                  </div>
                </div>
              </div>
              <div className="dec2021-yt-sidebar-body">
                <div className="dec2021-yt-sidebar-body-list">
                  {YoutubePlaylist.map((data) => {
                    return isMobile ? (
                      <a
                        id={`select-${data.Id}`}
                        key={data.Id}
                        title={data.Heading}
                        style={{ textDecoration: "none" }}
                        href={data.listUrl}
                        onClick={(e) => {
                          setPrev(sel);
                          setSel(e.target.id);
                          setVid(data.Id);
                          setIframeLink(data.iframeEmbed);
                        }}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <div
                          id={`select-${data.Id}`}
                          key={data.Id}
                          className="dec2021-yt-sidebar-body-list-item"
                        >
                          <div
                            id={`select-${data.Id}`}
                            className="dec2021-listId"
                          >
                            {data.Id}
                          </div>
                          <img
                            id={`select-${data.Id}`}
                            className="dec2021-listImg"
                            src={data.listImg}
                            alt=""
                          />
                          <div
                            id={`select-${data.Id}`}
                            className="dec2021-listText"
                          >
                            <div
                              id={`select-${data.Id}`}
                              className="dec2021-listHeading"
                            >
                              {data.Heading}
                            </div>
                            <div
                              id={`select-${data.Id}`}
                              className="dec2021-listSubheading"
                            >
                              {data.Subheading}
                            </div>
                          </div>
                        </div>
                      </a>
                    ) : (
                      <div
                        key={data.Id}
                        id={`select-${data.Id}`}
                        title={data.Heading}
                        onClick={(e) => {
                          setPrev(sel);
                          setSel(e.target.id);
                          setVid(data.Id);
                          setIframeLink(data.iframeEmbed);
                        }}
                        style={{ textDecoration: "none" }}
                      >
                        <div
                          id={`select-${data.Id}`}
                          key={data.Id}
                          className="dec2021-yt-sidebar-body-list-item"
                        >
                          <div
                            id={`select-${data.Id}`}
                            className="dec2021-listId"
                          >
                            {data.Id}
                          </div>
                          <img
                            id={`select-${data.Id}`}
                            className="dec2021-listImg"
                            src={data.listImg}
                            alt=""
                          />
                          <div
                            id={`select-${data.Id}`}
                            className="dec2021-listText"
                          >
                            <div
                              id={`select-${data.Id}`}
                              className="dec2021-listHeading"
                            >
                              {data.Heading}
                            </div>
                            <div
                              id={`select-${data.Id}`}
                              className="dec2021-listSubheading"
                            >
                              {data.Subheading}
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
