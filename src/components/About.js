import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import '../App.css';




function About() {
  return (
    <section id="about">
      <Container>
        <h2 className="text-center">About Me</h2>
        <p className="text-center">A little bit about myself.</p>
        <Row>
          <Col md={6} className="about-section">
            <h3>Who I Am</h3>
            <p>
              I'm a passionate web developer who loves creating beautiful and functional websites.
            </p>
          </Col>
          <Col md={6} className="about-section">
            <h3>My Skills</h3>
            <ul>
              <li>Front-end Development</li>
              <li>React.js</li>
              <li>HTML/CSS</li>
              <li>JavaScript</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;
