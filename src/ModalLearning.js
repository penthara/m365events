import React, { useState, useEffect } from "react";
import {
  Modal,
  ModalHeader,
  //  ModalBody
} from "reactstrap";
import "./css/Modal.scss";
import { Card, CardBody, CardTitle, CardSubtitle, CardText } from "reactstrap";
import ImageLoader from "./ImageLoader.js";

import data from "./content/LearningPartner.json";

const ModalLearning = () => {
  return (
    <>
      <div className="dec2022-keynote">
        <h1
          className=".dec2022-sponsor-StatusHeading text-center mb-2"
          style={{ color: "#999999" }}
        >
          Learning Partners
        </h1>
      </div>

      <Card
        style={{
          width: "320px",
          marginTop: "5rem",
          margin: "auto",
        }}
        className="dec2022-speaker-card shadow nopadding card dec2022-learningPartner"
      >
        <a
          href="https://books.google.co.in/books/about/Developers_Road_ahead.html?id=SqsxEAAAQBAJ&redir_esc=y"
          style={{ textDecoration: "none" }}
          target="_blank"
        >
          <img src={data[0].image} style={{ width: "100%" }} />
        </a>
        <a
          href="https://books.google.co.in/books/about/Developers_Road_ahead.html?id=SqsxEAAAQBAJ&redir_esc=y"
          style={{ textDecoration: "none" }}
          target="_blank"
        >
          <CardSubtitle
            tag="h3"
            style={{
              color: "black",
              fontSize: "1.5rem",
              paddingTop: "1.5rem",
            }}
            className="mb-2 text-start nopadding col "
          >
            {data[0].title}
          </CardSubtitle>
        </a>
        <a
          href="https://books.google.co.in/books/about/Developers_Road_ahead.html?id=SqsxEAAAQBAJ&redir_esc=y"
          style={{ textDecoration: "none" }}
          target="_blank"
        >
          <CardSubtitle
            tag="p"
            style={{ fontSize: "1.2rem", paddingBlock: "0.5rem" }}
            className="mb-2 pt-2 text-start nopadding col"
          >
            {data[0].writer}
          </CardSubtitle>
        </a>
      </Card>
    </>
  );
};

export default ModalLearning;
