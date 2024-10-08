import React, { useState, useEffect } from "react";
import HeaderData from "./content/HeaderData.json";
import Helmet from "react-helmet";
import "./css/NavBar.scss";

export const NavBar = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);
  // This function will scroll the window to the top
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      {HeaderData.map((data) => {
        return (
          <>
            <Helmet>
              <title>{data.siteTitle}</title>
              {/*<meta name="description" content={data.subTitle}></meta>
              <meta
                id="og-image"
                property="og:image"
                content="/images/website/transparentLogo.png"
              />
              <meta
                name="description"
                content="Hands-on sessions and labs, delivered to you by the experts and community leaders"
              ></meta>*/}
            </Helmet>
          </>
        );
      })}
      {showButton && (
        <button onClick={scrollToTop} className="dec2022-back-to-top">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="blue"
            className="bi bi-arrow-up-short"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5z"
            />
          </svg>
        </button>
      )}
    </>
  );
};
