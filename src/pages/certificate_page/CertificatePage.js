import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Zoom from "react-reveal/Zoom";
import { Fade } from "react-reveal";
import nasa from "../../images/nasa.png";
import pythonf from "../../images/pythonf.png";
import hyperthon from "../../images/hyperthon.png";
import Particle from "../../Particle";

export default function CertificatePage() {
  return (
    <section className="home-section" style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Container fluid id="home" style={{ flex: 1 }}>
        <Particle />
        <Container className="home-content">
          <div
            className="d-flex justify-content-center"
            width="100%"
            style={{ backgroundColor: "#fbd9ad" }}
          >
            <Zoom left cascade>
              <h1 style={{ color: "rgb(134 61 176)" }}>Certificates</h1>
            </Zoom>
          </div>
          <div>
            <Container fluid className="certificate-section" id="about">
              <Container>
                <Row>
                  <Col md={12} className="mt-5">
                    <Row className="g-5">
                      {/* Certificate 1: NASA */}
                      <Col md={4} className="col-sm-12 col-md4">
                        <Fade bottom duration={2000} distance="20px">
                          <div className="cert-card" style={{ height: "400px" }}>
                            <div className="content">
                              <a
                                href="https://nasa.gov/certificate-link"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <div className="content-overlay"></div>
                                <div
                                  className="cert-header"
                                  style={{ backgroundColor: "white", height: "250px" }}
                                >
                                  <img
                                    className="logo_img"
                                    src={nasa}
                                    alt="NASA"
                                    style={{
                                      height: "240px",
                                      width: "auto",
                                      display: "block",
                                      margin: "0 auto",
                                    }} // Fully fills the frame
                                  />
                                </div>
                                <div className="content-details fadeIn-top">
                                  <h3
                                    className="content-title"
                                    style={{ color: "black" }}
                                  >
                                    Certificate
                                  </h3>
                                </div>
                              </a>
                            </div>
                            <div className="cert-body">
                              <h2
                                className="cert-body-title"
                                style={{ fontWeight: 700, color: "#fbd9ad" }}
                              >
                                NASA Space App Challenge 2024: Participation
                              </h2>
                              <h3
                                className="cert-body-subtitle"
                                style={{
                                  color: "#eb90ff",
                                  marginBottom: "0px",
                                }}
                              >
                                - NASA Space App Challenge
                              </h3>
                            </div>
                          </div>
                        </Fade>
                      </Col>

                      {/* Certificate 2: Python Foundation */}
                      <Col md={4}>
                        <Fade bottom duration={2000} distance="20px">
                          <div className="cert-card" style={{ height: "400px" }}>
                            <div className="content">
                              <a
                                href="https://python.org/certificate-link"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <div className="content-overlay"></div>
                                <div
                                  className="cert-header"
                                  style={{ backgroundColor: "white", height: "250px" }}
                                >
                                  <img
                                    className="logo_img"
                                    src={pythonf}
                                    alt="Python Foundation"
                                    style={{
                                      height: "240px",
                                      width: "auto",
                                      display: "block",
                                      margin: "0 auto",
                                    }} // Fully fills the frame
                                  />
                                </div>
                                <div className="content-details fadeIn-top">
                                  <h3
                                    className="content-title"
                                    style={{ color: "black" }}
                                  >
                                    Certificate
                                  </h3>
                                </div>
                              </a>
                            </div>
                            <div className="cert-body">
                              <h2
                                className="cert-body-title"
                                style={{ fontWeight: 700, color: "#fbd9ad" }}
                              >
                                Python Foundation: Certified Python Developer
                              </h2>
                              <h3
                                className="cert-body-subtitle"
                                style={{
                                  color: "#eb90ff",
                                  marginBottom: "0px",
                                }}
                              >
                                - Python Foundation Infosys
                              </h3>
                            </div>
                          </div>
                        </Fade>
                      </Col>

                      {/* Certificate 3: Hyperthon */}
                      <Col md={4}>
                        <Fade bottom duration={2000} distance="20px">
                          <div className="cert-card" style={{ height: "400px" }}>
                            <div className="content">
                              <a
                                href="https://hyperthon.io/certificate-link"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <div className="content-overlay"></div>
                                <div
                                  className="cert-header"
                                  style={{ backgroundColor: "white", height: "250px" }}
                                >
                                  <img
                                    className="logo_img"
                                    src={hyperthon}
                                    alt="Hyperthon"
                                    style={{
                                      height: "240px",
                                      width: "auto",
                                      display: "block",
                                      margin: "0 auto",
                                    }} // Fully fills the frame
                                  />
                                </div>
                                <div className="content-details fadeIn-top">
                                  <h3
                                    className="content-title"
                                    style={{ color: "black" }}
                                  >
                                    Certificate
                                  </h3>
                                </div>
                              </a>
                            </div>
                            <div className="cert-body">
                              <h2
                                className="cert-body-title"
                                style={{ fontWeight: 700, color: "#fbd9ad" }}
                              >
                                Hyperthon 2024: Hackathon Excellence Award
                              </h2>
                              <h3
                                className="cert-body-subtitle"
                                style={{
                                  color: "#eb90ff",
                                  marginBottom: "0px",
                                }}
                              >
                                - Hyperthon
                              </h3>
                            </div>
                          </div>
                        </Fade>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Container>
            </Container>
          </div>
        </Container>
      </Container>
      {/* Footer Component */}
      <footer
        style={{
          backgroundColor: "#232323",
          color: "#fff",
          padding: "20px 0",
          textAlign: "center",
          marginTop: "auto", // Pushes footer to the bottom
        }}
      >
        <p>&copy; 2025 My Website. All rights reserved.</p>
      </footer>
    </section>
  );
}
