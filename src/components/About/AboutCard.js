import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Saqlain Mushtaq</span> from <span className="purple">Arifwala, Punjab, Pakistan.</span>
            <br />
            I am currently pursuing <span className="purple">BS(CS)</span> at Khwaja Fareed University of Engineering & Information Technology.
            <br />
            I recently completed my <span className="purple">A.D.P (Cs)</span> from Riphah International with a <span className="purple">3.68/4.00 CGPA.</span>
            <br />
            <br />
            Apart from my academic studies and professional work, here are some activities I enjoy:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Competitive Gaming
            </li>
            <li className="about-activity">
              <ImPointRight /> Advanced Internet Exploring
            </li>
            <li className="about-activity">
              <ImPointRight /> AI-Augmented Development
            </li>
            <li className="about-activity">
              <ImPointRight /> Graphic Designing & Office Management
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference in real life!"
          </p>
          <footer className="blockquote-footer">Saqlain Mushtaq</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;