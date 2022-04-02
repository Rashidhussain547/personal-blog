import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiAdobephotoshop,
  SiAdobelightroom,
  SiSublimetext
} from "react-icons/si";
import {
  BiCodeBlock
} from "react-icons/bi";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiAdobephotoshop />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAdobelightroom />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <BiCodeBlock />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSublimetext />
      </Col>
    </Row>
  );
}

export default Toolstack;
