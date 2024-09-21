import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import Home from "./pages/Home";
import Skill from "./pages/Skillset";
import Project from "./pages/Projects";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Preloader from "./components/PreLoader";
import ScrollToTop from "./components/ScrollToTop";

import "./App.css";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Admin from "./pages/Admin";
import ProtectedRoute from "./components/protectedRoute";
import AddProject from "./pages/Admin/AddProject";
import Projects from "./pages/Admin/Projects";
import UpdateProject from "./pages/Admin/UpdateProject";

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skillset" element={<Skill />} />
          <Route path="/project" element={<Project />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/panel/*"
            element={
              <ProtectedRoute>
                <Admin />
              </ProtectedRoute>
            }
          >
            <Route path="project" element={<Projects />} />
            <Route path="add-project" element={<AddProject />} />
            <Route path="update-project" element={<UpdateProject />} />
          </Route>

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
