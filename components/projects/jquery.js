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

const Jquery = ({ jquery1, jquery2, jquery3, jquery4, jquery5 }) => {
  return (
    <Row>
      <Col sm="6" className="mb-1">
        <Card body>
          <CardImg top width="100%" src="/jquery.png" alt="Card image cap" />
          <CardTitle>
            <b>
              <i>Pomodoro Clock</i>
            </b>
          </CardTitle>
          <CardText>{jquery1}</CardText>
          <CardBody>
            <CardLink
              className="link btn"
              style={{ color: "green" }}
              href="https://codepen.io/Aristo85/pen/oErooN"
              target="_blank"
            >
              CodePen
            </CardLink>
          </CardBody>
        </Card>
      </Col>
      <Col sm="6" className="mb-1">
        <Card body>
          <CardImg top width="100%" src="/jquery.png" alt="Card image cap" />
          <CardTitle>
            <b>
              <i>Calculator</i>
            </b>
          </CardTitle>
          <CardText>{jquery2}</CardText>
          <CardBody>
            <CardLink
              className="link btn"
              style={{ color: "green" }}
              href="https://codepen.io/Aristo85/pen/mXawvY"
              target="_blank"
            >
              CodePen
            </CardLink>
          </CardBody>
        </Card>
      </Col>
      <Col sm="6" className="mb-1">
        <Card body>
          <CardImg top width="100%" src="/jquery.png" alt="Card image cap" />
          <CardTitle>
            <b>
              <i>Wiki Viewer</i>
            </b>
          </CardTitle>
          <CardText>{jquery3}</CardText>
          <CardBody>
            <CardLink
              className="link btn"
              style={{ color: "green" }}
              href="https://codepen.io/Aristo85/pen/aqoEqj"
              target="_blank"
            >
              CodePen
            </CardLink>
          </CardBody>
        </Card>
      </Col>
      <Col sm="6" className="mb-1">
        <Card body>
          <CardImg top width="100%" src="/jquery.png" alt="Card image cap" />
          <CardTitle>
            <b>
              <i>Instant weather APP</i>
            </b>
          </CardTitle>
          <CardText>{jquery4}</CardText>
          <CardBody>
            <CardLink
              className="link btn"
              style={{ color: "green" }}
              href="https://codepen.io/Aristo85/pen/dJBdMO"
              target="_blank"
            >
              CodePen
            </CardLink>
          </CardBody>
        </Card>
      </Col>
      <Col sm="6" className="mb-1">
        <Card body>
          <CardImg top width="100%" src="/jquery.png" alt="Card image cap" />
          <CardTitle>
            <b>
              <i>Quoter</i>
            </b>
          </CardTitle>
          <CardText>{jquery5}</CardText>
          <CardBody>
            <CardLink
              className="link btn"
              style={{ color: "green" }}
              href="https://codepen.io/Aristo85/pen/zpLVaE?editors=1010"
              target="_blank"
            >
              CodePen
            </CardLink>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default Jquery;
