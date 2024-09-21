import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Base URL for the API
const API_URL = "http://localhost:5000/api/projects";

// Async thunk to fetch projects
export const fetchProjects = createAsyncThunk(
  "projects/fetchProjects",
  async () => {
    const response = await axios.get(API_URL);
    return response.data;
  }
);

// Async thunk to create a new project
export const createProject = createAsyncThunk(
  "projects/createProject",
  async (newProjectData) => {
    const response = await axios.post(API_URL, newProjectData);
    return response.data;
  }
);

// Async thunk to update an existing project
export const updateProject = createAsyncThunk(
  "projects/updateProject",
  async ({ id, updatedProjectData }) => {
    const response = await axios.put(`${API_URL}/${id}`, updatedProjectData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  }
);

// Async thunk to delete a project
export const deleteProject = createAsyncThunk(
  "projects/deleteProject",
  async (id) => {
    await axios.delete(`${API_URL}/${id}`);
    return id;
  }
);

const projectSlice = createSlice({
  name: "projects",
  initialState: {
    projects: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Fetch Projects
      .addCase(fetchProjects.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchProjects.fulfilled, (state, action) => {
        state.isLoading = false;
        state.projects = action.payload;
      })
      .addCase(fetchProjects.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      // Create Project
      .addCase(createProject.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createProject.fulfilled, (state, action) => {
        state.isLoading = false;
        state.projects.push(action.payload);
      })
      .addCase(createProject.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      // Update Project
      .addCase(updateProject.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateProject.fulfilled, (state, action) => {
        state.isLoading = false;
        const index = state.projects.findIndex(
          (project) => project._id === action.payload._id
        );
        if (index !== -1) {
          state.projects[index] = action.payload;
        }
      })
      .addCase(updateProject.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      // Delete Project
      .addCase(deleteProject.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteProject.fulfilled, (state, action) => {
        state.isLoading = false;
        state.projects = state.projects.filter(
          (project) => project._id !== action.payload
        );
      })
      .addCase(deleteProject.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default projectSlice.reducer;
