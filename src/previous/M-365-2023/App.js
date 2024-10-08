import React from "react";
import "./css/App.scss";
import { Header } from "./Header";
import { About } from "./About";
import { Donate } from "./Donate";
import { CallForSpeaker } from "./CallForSpeaker";
import { Agenda } from "./Agenda";
import { Speaker } from "./Speaker";
import { Sponsor } from "./Sponsor";
import { UserGroups } from "./UserGroups";
import { PreviousEvents } from "./PreviousEvents";
import { Footer } from "./Footer";
import { KeyNoteSpeaker } from "./KeyNoteSpeaker";
import { QuizPrizes } from "./QuizPrizes";
import { CountDownTimer } from "./CountDownTimer";
import { EventTeam } from "./EventTeam";
// import { Prev } from "./previous/dec2021/Prev";
// import { PPConnect } from "./previous/PPConnect2023/PPConnect";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App2023() {
  return (
    
    <div className="dec2022-container-fluid icss">
      <html className="Dec-2022">

                <Header />
                {/* <CountDownTimer /> */}
                 {/*<CallForSpeaker /> */}
               <About />
                {/*<Donate />*/}
                <QuizPrizes />
                <KeyNoteSpeaker />
                <Speaker />
                <Agenda />
                <Sponsor />
                <EventTeam />
                <UserGroups /> 
                {/* <PreviousEvents /> */}
                <Footer />

    </html>
    </div>
  );
}
export default App2023;
