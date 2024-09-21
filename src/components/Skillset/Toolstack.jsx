import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiVercel,
  SiNetlify,
  SiArduino,
  SiRedhat,
  SiAdobepremierepro,
  SiAdobeaftereffects,
  SiGit,
} from "react-icons/si";

const Toolstack = () => {
  const toolIconStyle = {
    backdropFilter: "blur(8px)",
    WebkitBackdropFilter: "blur(8px)", // For Safari
    background: "rgba(255, 255, 255, 0.1)", // Transparent background
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
      <Col xs={4} md={2} className="tech-icons" style={toolIconStyle}>
        <SiVisualstudiocode size={50} />
        <p style={{ marginTop: "10px", fontSize: "14px", fontWeight: "500" }}>
          VS Code
        </p>
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={toolIconStyle}>
        <SiArduino size={50} />
        <p style={{ marginTop: "10px", fontSize: "14px", fontWeight: "500" }}>
          Arduino
        </p>
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={toolIconStyle}>
        <SiVercel size={50} />
        <p style={{ marginTop: "10px", fontSize: "14px", fontWeight: "500" }}>
          Vercel
        </p>
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={toolIconStyle}>
        <SiGit size={50} />
        <p style={{ marginTop: "10px", fontSize: "14px", fontWeight: "500" }}>
          Git
        </p>
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={toolIconStyle}>
        <SiRedhat size={50} />
        <p style={{ marginTop: "10px", fontSize: "14px", fontWeight: "500" }}>
          Red Hat
        </p>
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={toolIconStyle}>
        <SiNetlify size={50} />
        <p style={{ marginTop: "10px", fontSize: "14px", fontWeight: "500" }}>
          Netlify
        </p>
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={toolIconStyle}>
        <SiAdobepremierepro size={50} />
        <p style={{ marginTop: "10px", fontSize: "14px", fontWeight: "500" }}>
          Premiere Pro
        </p>
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={toolIconStyle}>
        <SiAdobeaftereffects size={50} />
        <p style={{ marginTop: "10px", fontSize: "14px", fontWeight: "500" }}>
          After Effects
        </p>
      </Col>
    </Row>
  );
};

export default Toolstack;
