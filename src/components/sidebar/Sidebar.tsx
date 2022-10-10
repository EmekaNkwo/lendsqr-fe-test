import React, { useState } from "react";
import {
  TopItem,
  CustomerItems,
  BusinessItems,
  SettingItems,
} from "./SidebarItems";
import { BsArrowBarRight, BsArrowBarLeft } from "react-icons/bs";
import "./sidebar.css";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  interface SideItemProps {
    header: string;
    name: string;
    icon: any;
    link: string;
  }

  return (
    <>
      <div className="sidebar" style={{ width: isOpen ? "300px" : "65px" }}>
        <div className="top_section">
          <div
            style={{ marginLeft: isOpen ? "90%" : "0px" }}
            className="hamburger"
            onClick={toggle}
          >
            {isOpen ? <BsArrowBarLeft /> : <BsArrowBarRight />}
          </div>
        </div>

        <div className="links-items">
          <div className="links">
            {TopItem.map((item: SideItemProps, index: number) => {
              return (
                <div className="link-item" key={index}>
                  <span
                    className="name"
                    // style={{ display: isOpen ? "block" : "none" }}
                  >
                    {item.icon}
                  </span>
                  <span
                    className="name"
                    style={{ display: isOpen ? "block" : "none" }}
                  >
                    {item.name}
                  </span>
                </div>
              );
            })}
          </div>

          <div className="links">
            {CustomerItems.map((item: SideItemProps, index: number) => {
              return (
                <div className="link-item" key={index}>
                  <h5 style={{ display: isOpen ? "block" : "none" }}>
                    {item.header}
                  </h5>
                  <span
                    className="icon"
                    // style={{ display: isOpen ? "block" : "none" }}
                  >
                    {item.icon}
                  </span>
                  <span
                    className="name"
                    style={{ display: isOpen ? "block" : "none" }}
                  >
                    {item.name}
                  </span>
                </div>
              );
            })}
          </div>
          <div className="links">
            {BusinessItems.map((item: SideItemProps, index: number) => {
              return (
                <div className="link-item" key={index}>
                  <h5 style={{ display: isOpen ? "block" : "none" }}>
                    {item.header}
                  </h5>
                  <span
                    className="icon"
                    // style={{ display: isOpen ? "block" : "none" }}
                  >
                    {item.icon}
                  </span>
                  <span
                    className="name"
                    style={{ display: isOpen ? "block" : "none" }}
                  >
                    {item.name}
                  </span>
                </div>
              );
            })}
          </div>
          <div className="links">
            {SettingItems.map((item: SideItemProps, index: number) => {
              return (
                <div className="link-item" key={index}>
                  <h5 style={{ display: isOpen ? "block" : "none" }}>
                    {item.header}
                  </h5>
                  <span
                    className="icon"
                    // style={{ display: isOpen ? "block" : "none" }}
                  >
                    {item.icon}
                  </span>
                  <span
                    className="name"
                    style={{ display: isOpen ? "block" : "none" }}
                  >
                    {item.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
