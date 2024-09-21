import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createProject } from "../../features/projectSlice";

const AddProject = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    projectTitle: "",
    projectDesc: "",
    projectLink: "",
    projectImage: null,
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    for (const key in formData) {
      formDataToSend.append(key, formData[key]);
    }

    try {
      await dispatch(createProject(formDataToSend));
      // Handle success (e.g., redirect or show a success message)
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="container mt-5 text-light w-75 bg-primary p-4 rounded-2">
      <h2 className="mb-4">Add New Project</h2>
      {error && (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      )}
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="mb-3">
          <label htmlFor="projectTitle" className="form-label">
            Project Title
          </label>
          <input
            type="text"
            className="form-control "
            id="projectTitle"
            name="projectTitle"
            value={formData.projectTitle}
            onChange={handleChange}
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
            rows="3"
            value={formData.projectDesc}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <div className="mb-3">
          <label htmlFor="projectLink" className="form-label">
            Project Link
          </label>
          <input
            type="url"
            className="form-control"
            id="projectLink"
            name="projectLink"
            value={formData.projectLink}
            onChange={handleChange}
            required
          />
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
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="btn btn-success">
          Add Project
        </button>
      </form>
    </div>
  );
};

export default AddProject;
