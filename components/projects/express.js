import React, { Component } from "react";
import {
  Card,
  CardBody,
  CardImg,
  CardLink,
  CardText,
  CardTitle,
  Col,
  Row,
} from "reactstrap";

const ExpressNode = ({ express1, express2, express3 }) => {
  return (
    <Row>
      <Col sm="6" className="mb-1">
        <Card body>
          <CardImg top width="100%" src="/express.png" alt="Card image cap" />
          <CardTitle>
            <b>
              <i>Exercise tracker</i>
            </b>
          </CardTitle>
          <CardText>{express1}</CardText>
          <CardBody>
            <CardLink
              className="link btn"
              style={{ color: "green" }}
              href="https://github.com/aristo85/exerciseTracker"
              target="_blank"
            >
              GitHub
            </CardLink>
          </CardBody>
        </Card>
      </Col>
      <Col sm="6" className="mb-1">
        <Card body>
          <CardImg top width="100%" src="/express.png" alt="Card image cap" />
          <CardTitle>
            <b>
              <i>Short URI</i>
            </b>
          </CardTitle>
          <CardText>{express2}</CardText>
          <CardBody>
            <CardLink
              className="link btn"
              style={{ color: "green" }}
              href="https://github.com/aristo85/BookServiceClient"
              target="_blank"
            >
              GitHub
            </CardLink>
          </CardBody>
        </Card>
      </Col>
      <Col sm="6" className="mb-1">
        <Card body>
          <CardImg top width="100%" src="/express.png" alt="Card image cap" />
          <CardTitle>
            <b>
              <i>Time Microservice</i>
            </b>
          </CardTitle>
          <CardText>{express3}</CardText>
          <CardBody>
            <CardLink
              className="link btn"
              style={{ color: "green" }}
              href="https://tomsktimestampari.herokuapp.com/"
              target="_blank"
            >
              Live Demo
            </CardLink>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default ExpressNode;
