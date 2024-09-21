import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProjects, updateProject } from "../../features/projectSlice";
import { useNavigate } from "react-router-dom";

const UpdateProject = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { projects, isLoading, error } = useSelector(
    (state) => state.projectReducer
  );

  // Local state to store selected project and form data
  const [selectedProject, setSelectedProject] = useState(null);
  const [formData, setFormData] = useState({
    projectTitle: "",
    projectDesc: "",
    projectLink: "",
  });
  const [imageFile, setImageFile] = useState(null); // State to handle image file

  // Fetch projects when component mounts
  useEffect(() => {
    dispatch(fetchProjects());
  }, [dispatch]);

  // Handle project selection
  const handleSelectChange = (e) => {
    const project = projects.find((p) => p._id === e.target.value);
    setSelectedProject(project);

    // Populate the form with the selected project details
    if (project) {
      setFormData({
        projectTitle: project.projectTitle,
        projectDesc: project.projectDesc,
        projectLink: project.projectLink,
      });
    }
  };

  // Handle form field changes
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle file selection
  const handleFileChange = (e) => {
    setImageFile(e.target.files[0]); // Set the selected image file
  };

  // Handle form submission for updating project
  const handleSubmit = (e) => {
    e.preventDefault();

    // Create FormData object for the form data and image
    const formDataToSend = new FormData();
    formDataToSend.append("projectTitle", formData.projectTitle);
    formDataToSend.append("projectDesc", formData.projectDesc);
    formDataToSend.append("projectLink", formData.projectLink);
    if (imageFile) {
      formDataToSend.append("projectImage", imageFile); // Append the image file
    }

    if (selectedProject) {
      dispatch(
        updateProject({
          id: selectedProject._id,
          updatedProjectData: formDataToSend,
        })
      );
      navigate("/panel/project/");
    }
  };

  return (
    <div className="container mt-5 text-light w-75 bg-primary p-4 rounded-2">
      <h2 className="mb-4 text-center text-light">Update Project</h2>

      {/* Error message */}
      {error && <div className="alert alert-danger">{error}</div>}

      {/* Loading spinner */}
      {isLoading && (
        <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}

      {/* Select project dropdown */}
      {!isLoading && (
        <div className="mb-4">
          <label htmlFor="projectSelect" className="form-label text-light">
            Select a Project to Update:
          </label>
          <select
            id="projectSelect"
            className="form-select"
            onChange={handleSelectChange}
            defaultValue=""
          >
            <option value="" disabled>
              -- Select a project --
            </option>
            {projects.map((project) => (
              <option key={project._id} value={project._id}>
                {project.projectTitle}
              </option>
            ))}
          </select>
        </div>
      )}

      {/* Update form */}
      {selectedProject && (
        <form
          onSubmit={handleSubmit}
          encType="multipart/form-data"
          className="text-light"
        >
          <div className="mb-3">
            <label htmlFor="projectTitle" className="form-label">
              Project Title
            </label>
            <input
              type="text"
              className="form-control"
              id="projectTitle"
              name="projectTitle"
              value={formData.projectTitle}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="projectDesc" className="form-label">
              Project Description
            </label>
            <textarea
              className="form-control"
              id="projectDesc"
              name="projectDesc"
              value={formData.projectDesc}
              onChange={handleInputChange}
              rows="3"
              required
            ></textarea>
          </div>

          <div className="mb-3">
            <label htmlFor="projectImage" className="form-label">
              Project Image
            </label>
            <input
              type="file"
              className="form-control"
              id="projectImage"
              name="projectImage"
              onChange={handleFileChange}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="projectLink" className="form-label">
              Project Link
            </label>
            <input
              type="text"
              className="form-control"
              id="projectLink"
              name="projectLink"
              value={formData.projectLink}
              onChange={handleInputChange}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Update Project
          </button>
        </form>
      )}
    </div>
  );
};

export default UpdateProject;
