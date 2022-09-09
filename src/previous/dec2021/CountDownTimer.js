import React from "react";
import CountDown from "reactjs-countdown";
import "./css/CountDownTimer.scss";
import { Container, Row, Col } from "reactstrap";
import { isMobileOnly } from "react-device-detect";

export const CountDownTimer = () => {
  return (
    <div className="dec2021-CountDownTimer">
      {!isMobileOnly ? (
        <Container fluid={true} className="dec2021-countDown">
          <Row className="dec2021-countDown-row">
            <Col>
              <Row>
                <Col>
                  <span className="dec2021-timer-date">
                    {" "}
                    11th December 2021{" "}
                  </span>
                </Col>
              </Row>
              <Row>
                <Col>
                  <span className="dec2021-timer-title">
                    {" "}
                    M365 Saturday Bangalore 2021{" "}
                  </span>
                </Col>
              </Row>
            </Col>
            <Col>
              <CountDown end="December 11, 2021  09:00" />
            </Col>
          </Row>
        </Container>
      ) : (
        <Container fluid={true} className="dec2021-countDown-mobile">
          <Row className="dec2021-timer-data-row">
            <Col>
              <span className="dec2021-timer-date-mobile">
                11th December 2021
              </span>
            </Col>
          </Row>
          <Row>
            <Col>
              <span className="dec2021-timer-title-mobile">
                {" "}
                M365 Saturday Bangalore 2021{" "}
              </span>
            </Col>
          </Row>
          <Row className="dec2021-timer-mobile">
            <Col>
              <CountDown end="December 11, 2021  09:00" />
            </Col>
          </Row>
        </Container>
      )}
    </div>
  );
};
