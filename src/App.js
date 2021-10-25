import React, { useState, useEffect } from "react";
import Helmet from "react-helmet";
import "./App.scss";
import "./App.css";
import { Header } from "./Header";
import { About } from "./About";
import { Donate } from "./Donate";
import { Agenda } from "./Agenda";
import { Speaker } from "./Speaker";
import { Sponsor } from "./Sponsor";
import { UserGroups } from "./UserGroups";
import { Footer } from "./Footer";
import { KeyNoteSpeaker } from "./KeyNoteSpeaker";
import { CountDownTimer } from "./CountDownTimer";
import { EventTeam } from "./EventTeam";
import HeaderData from "./content/HeaderData.json";
function App() {
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
    <div className="container-fluid icss">
      {HeaderData.map((data) => {
        return (
          <>
            <Helmet>
              <title>{data.siteTitle}</title>
            </Helmet>
          </>
        );
      })}
      {showButton && (
        <button onClick={scrollToTop} className="back-to-top">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-arrow-up-short"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5z"
            />
          </svg>
        </button>
      )}
      <Header />
      <CountDownTimer />
      <About />
      <Agenda />
      <KeyNoteSpeaker />
      <Speaker />
      <Sponsor />
      <UserGroups />
      <EventTeam />
      <Footer />
    </div>
  );
}
export default App;
