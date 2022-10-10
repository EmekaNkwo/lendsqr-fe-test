import React from "react";
import { Sidebar, Topbar } from "../../components";
import { Outlet } from "react-router-dom";
import "./dashboard.css";

export default function Dashboard() {
  return (
    <div>
      <div className="top_bar">
        <Topbar />
      </div>
      <div className="dashboard_container">
        <div className="dash_left">
          <Sidebar />
        </div>
        <div className="dash_right">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
