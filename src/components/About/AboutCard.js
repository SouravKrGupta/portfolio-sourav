import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Sourav Kumar Gupta</span>
            from <span className="purple"> Jharkhand, India.</span>
            <br /> I am a 3rd year student pursuing a major in Computer Science and Engineering at RVS College of Engineering and Technology, Jamshedpur. .
            <br />
            Additionally My areas of proficiency include C/C++, Java, Data Structures, and Algorithms. I actively participate in Competitive Coding Challenges on CodeChef and possess skills in Full Stack Web Development., 
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Listening Music
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          
          <footer className="blockquote-footer">SKG</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
