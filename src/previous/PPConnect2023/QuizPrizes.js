import React from "react";
import "./css/QuizPrizes.scss";
import prizes from "./content/Prizes.json";
import prizesNew from "./content/Prizes2.json";

export const QuizPrizes = () => {
  return (
    <div className="dec2022-QuizPrizes mb-4 pb-8" id="dec2022-Prizes">
      <h1 className="dec2022-QuizPrizes-heading my-5 text-center">
        Win exciting prizes
      </h1>
      <div className="dec2022-QuizPrizes-para-wrapper my-4">
        <div className="dec2022-QuizPrizes-para-text pb-1">
          We have an exciting quiz competition for all the attendees.
        </div>
        <div className="dec2022-QuizPrizes-para-text pb-1">
          Be part of our event, attend sessions, participate in the quiz
          competition,
        </div>
        <div className="dec2022-QuizPrizes-para-text">
          and win exciting prizes!
        </div>
      </div>
      <div className="dec2022-QuizPrizes-wrapper">
        {prizes.map((data) => {
          return (
            <div className="dec2022-QuizPrizes-card">
              <div className="dec2022-QuizPrizes-card-head">
                <img
                  src={data.image}
                  alt="prize"
                  className="dec2022-QuizPrizes-card-img"
                />
                <div className="dec2022-QuizPrizes-card-heading">
                  {data.title}
                </div>
              </div>
              <div className="dec2022-QuizPrizes-card-desc">
                {data.description}
              </div>
            </div>
          );
        })}
      </div>
      <div className="dec2022-QuizPrizes-wrapper2 mt-2">
        {prizesNew.map((data) => {
          return (
            <div className="dec2022-QuizPrizes-card">
              <div className="dec2022-QuizPrizes-card-head">
                <img
                  src={data.image}
                  alt="prize"
                  className="dec2022-QuizPrizes-card-img"
                />
              </div>
              <div className="dec2022-QuizPrizes-card-desc">
                {data.description}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
