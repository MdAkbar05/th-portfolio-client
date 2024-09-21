import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import LaptopImg from "../../assets/home-main.png";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedinIn, FaFacebook } from "react-icons/fa";

const About = () => {
  const boxStyle = {
    background: "rgba(255, 255, 255, 0.1)", // Slightly transparent background
    backdropFilter: "blur(8px)", // Apply the backdrop blur effect
    border: "1px solid rgba(255, 255, 255, 0.3)", // Light border to separate the box
    borderRadius: "15px", // Rounded corners for the box
    boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.2)", // Subtle shadow for depth
    padding: "30px", // Padding inside the box for content spacing
    color: "#fff", // White text color inside the box
  };

  return (
    <Container
      className="home-about-section"
      id="about"
      style={{
        backgroundColor: "transparent",
        minHeight: "100vh",
        padding: "50px 0",
      }}
    >
      <Row className="justify-content-center">
        <Col md={10}>
          <h1
            className="text-center"
            style={{ fontSize: "2.5em", fontWeight: "bold", color: "#fff" }}
          >
            LET ME <span className="yellow"> INTRODUCE </span> MYSELF
          </h1>
        </Col>
      </Row>

      {/* Introduction Cards */}
      <Row className="justify-content-center mt-4">
        <Col md={6} className="mb-3">
          <div className="p-4 text-center backdrop-blur" style={boxStyle}>
            <div className="yellow mb-3">Hi, my name is</div>
            <p style={{ fontSize: "1.2em", color: "#fff" }}>
              Tanver Hossain Tonmoy
            </p>
          </div>
        </Col>
        <Col md={6} className="mb-3">
          <div className="p-4 text-center backdrop-blur" style={boxStyle}>
            <div className="yellow mb-3">I'm from</div>
            <p style={{ fontSize: "1.2em", color: "#fff" }}>
              Mirsharai, Chittagong
            </p>
          </div>
        </Col>
        <Col md={6} className="mb-3">
          <div className="p-4 text-center backdrop-blur" style={boxStyle}>
            <div className="yellow mb-3">Education</div>
            <p style={{ fontSize: "1.2em", color: "#fff" }}>
              Diploma in CST Engineering at <br />
              <b className="yellow">Daffodil Institute of IT</b> <br />
              Completed HSC in 2020
            </p>
          </div>
        </Col>
        <Col md={6} className="mb-3">
          <div className="p-4 text-center backdrop-blur" style={boxStyle}>
            <div className="yellow mb-3">Skills</div>
            <p style={{ fontSize: "1.2em", color: "#fff" }}>
              <b>Graphics Design:</b> Adobe Illustrator, Photoshop <br />
              <b>Web Design:</b> HTML, CSS, React, Next.js, JavaScript <br />
              <b>Video Editor:</b> Filmora,Capcut, After Effect, OBS Studio
            </p>
          </div>
        </Col>
      </Row>

      {/* Additional Interests */}
      <Row className="justify-content-center mt-4">
        <Col md={12} className="text-center">
          <div className="p-4 backdrop-blur" style={boxStyle}>
            <h3 className="yellow mb-3">My Interests</h3>
            <p style={{ fontSize: "1.2em", color: "#fff" }}>
              I'm interested in building{" "}
              <b className="yellow">new Web Technologies and Products</b> and
              exploring areas related to{" "}
              <b className="yellow">Artificial Intelligence.</b>
            </p>
          </div>
        </Col>
      </Row>

      {/* Social Links */}
      <Row className="justify-content-center mt-5">
        <Col md={12} className="home-about-social text-center">
          <h2 className="mb-4" style={{ color: "#fff" }}>
            FIND ME ON
          </h2>
          <p style={{ fontSize: "1.2em", color: "#fff" }}>
            Feel free to <span className="yellow">connect</span> with me on any
            platform below.
          </p>
          <ul className="home-about-social-links list-inline">
            <li className="list-inline-item">
              <a
                href="https://github.com/tonmoy-bhuiyan"
                target="_blank"
                rel="noreferrer"
                className="icon-colour home-social-icons"
                aria-label="github"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="list-inline-item">
              <a
                href="wwww.twitter.com/TanverH22832"
                target="_blank"
                rel="noreferrer"
                className="icon-colour home-social-icons"
                aria-label="twitter"
              >
                <AiOutlineTwitter />
              </a>
            </li>
            <li className="list-inline-item">
              <a
                href="www.linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="icon-colour home-social-icons"
                aria-label="linkedin"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="list-inline-item">
              <a
                href="https://web.facebook.com/tonmoybhuiyan0?mibextid=LQQJ4d&_rdc=1&_rdr"
                target="_blank"
                rel="noreferrer"
                className="icon-colour home-social-icons"
                aria-label="facebook"
              >
                <FaFacebook />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
