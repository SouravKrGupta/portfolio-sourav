import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import chat from "../../Assets/Projects/chat.png";

import eco from "../../Assets/Projects/eco.png";
import doc from "../../Assets/Projects/doc.png";

import ins from "../../Assets/Projects/ins.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={doc}
              isBlog={false}
              title="Doctors Appointment System(Btech project)"
              description=" Doctors Appointment is platform where any user an easy way of booking a doctor’s appointment online.
              Available and booked slots are shown
               This platform has two parts Admin Side And User Side.
               Developed the backend using Node and Express, MongoDB as database and React as frontend ."
              ghLink="https://github.com/SouravKrGupta/Doctor-Appointment-system"
              demoLink="https://doctorapp-3bbk.onrender.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chat}
              isBlog={false}
              title="ChatGPT-Clone (Mini project) "
              description=" ChatGPT is clone of Open AI
              Function:Text Generation | Paragraph Generation|AI ChatBot|Javascript Converter|AI SCIFI Images
               ChatGPT has Login And Register function.
               Developed the backend using Node and Express, MongoDB as database and React as frontend."
              ghLink="https://github.com/SouravKrGupta/CHATGPT-Clone"
              demoLink="https://chatgpt-clone-8ozp.onrender.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ins}
              isBlog={false}
              title="Catch The Insect"
              description=" Catch The Insect is a game where we get point on clicking insect image on screen.
               This is an endless game for stopping the game you have quit the game.
               Developed the backend using JavaScript"
              ghLink="https://github.com/SouravKrGupta/Catch-The-Insect.github.io"
              demoLink="https://souravkrgupta.github.io/Catch-The-Insect.github.io/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={eco}
              isBlog={false}
              title="Ecommerce Website"
              description="Using HTML CSS and JavaScript "
              ghLink="https://github.com/SouravKrGupta/Cara_Ecommerce_Website"
              demoLink="https://souravkrgupta.github.io/Cara_Ecommerce_Website/"
            />
          </Col>

        
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
