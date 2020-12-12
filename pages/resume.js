import PropTypes from "prop-types";
import React, { Component } from "react";
import { Progress } from "reactstrap";
import { Row, Container, Col } from "reactstrap";
import { withTranslation } from "../i18n";

const Resume = ({ t }) => {
  return (
    <Container className="resume">
      <Row xs="1">
        <Col md="4" className="resume-left-col">
          <div>
            <img
              src="https://gentle-refuge-73650.herokuapp.com/resume.jpg"
              alt="avatar"
              className="resume-img"
            />
          </div>
          <h2>{t("h2")}</h2>
          <div className="text-left">
            <h4 style={{ color: "grey" }}>{t("title")}</h4>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <p>{t("about")}</p>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <h5 className="d-inline">{t("address")}</h5>
            <p>{t("addrText")}</p>
            <h5>{t("phone")}</h5>
            <p>+79234292313</p>
            <h5>{t("email")}</h5>
            <p>aritomsk@yahoo.com</p>
          </div>
        </Col>
        <Col md="8" className="resume-right-col">
          <Row xs="1">
            <Col xs="4">
              <h3>{t("education")}</h3>
            </Col>
            <Col>
              <Row xs="1" className="education">
                <Col xs="6" sm="4">
                  <p>2006 - 2012</p>
                </Col>
                <Col sm="8" style={{ textAlign: "left" }}>
                  <h4 className="mt-0">{t("university")}</h4>
                  <p>{t("degree")}</p>
                </Col>
              </Row>
            </Col>
          </Row>
          <hr style={{ borderTop: "3px solid #e22947" }} />
          <Row xs="1">
            <Col xs="4">
              <h3>{t("experince")}</h3>
            </Col>
            <Col>
              <Row xs="1" className="education">
                <Col xs="8" sm="4">
                  <p>2013 - 2020</p>
                </Col>
                <Col sm="8" style={{ textAlign: "left" }}>
                  <h4 className="mt-0">{t("company")}</h4>
                  <p>{t("position")}</p>
                  <ul>
                    <li>{t("subject1")}</li>
                    <li>{t("subject2")}</li>
                    <li>{t("subject3")}</li>
                  </ul>
                </Col>
              </Row>
            </Col>
          </Row>
          <hr style={{ borderTop: "3px solid #e22947" }} />
          <Row xs="1" className="skills">
            <Col xs="4">
              <h3>{t("skills")}</h3>
            </Col>
            <Col>
              <Row xs="2">
                <Col sm="4">
                  <p>JavaScript</p>
                </Col>
                <Col sm="8">
                  <Progress value={90} />
                </Col>
              </Row>
              <Row xs="2">
                <Col sm="4">
                  <p>HTML/CSS</p>
                </Col>
                <Col sm="8">
                  <Progress value={80} />
                </Col>
              </Row>
              <Row xs="2">
                <Col sm="4">
                  <p>Node.js/Express</p>
                </Col>
                <Col sm="8">
                  <Progress value={70} />
                </Col>
              </Row>
              <Row xs="2">
                <Col sm="4">
                  <p>React/Redux</p>
                </Col>
                <Col sm="8">
                  <Progress value={85} />
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

Resume.getInitialProps = async () => ({
  namespacesRequired: ["resume"],
});

Resume.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation("resume")(Resume);
