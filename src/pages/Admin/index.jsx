import React from "react";
import { Outlet } from "react-router-dom";
import MenuBar from "./Menu";

const Admin = () => {
  return (
    <div className="container-fluid">
      <div style={{ marginTop: "72px" }} className="row flex-nowrap">
        <div
          className="col-2 bg-dark text-white vh-100 p-2"
          style={{ width: "260px" }}
        >
          <div style={{ fontSize: "24px", fontWeight: "700" }} className="pt-4">
            TH Tonmoy Panel
          </div>
          <hr />
          <MenuBar />
        </div>
        <div className="col-10 p-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Admin;
