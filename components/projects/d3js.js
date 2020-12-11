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

const D3 = ({ d31, d32, d33, d34 }) => {
  return (
    <Row>
      <Col sm="6" className="mb-1">
        <Card body>
          <CardImg top width="100%" src="/d3js.jpg" alt="Card image cap" />
          <CardTitle>
            <b>
              <i>Choropleth map</i>
            </b>
          </CardTitle>
          <CardText>{d31}</CardText>
          <CardBody>
            <CardLink
              className="link btn"
              style={{ color: "green" }}
              href="https://codepen.io/Aristo85/pen/vYBGPje"
              target="_blank"
            >
              CodePen
            </CardLink>
          </CardBody>
        </Card>
      </Col>
      <Col sm="6" className="mb-1">
        <Card body>
          <CardImg top width="100%" src="/d3js.jpg" alt="Card image cap" />
          <CardTitle>
            <b>
              <i>Heat map</i>
            </b>
          </CardTitle>
          <CardText>{d32}</CardText>
          <CardBody>
            <CardLink
              className="link btn"
              style={{ color: "green" }}
              href="https://codepen.io/Aristo85/pen/BXejEj"
              target="_blank"
            >
              CodePen
            </CardLink>
          </CardBody>
        </Card>
      </Col>
      <Col sm="6" className="mb-1">
        <Card body>
          <CardImg top width="100%" src="/d3js.jpg" alt="Card image cap" />
          <CardTitle>
            <b>
              <i>Scatterplot graph</i>
            </b>
          </CardTitle>
          <CardText>{d33}</CardText>
          <CardBody>
            <CardLink
              className="link btn"
              style={{ color: "green" }}
              href="https://codepen.io/Aristo85/pen/dxgOzq"
              target="_blank"
            >
              CodePen
            </CardLink>
          </CardBody>
        </Card>
      </Col>
      <Col sm="6" className="mb-1">
        <Card body>
          <CardImg top width="100%" src="/d3js.jpg" alt="Card image cap" />
          <CardTitle>
            <b>
              <i>Bar Chart</i>
            </b>
          </CardTitle>
          <CardText>{d34}</CardText>
          <CardBody>
            <CardLink
              className="link btn"
              style={{ color: "green" }}
              href="https://codepen.io/Aristo85/pen/pMaZZN"
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

export default D3;
