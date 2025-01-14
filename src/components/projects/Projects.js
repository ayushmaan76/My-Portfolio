import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Zoom from "react-reveal/Zoom";
import { FaCode } from "react-icons/fa";
import womensafetyImg from "../../images/womensafety.png";
import codebattleImg from "../../images/codebattle.png";
import studentmanagementImg from "../../images/studentmanagement.png";
import portfolioImg from "../../images/h3.jpg";

export default function Projects() {
  return (
    <div>
      <style>
        {`
          .tilt-effect {
            transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
          }

          .tilt-effect:hover {
            transform: perspective(1000px) rotateX(5deg) rotateY(5deg) scale(1.05);
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
          }

          .mb-5 {
            margin-bottom: 3rem !important;
          }

          .mt-5 {
            margin-top: 3rem !important;
          }

          .singleProject img {
            width: 100%;
            height: auto;
            border-radius: 8px;
          }

          .projectContent {
            text-align: center;
            padding: 10px;
          }

          .project--desc {
            background: #fbd9ad;
            color: #b061df;
            font-weight: 600;
          }

          .project--lang {
            background: #fbd9ad;
            color: #b061df;
            font-weight: 600;
            text-align: center;
            padding: 5px;
            border-radius: 5px;
          }
        `}
      </style>

      <Container fluid className="certificate-section" id="projects">
        <Container>
          <Row>
            <Col md={12} className="certificate-description">
              <Zoom left cascade>
                <h1 className="aboutme-heading">Projects</h1>
              </Zoom>
            </Col>
          </Row>

          <Row className="mt-5">
            {/* Women Safety Project */}
            <Col md={4} className="mb-5">
              <Zoom bottom>
                <div
                  className="singleProject tilt-effect"
                  style={{
                    backgroundColor: "rgb(142 70 186 / 31%)",
                    border: "1px solid",
                    borderRadius: "10px",
                  }}
                >
                  <div className="projectContent">
                    <h5 style={{ color: "#fbd9ad" }}>Women Safety Analytics</h5>
                    <img src={womensafetyImg} alt="Women Safety" />
                    <div className="project--showcaseBtn">
                      <a
                        href="https://github.com/your-link-to-women-safety-analytics"
                        target="_blank"
                        rel="noreferrer"
                        className={"iconBtn"}
                        aria-labelledby={`code`}
                      >
                        <FaCode
                          id={`code`}
                          className={"icon"}
                          aria-label="Code"
                        />
                      </a>
                    </div>
                  </div>
                  <h6>
                    <p className="project--desc">
                      A real-time analytics platform for monitoring gender
                      distribution, detecting anomalies, and ensuring safety in
                      public spaces.
                    </p>
                  </h6>
                  <div className="project--lang">
                    Python, Flask, React, MySQL
                  </div>
                </div>
              </Zoom>
            </Col>

            {/* Code Battle Project */}
            <Col md={4} className="mb-5">
              <Zoom bottom>
                <div
                  className="singleProject tilt-effect"
                  style={{
                    backgroundColor: "rgb(142 70 186 / 31%)",
                    border: "1px solid",
                    borderRadius: "10px",
                  }}
                >
                  <div className="projectContent">
                    <h5 style={{ color: "#fbd9ad" }}>Code Battle</h5>
                    <img src={codebattleImg} alt="Code Battle" />
                    <div className="project--showcaseBtn">
                      <a
                        href="https://github.com/your-link-to-code-battle"
                        target="_blank"
                        rel="noreferrer"
                        className={"iconBtn"}
                        aria-labelledby={`code`}
                      >
                        <FaCode
                          id={`code`}
                          className={"icon"}
                          aria-label="Code"
                        />
                      </a>
                    </div>
                  </div>
                  <h6>
                    <p className="project--desc">
                      A competitive platform for developers to test their coding
                      skills in real-time against each other.
                    </p>
                  </h6>
                  <div className="project--lang">
                    Node.js, React, JavaScript
                  </div>
                </div>
              </Zoom>
            </Col>

            {/* Student Management System Project */}
            <Col md={4} className="mb-5">
              <Zoom bottom>
                <div
                  className="singleProject tilt-effect"
                  style={{
                    backgroundColor: "rgb(142 70 186 / 31%)",
                    border: "1px solid",
                    borderRadius: "10px",
                  }}
                >
                  <div className="projectContent">
                    <h5 style={{ color: "#fbd9ad" }}>Student Management</h5>
                    <img src={studentmanagementImg} alt="Student Management" />
                    <div className="project--showcaseBtn">
                      <a
                        href="https://github.com/your-link-to-student-management"
                        target="_blank"
                        rel="noreferrer"
                        className={"iconBtn"}
                        aria-labelledby={`code`}
                      >
                        <FaCode
                          id={`code`}
                          className={"icon"}
                          aria-label="Code"
                        />
                      </a>
                    </div>
                  </div>
                  <h6>
                    <p className="project--desc">
                      A web-based platform to manage student data such as
                      enrollment, grades, and attendance.
                    </p>
                  </h6>
                  <div className="project--lang">
                    Java, MySQL, Spring Boot
                  </div>
                </div>
              </Zoom>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
}
