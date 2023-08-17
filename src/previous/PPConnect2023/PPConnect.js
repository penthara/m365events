import React, { useEffect } from "react";
import "./css/App.scss";
import { Header } from "./Header";
import { About } from "./About";
import { Agenda } from "./Agenda";
import { Speaker } from "./Speaker";
import { Sponsor } from "./Sponsor";
import { UserGroups } from "./UserGroups";
import { Footer } from "./Footer";
import { KeyNoteSpeaker } from "./KeyNoteSpeaker";
import { CountDownTimer } from "./CountDownTimer";
import { EventTeam } from "./EventTeam";
export const PPConnect = () => {
  useEffect(() => {
    document.title = "Microsoft Power Platform Connect 2023 Bangalore";
  }, []);
  return (
    <>
      <Header />
      <CountDownTimer />
      <About />
      <Agenda />
      <KeyNoteSpeaker />
      <Speaker />
      <Sponsor />

      <EventTeam />
      <Footer />
    </>
  );
};
