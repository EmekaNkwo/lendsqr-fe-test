import { Sidebar, Topbar } from "../../components";
import { Outlet } from "react-router-dom";
import "./main.scss";

export default function Main() {
  return (
    <div>
      <div className="top_bar">
        <Topbar />
      </div>
      <div className="dashboard_container">
        <Sidebar />
        <Outlet />
      </div>
    </div>
  );
}
