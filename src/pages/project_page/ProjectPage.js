import React from "react";
import Particle from "../../Particle";
import { Container, Row, Col } from "react-bootstrap";
import Zoom from "react-reveal/Zoom";
import { Fade } from "react-reveal";
import womensafetyImg from "../../images/womensafety.png";
import codebattleImg from "../../images/codebattle.png";
import studentmanagementImg from "../../images/studentmanagement.png";
import portfolioImg from "../../images/h3.jpg"; // Updated image path
import aiMathSolverImg from "../../images/aiMathSolver.png";
import { FaCode } from "react-icons/fa";

export default function ProjectPage() {
  const projectData = [
    {
      id: 1,
      title: "Women Safety Analytics",
      img: womensafetyImg,
      desc: "A real-time analytics platform for monitoring gender distribution, detecting anomalies, and ensuring safety in public spaces.",
      tech: "Python, Flask, React, MySQL",
      link: "https://github.com/your-link-to-women-safety-analytics",
    },
    {
      id: 2,
      title: "Code Battle",
      img: codebattleImg,
      desc: "A competitive platform for developers to test their coding skills in real-time against each other.",
      tech: "Node.js, React, JavaScript",
      link: "https://github.com/your-link-to-code-battle",
    },
    {
      id: 3,
      title: "Student Management System",
      img: studentmanagementImg,
      desc: "A web-based platform to manage student data such as enrollment, grades, and attendance.",
      tech: "Java, MySQL, Spring Boot",
      link: "https://github.com/your-link-to-student-management",
    },
    {
      id: 4,
      title: "Portfolio Website",
      img: portfolioImg,
      desc: "A personal portfolio website showcasing my projects and skills.",
      tech: "HTML, CSS, JavaScript, React",
      link: "https://github.com/your-link-to-portfolio",
    },
    {
      id: 5,
      title: "AI Math Solver",
      img: aiMathSolverImg,
      desc: "An AI-based solution for solving complex math problems using computer vision.",
      tech: "Python, OpenCV, TensorFlow",
      link: "https://github.com/your-link-to-ai-math-solver",
    },
  ];

  return (
    <section className="home-section">
      <Container fluid id="home">
        <Particle />
        <Container className="home-content">
          <div
            className="d-flex justify-content-center"
            width="100%"
            style={{ backgroundColor: "#fbd9ad" }}
          >
            <Zoom left cascade>
              <h1 style={{ color: "rgb(134 61 176" }}>PROJECTS</h1>
            </Zoom>
          </div>
          <div>
            <Container fluid className="certificate-section" id="projects">
              <Container>
                <Row>
                  <Col md={12} className="mt-5">
                    <Row className="g-5">
                      {projectData.map((project) => (
                        <Col md={4} sm={12} key={project.id}>
                          <Fade bottom>
                            <div
                              className="singleProject"
                              style={{
                                backgroundColor: "rgb(142 70 186 / 31%)",
                                border: "1px solid",
                                padding: "15px",
                                borderRadius: "10px",
                                textAlign: "center",
                              }}
                            >
                              <div className="projectContent">
                                <h5 style={{ color: "#fbd9ad" }}>{project.title}</h5>
                                <img
                                  src={project.img}
                                  alt={project.title}
                                  style={{ width: "100%", borderRadius: "5px" }}
                                />
                                <div className="project--showcaseBtn mt-3">
                                  <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="iconBtn"
                                    aria-labelledby={`code-${project.id}`}
                                  >
                                    <FaCode
                                      id={`code-${project.id}`}
                                      className="icon"
                                      aria-label="Code"
                                    />
                                  </a>
                                </div>
                              </div>
                              <h6>
                                <p
                                  className="project--desc mt-3"
                                  style={{
                                    background: "#fbd9ad",
                                    color: "#b061df",
                                    fontWeight: 600,
                                    padding: "10px",
                                    borderRadius: "5px",
                                  }}
                                >
                                  {project.desc}
                                </p>
                              </h6>
                              <div
                                className="project--lang"
                                style={{
                                  background: "#fbd9ad",
                                  color: "#b061df",
                                  fontWeight: 600,
                                  padding: "5px",
                                  borderRadius: "5px",
                                }}
                              >
                                {project.tech}
                              </div>
                            </div>
                          </Fade>
                        </Col>
                      ))}
                    </Row>
                  </Col>
                </Row>
              </Container>
            </Container>
          </div>
        </Container>
      </Container>
    </section>
  );
}
