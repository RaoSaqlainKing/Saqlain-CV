import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiOpenai,
  SiAdobepremierepro,
  SiCanva,
  SiVisualstudiocode,
  SiGithub,
  SiVercel,
  SiWindows,
} from "react-icons/si";
import { DiChrome } from "react-icons/di";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons" title="AI Tools">
        <SiOpenai />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="GitHub">
        <SiGithub />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Vercel">
        <SiVercel />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="VS Code">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Web Exploration">
        <DiChrome />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="CapCut/Editing">
        <SiAdobepremierepro />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Canva/Logo Design">
        <SiCanva />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Computer/OS">
        <SiWindows />
      </Col>
    </Row>
  );
}

export default Toolstack;