import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import projectImg from "../../Assets/Projects/Project.PNG";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here is my primary project I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={projectImg}
              isBlog={false}
              title="Medical4me.com"
              description="A healthcare platform where I manage the web development, SEO, and digital strategy. Built with WordPress, focusing on user experience and medical resource accessibility."
              ghLink="#"
              demoLink="https://medical4me.com"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;