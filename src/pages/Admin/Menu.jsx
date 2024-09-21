import React from "react";
import { Link, useLocation } from "react-router-dom";

const MenuBar = () => {
  const location = useLocation();
  const menu = [
    { title: "Project", path: "/panel/project" },
    { title: "Add Project", path: "/panel/add-project" },
    { title: "Update Project", path: "/panel/update-project" },
  ];

  return (
    <nav
      className="d-flex flex-column align-items-start p-3 "
      style={{ width: "250px" }}
    >
      {menu.map((item) => (
        <Link
          key={item.title}
          to={item.path}
          className={`mb-3 text-decoration-none w-100 p-2 d-flex justify-content-start align-items-center rounded 
            ${
              location.pathname === item.path
                ? "bg-light text-dark"
                : "bg-black text-light"
            }`}
          style={{
            fontSize: "1rem", // Adjust font size
            fontWeight: "bold", // Adjust font weight
            textAlign: "left", // Align text to the left
          }}
        >
          {item.title}
        </Link>
      ))}
    </nav>
  );
};

export default MenuBar;
