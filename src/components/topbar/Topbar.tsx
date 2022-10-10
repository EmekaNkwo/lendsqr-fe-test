import React from "react";
import {
  Avatar,
  Dropdown,
  Logo,
  Notification,
  Search_icon,
} from "../../assets";
import "./topbar.css";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="top_logo">
        <img src={Logo} alt="topbar_logo" />
      </div>
      <div className="search_bar">
        <input type="text" name="" id="" placeholder="Search for anything" />
        <div className="search_icon">
          <img src={Search_icon} alt="search_icon" />
        </div>
      </div>
      <div className="top_end">
        <a href="#!">Docs</a>
        <img src={Notification} alt="" />

        <div className="top_avatar">
          <img src={Avatar} alt="" />
          <span>Adedeji</span>
          <img src={Dropdown} alt="" />
        </div>
      </div>
    </div>
  );
}
