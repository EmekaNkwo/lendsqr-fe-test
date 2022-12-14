import { useState } from "react";
import {
  TopItem,
  CustomerItems,
  BusinessItems,
  SettingItems,
} from "./SidebarItems";
import { BsArrowBarRight, BsArrowBarLeft } from "react-icons/bs";
import "./sidebar.scss";
import { briefcase, side_drop } from "../../assets";
import { NavLink } from "react-router-dom";
import { ISideItem } from "../../models";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <div
        className="sidebar"
        style={{ width: isOpen ? "300px" : "65px", transition: " all 0.3s" }}
      >
        <div className="top_section">
          <div
            className="top_section_header"
            style={{ display: isOpen ? "flex" : "none" }}
          >
            <div className="header_logo">
              <img src={briefcase} alt="" />
            </div>
            <span>
              Switch Organization <img src={side_drop} alt="" />
            </span>
          </div>
          <div
            style={{ marginLeft: isOpen ? "" : "0px" }}
            className="hamburger"
            onClick={toggle}
          >
            {isOpen ? <BsArrowBarLeft /> : <BsArrowBarRight />}
          </div>
        </div>

        <div className="links-items">
          <div className="links">
            {TopItem.map((item: ISideItem, index: number) => {
              return (
                <div className="link-item" key={index}>
                  <NavLink to={item.link} className="link-items">
                    <img src={item.icon} alt={item.name} />
                    <span
                      className="name"
                      style={{ display: isOpen ? "block" : "none" }}
                    >
                      {item.name}
                    </span>
                  </NavLink>
                </div>
              );
            })}
          </div>

          <div className="links">
            {CustomerItems.map((item: ISideItem, index: number) => {
              return (
                <div className="link-item" key={index}>
                  <h5 style={{ display: isOpen ? "block" : "none" }}>
                    {item.header}
                  </h5>
                  <NavLink to={item.link} className="link-items ">
                    <img src={item.icon} alt={item.name} />
                    <span
                      className="name"
                      style={{ display: isOpen ? "block" : "none" }}
                    >
                      {item.name}
                    </span>
                  </NavLink>
                </div>
              );
            })}
          </div>
          <div className="links">
            {BusinessItems.map((item: ISideItem, index: number) => {
              return (
                <div className="link-item" key={index}>
                  <h5 style={{ display: isOpen ? "block" : "none" }}>
                    {item.header}
                  </h5>
                  <NavLink to={item.link} className="link-items ">
                    <img src={item.icon} alt={item.name} />
                    <span
                      className="name"
                      style={{ display: isOpen ? "block" : "none" }}
                    >
                      {item.name}
                    </span>
                  </NavLink>
                </div>
              );
            })}
          </div>
          <div className="links active">
            {SettingItems.map((item: ISideItem, index: number) => {
              return (
                <div className="link-item" key={index}>
                  <h5 style={{ display: isOpen ? "block" : "none" }}>
                    {item.header}
                  </h5>
                  <NavLink to={item.link} className="link-items ">
                    <img src={item.icon} alt={item.name} />
                    <span
                      className="name"
                      style={{ display: isOpen ? "block" : "none" }}
                    >
                      {item.name}
                    </span>
                  </NavLink>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
