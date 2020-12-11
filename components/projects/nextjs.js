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

const Nextjs = (props) => {
  return (
    <Row>
      <Col sm="6" className="mb-1">
        <Card body>
          <CardImg top width="100%" src="Nextjs.jpg" alt="Card image cap" />
          <CardTitle>
            <b>
              <i>Notes</i>
            </b>
          </CardTitle>
          <CardText>{props.next1}</CardText>
          <CardBody>
            <CardLink
              className="link btn"
              style={{ color: "green" }}
              href="https://github.com/aristo85/nextjs-blog"
              target="_blank"
            >
              GitHub
            </CardLink>
            <CardLink
              className="link btn"
              style={{ color: "green" }}
              href="https://nextjs-blog-iota-dun.now.sh/"
              target="_blank"
            >
              Live Demo
            </CardLink>
          </CardBody>
        </Card>
      </Col>
      <Col sm="6" className="mb-1">
        <Card body>
          <CardImg top width="100%" src="Nextjs.jpg" alt="Card image cap" />
          <CardTitle>
            <b>
              <i>Hotel Resort</i>
            </b>
          </CardTitle>
          <CardText>{props.next2}</CardText>
          <CardBody>
            <CardLink
              className="link btn"
              style={{ color: "green" }}
              href="https://github.com/aristo85/next-hotel"
              target="_blank"
            >
              GitHub
            </CardLink>
            <CardLink
              className="link btn"
              style={{ color: "green" }}
              href="https://mighty-scrubland-88184.herokuapp.com/"
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

export default Nextjs;
