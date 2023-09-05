import React from "react";
import CountDown from "reactjs-countdown";
import "./css/CountDownTimer.scss";
import { Container, Row, Col } from "reactstrap";
import { isMobileOnly } from "react-device-detect";

export const CountDownTimer = () => {
  return (
    <div className="dec2022-CountDownTimer mb-4">
      {!isMobileOnly ? (
        <Container fluid={true} className="dec2022-countDown">
          <Row className="dec2022-countDown-row">
            <Col>
              <Row>
                <Col>
                  <span className="dec2022-timer-date">26th August 2023</span>
                </Col>
              </Row>
              <Row>
                <Col>
                  <span className="dec2022-timer-title">
                  MICROSOFT POWER PLATFORM CONNECT 2023 BANGALORE
                  </span>
                </Col>
              </Row>
            </Col>
            <Col>
              <CountDown end="September 09, 2023  09:00" />
            </Col>
          </Row>
        </Container>
      ) : (
        <Container fluid={true} className="dec2022-countDown-mobile">
          <Row className="dec2022-timer-data-row">
            <Col>
              <span className="dec2022-timer-date-mobile">
                {" "}
                9th September 2023{" "}
              </span>
            </Col>
          </Row>
          <Row>
            <Col>
              <span className="dec2022-timer-title-mobile">
                {" "}
                MICROSOFT POWER PLATFORM CONNECT 2023 BANGALORE{" "}
              </span>
            </Col>
          </Row>
          <Row className="dec2022-timer-mobile">
            <Col>
              {/* Sets the coundown to mentioned date */}
              <CountDown end="September 09, 2023  09:00" />
            </Col>
          </Row>
        </Container>
      )}
    </div>
  );
};
