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
import { Prev } from "./previous/dec2021/Prev";
import { PPConnect } from "./previous/PPConnect2023/PPConnect";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="dec2022-container-fluid icss">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <CountDownTimer />
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
                <PreviousEvents />
                <Footer />
              </>
            }
          />
          <Route path="/m3652022" element={<Prev />} />
          <Route path="/m3652021" element={<Prev />} />
          <Route path="/ppconnect2023" element={<PPConnect2023 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
