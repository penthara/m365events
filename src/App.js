import React, { useState } from "react";
import Helmet from "react-helmet";
import "./App.scss";
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
