import React, { useRef, useState } from "react";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import Fade from "react-reveal/Fade";
import { FaCode } from "react-icons/fa";
import { Link } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi";
import emailjs from "emailjs-com";

import womensafetyImg from "../../images/womensafety.png";
import codebattleImg from "../../images/codebattle.png";
import studentmanagementImg from "../../images/studentmanagement.png";
import portfolioImg from "../../images/h3.jpg";
import aiMathSolverImg from "../../images/aiMathSolver.png";

export default function ProjectsAndContact() {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_cs42ik6", // Your EmailJS service ID
        "template_82vkc0c", // Replace with your EmailJS template ID
        form.current,
        "8CMz9ikQVNlkNY6Pw" // Replace with your EmailJS public key
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatus("success");
        },
        (error) => {
          console.log(error.text);
          setStatus("error");
        }
      );

    e.target.reset();
  };

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
    <div>
      {/* Projects Section */}
      <Container fluid className="certificate-section" id="projects">
        <Container>
          <Row>
            <Col md={12} className="certificate-description">
              <Fade left cascade>
                <h1 className="aboutme-heading">Projects</h1>
              </Fade>
            </Col>
          </Row>
          <Row className="gy-5 mb-4">
            {projectData.map((project) => (
              <Col md={4} key={project.id}>
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
                          className={"iconBtn"}
                          aria-labelledby={`code-${project.id}`}
                        >
                          <FaCode
                            id={`code-${project.id}`}
                            className={"icon"}
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
          <div className="blog--viewAll mt-4">
            <Link to="/projectspage">
              <button className="btn btn-primary">
                View All
                <HiArrowRight className="viewArr" />
              </button>
            </Link>
          </div>
        </Container>
      </Container>

      {/* Particles Section */}
      <div className="particles-container" style={{ position: "relative", zIndex: 0 }}>
        {/* Add your particles or background effect here */}
      </div>

      {/* Contact Form Section */}
      <Container
        fluid
        style={{
          backgroundColor: "#fbd9ad",
          padding: "50px 0",
          textAlign: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        <Container>
          <Row>
            <Col md={12}>
              <Fade bottom>
                <h1
                  style={{
                    fontSize: "36px",
                    color: "#834cb6",
                    marginBottom: "20px",
                  }}
                >
                  Contact Me
                </h1>
              </Fade>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col md={6}>
              <Form ref={form} onSubmit={sendEmail}>
                <Form.Group controlId="formName" className="mb-3">
                  <Form.Label style={{ color: "#834cb6" }}>Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="user_name"
                    placeholder="Enter your name"
                    style={{ zIndex: 1 }}
                    required
                  />
                </Form.Group>
                <Form.Group controlId="formEmail" className="mb-3">
                  <Form.Label style={{ color: "#834cb6" }}>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="user_email"
                    placeholder="Enter your email"
                    style={{ zIndex: 1 }}
                    required
                  />
                </Form.Group>
                <Form.Group controlId="formMessage" className="mb-3">
                  <Form.Label style={{ color: "#834cb6" }}>Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    name="message"
                    rows={4}
                    placeholder="Enter your message"
                    style={{ zIndex: 1 }}
                    required
                  />
                </Form.Group>
                <Button
                  type="submit"
                  style={{
                    backgroundColor: "#834cb6",
                    borderColor: "#834cb6",
                    fontWeight: "600",
                  }}
                >
                  Send
                </Button>
              </Form>
              {status === "success" && (
                <Alert variant="success" className="mt-4">
                  Message sent successfully!
                </Alert>
              )}
              {status === "error" && (
                <Alert variant="danger" className="mt-4">
                  Oops! Something went wrong. Please try again.
                </Alert>
              )}
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
}
