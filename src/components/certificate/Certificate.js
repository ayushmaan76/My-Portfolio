import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Fade from "react-reveal/Fade";
import pythonfoundation from "../../images/pythonfoundation.pdf";
import nasa from "../../images/nasa.pdf";
import hyperthon from "../../images/hyperthon.pdf";
import Graphics_Design from "../../images/Graphics_Design.jpg";
import CCNA_Certificate from "../../images/CCNA_Certificate.jpg";
import skill from "../../images/skill.png";
import iq from "../../images/IQ_Test.jpg";
import computer from "../../images/Computer_knowledge.jpg";

export default function Certificate() {
  const certificates = [
    { src: pythonfoundation, name: "Python Foundation" },
    { src: nasa, name: "NASA Certificate" },
    { src: hyperthon, name: "Hyperthon Achievement" },
    { src: Graphics_Design, name: "Graphics Design" },
    { src: CCNA_Certificate, name: "CCNA Certification" },
    { src: skill, name: "Skill Enhancement" },
    { src: iq, name: "IQ Test Excellence" },
    { src: computer, name: "Computer Knowledge" },
  ];

  return (
    <div className="mt-5">
      <Container>
        <Fade left cascade duration={1000} distance="20px">
          <Row className="g-4">
            {certificates.map((certificate, index) => (
              <Col md={4} key={index}>
                <div
                  className="certificate-card"
                  style={{
                    position: "relative",
                    overflow: "hidden",
                    borderRadius: "10px",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                    cursor: "pointer",
                    transition: "transform 0.3s",
                  }}
                >
                  <a
                    href={certificate.src}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    {certificate.src.endsWith(".pdf") ? (
                      <embed
                        src={certificate.src}
                        type="application/pdf"
                        style={{
                          width: "100%",
                          height: "300px",
                          objectFit: "cover",
                        }}
                      />
                    ) : (
                      <img
                        src={certificate.src}
                        alt={certificate.name}
                        style={{
                          width: "100%",
                          height: "300px",
                          objectFit: "cover",
                        }}
                      />
                    )}
                    <div
                      className="certificate-overlay"
                      style={{
                        position: "absolute",
                        top: "0",
                        left: "0",
                        width: "100%",
                        height: "100%",
                        background: "rgba(0, 0, 0, 0.5)",
                        opacity: "0",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        color: "#fff",
                        fontSize: "18px",
                        fontWeight: "bold",
                        borderRadius: "10px",
                        transition: "opacity 0.3s",
                      }}
                    >
                      {certificate.name}
                    </div>
                  </a>
                </div>
              </Col>
            ))}
          </Row>
        </Fade>
      </Container>
    </div>
  );
}
