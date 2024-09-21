import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiJavascript1, DiReact } from "react-icons/di";
import {
  SiMaterialui,
  SiSolidity,
  SiRedux,
  SiPython,
  SiHtml5,
  SiFirebase,
  SiFlutter,
  SiC,
} from "react-icons/si";

const Techstack = () => {
  const techIconStyle = {
    background: "rgba(255, 255, 255, 0.1)", // Slightly transparent background
    backdropFilter: "blur(8px)", // Transparent background
    borderRadius: "10px", // Rounded corners
    padding: "15px",
    margin: "10px",
    textAlign: "center",
  };

  return (
    <Row
      style={{
        justifyContent: "center",
        paddingBottom: "50px",
        color: "white",
      }}
    >
      <Col xs={4} md={2} className="tech-icons" style={techIconStyle}>
        <SiFlutter size={50} />
        <p style={{ marginTop: "10px", fontSize: "14px", fontWeight: "500" }}>
          Flutter
        </p>
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={techIconStyle}>
        <SiFirebase size={50} />
        <p style={{ marginTop: "10px", fontSize: "14px", fontWeight: "500" }}>
          Firebase
        </p>
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={techIconStyle}>
        <SiHtml5 size={50} />
        <p style={{ marginTop: "10px", fontSize: "14px", fontWeight: "500" }}>
          HTML5
        </p>
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={techIconStyle}>
        <DiReact size={50} />
        <p style={{ marginTop: "10px", fontSize: "14px", fontWeight: "500" }}>
          React
        </p>
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={techIconStyle}>
        <SiRedux size={50} />
        <p style={{ marginTop: "10px", fontSize: "14px", fontWeight: "500" }}>
          Redux
        </p>
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={techIconStyle}>
        <DiJavascript1 size={50} />
        <p style={{ marginTop: "10px", fontSize: "14px", fontWeight: "500" }}>
          JavaScript
        </p>
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={techIconStyle}>
        <SiMaterialui size={50} />
        <p style={{ marginTop: "10px", fontSize: "14px", fontWeight: "500" }}>
          Material UI
        </p>
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={techIconStyle}>
        <SiSolidity size={50} />
        <p style={{ marginTop: "10px", fontSize: "14px", fontWeight: "500" }}>
          Solidity
        </p>
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={techIconStyle}>
        <SiPython size={50} />
        <p style={{ marginTop: "10px", fontSize: "14px", fontWeight: "500" }}>
          Python
        </p>
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={techIconStyle}>
        <SiC size={50} />
        <p style={{ marginTop: "10px", fontSize: "14px", fontWeight: "500" }}>
          C
        </p>
      </Col>
    </Row>
  );
};

export default Techstack;
