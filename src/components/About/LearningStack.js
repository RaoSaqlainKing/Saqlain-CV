import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiNodejs, DiReact } from "react-icons/di";
import { SiNextdotjs, SiDotnet } from "react-icons/si";

function LearningStack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons" title="React.js">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Node.js">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Next.js">
        <SiNextdotjs />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title=".NET">
        <SiDotnet />
      </Col>
    </Row>
  );
}

export default LearningStack;