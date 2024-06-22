import React, { useEffect, useState } from "react";
import "./sidebar.scss"
import { businesslinks, customerslinks, settingslinks } from "../../data";
import { DashboardImg, DownDropdownImg, OrganizationImg } from "../../assets/Images";
import { useParams } from "react-router-dom";

interface IProps {
    isActive: string
    handleClick: () => void
    disabled?: boolean
    name: string
    icon: string
}
export const NavLink = React.memo(
    ({ name, icon, isActive, disabled, handleClick }: IProps) => (
        <div
            className={`navlink`}
            onClick={handleClick}
            style={{
                cursor: disabled ? "not-allowed" : "pointer",

            }}
        >
            <div className="navlink_container"
                style={{
                    backgroundColor: isActive === name ? `rgba(57, 205, 204, 0.06)` : "transparent",
                    borderLeft: isActive === name ? "4px solid #39CDCC" : "none",
                }}
            >
                <img src={icon} alt={name} />
                <span >{name}</span>
            </div>

        </div>
    )
);
const Sidebar = () => {
    const { id } = useParams();
    const [isActive, setIsActive] = useState("");

    useEffect(() => {
        const path = window.location.pathname;

        const link = [...customerslinks, ...businesslinks, ...settingslinks]?.find((link) => link?.link === path);

        if (path === `/users/${id}`) {
            setIsActive("Users")
        }

        if (link) {
            setIsActive(link.name);
        }
    }, [isActive, id]);

    return (
        <div className="sidebar_container">
            <div className="orgaisation_switch">
                <img src={OrganizationImg} alt="" />   <span>Switch Organisation</span>
                <img src={DownDropdownImg} alt="" />
            </div>
            <div className="link_header">
                <img src={DashboardImg} alt="" /> <span>Dashboard</span>
            </div>
            <div className="sidelinks_container">
                <div className="sidelinks_section">
                    <span className="sidelinks_title">CUSTOMERS</span>
                    <div className="sidebar_links">
                        {
                            customerslinks?.map((link) => (
                                <NavLink
                                    key={link.name}
                                    name={link.name}
                                    icon={link.icon}
                                    isActive={isActive}
                                    disabled={link.disabled}
                                    handleClick={() => setIsActive(link.name)}
                                />
                            ))
                        }
                    </div>
                </div>
                <div className="sidelinks_section">
                    <span className="sidelinks_title">BUSINESSES</span>
                    <div className="sidebar_links">
                        {
                            businesslinks?.map((link) => (
                                <NavLink
                                    key={link.name}
                                    name={link.name}
                                    icon={link.icon}
                                    isActive={isActive}
                                    disabled={link.disabled}
                                    handleClick={() => setIsActive(link.name)}
                                />
                            ))
                        }
                    </div>
                </div>
                <div className="sidelinks_section">
                    <span className="sidelinks_title">SETTINGS</span>
                    <div className="sidebar_links">
                        {
                            settingslinks?.map((link) => (
                                <NavLink
                                    key={link.name}
                                    name={link.name}
                                    icon={link.icon}
                                    isActive={isActive}
                                    disabled={link.disabled}
                                    handleClick={() => setIsActive(link.name)}
                                />
                            ))
                        }
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Sidebar