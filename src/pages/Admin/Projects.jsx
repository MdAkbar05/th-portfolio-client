import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteProject, fetchProjects } from "../../features/projectSlice";
import { Link } from "react-router-dom";

const Projects = () => {
  const dispatch = useDispatch();
  const { projects, isLoading, error } = useSelector(
    (state) => state.projectReducer
  );

  useEffect(() => {
    dispatch(fetchProjects());
  }, [dispatch]);

  return (
    <div className="container mt-5">
      {/* Loading and Error states */}
      {isLoading && (
        <div className="d-flex justify-content-center">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
      {error && (
        <div className="alert alert-danger text-center" role="alert">
          Error: {error}
        </div>
      )}

      {/* Projects List */}
      <div className="row">
        {/* Add Project Card */}
        <div className="col-md-6 col-lg-4 mb-4 ">
          <Link to="/panel/add-project" className="text-decoration-none ">
            <div className="card text-center border-primary shadow-lg h-100 pt-5">
              <div className="card-body">
                <h5 className="card-title">Add New Project</h5>
                <p className="card-text">Click here to add a new project.</p>
                <button className="btn btn-primary">Add Project</button>
              </div>
            </div>
          </Link>
        </div>
        {projects.map((project) => (
          <div key={project._id} className="col-md-6 col-lg-4 mb-4">
            <div className="card text-white bg-dark shadow-lg h-100">
              {project.projectImage && (
                <img
                  src={project.projectImage}
                  className="card-img-top"
                  alt={project.projectTitle}
                  style={{ height: "200px", objectFit: "cover" }}
                />
              )}
              <div className="card-body">
                <h5 className="card-title">{project.projectTitle}</h5>
                <p className="card-text">{project.projectDesc}</p>
                <div className="d-flex gap-2 justify-content-center align-items-center">
                  <a
                    href={project.projectLink}
                    className="btn btn-primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit Project
                  </a>
                  <button
                    className="btn btn-danger"
                    onClick={() => dispatch(deleteProject(project._id))}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
