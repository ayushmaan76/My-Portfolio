import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Zoom from "react-reveal/Zoom";
import { Fade } from "react-reveal";
import Particle from "../../Particle";

export default function BlogsPage() {
  return (
    <section
      className="home-section"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Container fluid id="home" style={{ flex: 1 }}>
        <Particle />
        <Container className="home-content">
          {/* Header Section */}
          <div
            className="d-flex justify-content-center"
            style={{
              backgroundColor: "#fbd9ad",
              padding: "3px 80px", // Reduced padding for a thinner bar
              marginBottom: "30px", // Space between cream bar and content
              maxWidth: "100%",
              borderRadius: "8px",
            }}
          >
            <Zoom left cascade>
              <h1 style={{ color: "rgb(134 61 176)", fontSize: "2.5rem" }}>My Blogs</h1>
            </Zoom>
          </div>

          {/* Blog Cards Section */}
          <Container fluid className="blogs-section" id="blogs">
            <Container>
              <Row className="g-4">
                {/* Blog Cards */}
                {[
                  {
                    title: "Understanding React Hooks",
                    description:
                      "Learn the power of React Hooks and how they simplify state management in functional components.",
                    link: "https://reactjs.org/docs/hooks-intro.html",
                  },
                  {
                    title: "Mastering JavaScript",
                    description:
                      "Dive into advanced JavaScript concepts like closures, event loops, and asynchronous programming.",
                    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
                  },
                  {
                    title: "Building a Portfolio Website",
                    description:
                      "A step-by-step guide to creating your own portfolio website using React and modern design principles.",
                    link: "https://www.freecodecamp.org/news/portfolio-guide/",
                  },
                  {
                    title: "Introduction to Python for Beginners",
                    description:
                      "A comprehensive guide to Python programming, perfect for beginners looking to get started.",
                    link: "https://www.python.org/about/gettingstarted/",
                  },
                  {
                    title: "How to Succeed in Hackathons",
                    description:
                      "Discover tips and strategies to excel in hackathons and deliver impactful projects.",
                    link: "https://hackathon.guide/",
                  },
                  {
                    title: "Exploring Machine Learning Basics",
                    description:
                      "An introduction to machine learning concepts and tools to kickstart your AI journey.",
                    link: "https://developers.google.com/machine-learning/crash-course",
                  },
                ].map((blog, index) => (
                  <Col md={4} key={index}>
                    <Fade bottom duration={2000} distance="20px">
                      <div
                        className="blog-card"
                        style={{
                          height: "400px",
                          backgroundColor: "#fff",
                          borderRadius: "8px",
                          padding: "20px",
                          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                        }}
                      >
                        <h3 style={{ color: "rgb(134 61 176)" }}>{blog.title}</h3>
                        <p style={{ color: "#555", marginBottom: "20px" }}>{blog.description}</p>
                        <a
                          href={blog.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            color: "rgb(134 61 176)",
                            fontWeight: "bold",
                            textDecoration: "none",
                          }}
                        >
                          Read More &rarr;
                        </a>
                      </div>
                    </Fade>
                  </Col>
                ))}
              </Row>
            </Container>
          </Container>
        </Container>
      </Container>

      {/* Footer Section */}
      <footer
        style={{
          padding: "10px 0", // Reduced padding for a smaller footer
          backgroundColor: "transparent", // Transparent background
          textAlign: "center",
          marginTop: "auto",
        }}
      >
        <p style={{ color: "rgb(134 61 176)", fontSize: "0.8rem" }}>
          © 2025 My Portfolio. All Rights Reserved.
        </p>
      </footer>
    </section>
  );
}
