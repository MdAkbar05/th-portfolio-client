import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../assets/tonmoy.png";
import Particle from "../components/Particle";
import About from "../components/Home/About";
import Type from "../components/Home/Type";

const Home = () => {
  return (
    <>
      <Container className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hello, Here!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'm
                <strong className="main-name"> Tanver Hossain Tonmoy</strong>
              </h1>

              <div
                style={{ paddingLeft: 50, paddingTop: 20, textAlign: "left" }}
              >
                <Type />
              </div>

              <p className="desc">
                I'm Tanvir Hossain Tonmoy, a passionate and creative
                professional with expertise in web design, graphic design, and
                video editing. I bring a unique blend of technical skills and
                artistic vision to every project, ensuring visually stunning and
                user-friendly results. As an effective problem solver, I thrive
                on challenges and am dedicated to delivering solutions that
                exceed expectations. Let's collaborate and bring your ideas to
                life!
              </p>
            </Col>

            <Col md={5} style={{ paddingTop: 15 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <About />
    </>
  );
};

export default Home;
