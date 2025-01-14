import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Zoom from "react-reveal/Zoom";
import { Fade } from "react-reveal";
import nasaCert from "../../images/nasa.png";
import pythonCert from "../../images/pythonf.png";
import hyperthonCert from "../../images/hyperthon.png";

export default function Certification() {
  const certificates = [
    {
      title: "NASA Space App Challenge",
      issuer: "NASA",
      logo: nasaCert,
    },
    {
      title: "Python Foundation Certificate",
      issuer: "Infosys",
      logo: pythonCert,
    },
    {
      title: "Hyperthon",
      issuer: "Global First Hyperthon",
      logo: hyperthonCert,
    },
  ];

  return (
    <div>
      <Container fluid className="certificate-section" id="certifications">
        <Container>
          <Row>
            <Col md={12} className="certificate-description d-flex justify-content-start">
              <Zoom left cascade>
                <h1 className="aboutme-heading">Certifications</h1>
              </Zoom>
            </Col>
            <Col md={12} className="mt-3">
              <Row className="g-4">
                {certificates.map((cert, index) => (
                  <Col md={4} key={index}>
                    <Fade bottom duration={2000} distance="20px">
                      <div
                        className="cert-card"
                        style={{
                          background: "#1e1e2f",
                          borderRadius: "10px",
                          padding: "15px",
                          textAlign: "center",
                          boxShadow: "0px 5px 15px rgba(0,0,0,0.2)",
                        }}
                      >
                        <div
                          className="cert-header"
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            height: "300px", // Increased size
                            overflow: "hidden",
                          }}
                        >
                          <img
                            src={cert.logo}
                            alt={cert.title}
                            style={{
                              width: "100%",
                              height: "100%",
                              objectFit: "contain", // Ensures the image is fully visible
                            }}
                          />
                        </div>
                        <div className="cert-body mt-3">
                          <h2
                            className="cert-body-title"
                            style={{
                              fontWeight: 700,
                              color: "#fbd9ad",
                              fontSize: "20px",
                            }}
                          >
                            {cert.title}
                          </h2>
                          <h3
                            className="cert-body-subtitle"
                            style={{
                              color: "#eb90ff",
                              marginBottom: "0px",
                              fontSize: "16px",
                            }}
                          >
                            - {cert.issuer}
                          </h3>
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
  );
}
