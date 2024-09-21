import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
import pg from "../assets/projects/pg.png";
import project from "../assets/projects/project.jpeg";
import lift from "../assets/projects/lift.png";
import krypto from "../assets/projects/krypto.png";
import kickstart from "../assets/projects/kickstart.png";

import { useSelector, useDispatch } from "react-redux";
import { fetchProjects } from "../features/projectSlice";

// const imgUrl = "../../../backend/public/"
const Projects = () => {
  const dispatch = useDispatch();
  const { projects, isLoading } = useSelector((state) => state.projectReducer);

  React.useEffect(() => {
    dispatch(fetchProjects());
  }, []);
  return (
    <Container fluid className="project-section" style={{ height: "90vh" }}>
      <Particle />
      <Container>
        <h1 className="project-heading">
          Recent Top <strong className="yellow">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {isLoading ? (
            <h2>Projects Loading .....</h2>
          ) : projects.length > 0 ? (
            projects.map((project) => {
              return (
                <Col key={project._id} md={4} className="project-card">
                  <ProjectCard
                    imgPath={project.projectImage}
                    isBlog={false}
                    title={project.projectTitle}
                    description={project.projectDesc}
                    ghLink={project.projectLink}
                  />
                </Col>
              );
            })
          ) : (
            <h3 className="text-danger">
              Problem with Server to fetching, Maybe your server is disconnected
            </h3>
          )}
        </Row>
      </Container>
    </Container>
  );
};

export default Projects;
