import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiWordpress } from "react-icons/di";
import {
  SiGoogleads,
  SiGoogleanalytics,
  SiMeta,
  SiGooglesearchconsole,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons" title="WordPress">
        <DiWordpress />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Meta Ads">
        <SiMeta />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Google Ads">
        <SiGoogleads />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="SEO Analytics">
        <SiGoogleanalytics />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Search Console">
        <SiGooglesearchconsole />
      </Col>
    </Row>
  );
}

export default Techstack;