import React, { useState, useEffect } from "react";
import { Button, Container } from "react-bootstrap";
import { AiOutlineDownload } from "react-icons/ai";
import Particle from "../components/Particle";
import pdf from "../assets/AkbarHossanCV-2.pdf";
import tonmoy from "../assets/tonmoy.jpg";

const Resume = () => {
  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <div
          style={{ height: "80vh" }}
          className="d-flex justify-content-evenly align-items-center"
        >
          <div>
            <img
              src={tonmoy}
              style={{
                height: "400px",
                borderRadius: "10px",
                filter: "drop-shadow(0 0 10px black)",
              }}
              alt="tonmoy"
            />
          </div>
          <div>
            <h2 style={{ fontSize: "24px" }}>
              If you know about me you can see my resume
            </h2>
            <Button variant="primary" href={pdf} target="_blank">
              <AiOutlineDownload />
              &nbsp;Download Resume
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Resume;
