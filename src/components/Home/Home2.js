import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillMail,
  AiOutlineTwitter,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I am a <b className="purple">BSCS Student</b> from <b className="purple">Arifwala, Punjab</b>.
              <br />
              <br />
              I successfully completed my <b className="purple">A.D.P (Cs)</b> with a <b className="purple">3.68 CGPA</b> from Riphah International.
              <br />
              <br />
              My expertise includes 
              <i>
                <b className="purple"> WordPress, Digital Media Marketing, and SEO</b>.
              </i>
              <br />
              <br />
              I hold a 1-year diploma in 
              <b className="purple"> Office Management and Graphic Design</b> and specialize in 
              <i>
                <b className="purple"> AI-Augmented Development</b>.
              </i>
              <br />
              <br />
              I am currently looking for a <b className="purple">Professional Opportunity</b> to explore my talent.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/RaoSaqlainKing"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:RaoSaqlainGee@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillMail />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/raosaqlain?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://x.com/RaoSaqlainKing?s=09"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;