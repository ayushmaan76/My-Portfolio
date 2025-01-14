import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";

const About = () => {
  return (
    <div>
      <Container>
        <Row className="mt-5">
          <Col md={5}>
            {/* Lottie animation for coding */}
            <Slide left>
              <lottie-player
                src="https://assets5.lottiefiles.com/packages/lf20_iv4dsx3q.json"
                background="transparent"
                speed="1"
                style={{ width: "100%", height: "90%" }}
                loop
                autoplay
              ></lottie-player>
            </Slide>
          </Col>

          <Col md={7}>
            <Fade duration={3000}>
              <p className="home-about-body">
                Hi, I'm <b className="purple">Ayushmaan</b>, a passionate{" "}
                <b className="purple">Computer Science and Engineering</b> student at{" "}
                <b className="purple">Sri Venkateshwara College of Engineering</b> in Bengaluru, India.
                <br />
                <br />
                I am skilled in a wide range of programming languages and frameworks, including: &nbsp;
                <b className="purple">Python, C++, JavaScript, React, Node.js, SQL, and more.</b>
                <br />
                <br />
                I have hands-on experience with technologies such as &nbsp;
                <b className="purple">TensorFlow, Django, Flask, OpenCV, and MongoDB</b>. I enjoy solving complex problems and developing creative solutions using these technologies.
                <br />
                <br />
                My passion for technology drives me to keep learning new tools and frameworks. I particularly enjoy working with <b className="purple">Modern JavaScript Libraries</b> and <b className="purple">AI/ML applications</b> to build cutting-edge solutions.
                <br />
                <br />
                In addition to my technical skills, I value <b className="purple">collaboration, leadership, and effective communication</b>. I have led teams and also participated in national hackathons, such as the{" "}
                <b className="purple">Smart India Hackathon</b>, where I had the opportunity to work on real-world problems and develop innovative solutions.
                <br />
                <br />
                In my free time, I explore new technologies, contribute to open-source projects, and work on innovative software solutions.
              </p>
            </Fade>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
