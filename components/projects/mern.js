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
  CardSubtitle,
} from "reactstrap";

const Mern = (props) => {
  return (
    <Row>
      <Col sm="6" className="mb-1">
        <Card body>
          <CardImg top width="100%" src="/mern.jpg" alt="Card image cap" />
          <CardTitle>
            <b>
              <i>Online Shopping</i>
            </b>
          </CardTitle>
          <CardText> {props.mern1}</CardText>
          <CardSubtitle>
            <u>
              <li>Responsive</li>
              <li>Separate user and admin authentication</li>
              <li>Deployment on Heroku through GitHub</li>
            </u>
          </CardSubtitle>
          <CardBody>
            <CardLink
              className="link btn"
              style={{ color: "green" }}
              href="https://github.com/aristo85/online-shop-mern"
              target="_blank"
            >
              GitHub
            </CardLink>
            <CardLink
              className="link btn"
              style={{ color: "green" }}
              href="https://salty-falls-25513.herokuapp.com/"
              target="_blank"
            >
              Live Demo
            </CardLink>
          </CardBody>
        </Card>
      </Col>
      <Col sm="6" className="mb-1">
        <Card body>
          <CardImg top width="100%" src="/mern.jpg" alt="Card image cap" />
          <CardTitle>
            <b>
              <i>Shopping List</i>
            </b>
          </CardTitle>
          <CardText>{props.mern2}</CardText>
          <CardBody>
            <CardLink
              className="link btn"
              style={{ color: "green" }}
              href="https://github.com/aristo85/MERN_SHOPPING_LIST"
              target="_blank"
            >
              GitHub
            </CardLink>
            <CardLink
              className="link btn"
              style={{ color: "green" }}
              href="https://lit-cliffs-22865.herokuapp.com/"
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

export default Mern;
