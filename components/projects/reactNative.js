import React from "react";
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

const ReactNative = (props) => {
  return (
    <Row>
      <Col sm="6" className="mb-1">
        <Card body>
          <CardImg top width="100%" src="/reactNative.png" alt="Card image cap" />
          <CardTitle>
            <b>
              <i>Online Renting Taxi</i>
            </b>
          </CardTitle>
          <CardText> {props.reactNative1}</CardText>
          <CardBody>
            <CardLink
              className="link btn"
              style={{ color: "green" }}
              href="https://play.google.com/store/apps/details?id=sarnshin.shar.client"
              target="_blank"
            >
              Google Play Store
            </CardLink>
          </CardBody>
        </Card>
      </Col>
      <Col sm="6" className="mb-1">
        <Card body>
          <CardImg top width="100%" src="/reactNative.png" alt="Card image cap" />
          <CardTitle>
            <b>
              <i>Online Renting for Drivers</i>
            </b>
          </CardTitle>
          <CardText> {props.reactNative2}</CardText>
          <CardBody>
            <CardLink
              className="link btn"
              style={{ color: "green" }}
              href="https://play.google.com/store/apps/details?id=shofer.shar.car"
              target="_blank"
            >
              Google Play Store
            </CardLink>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default ReactNative;
