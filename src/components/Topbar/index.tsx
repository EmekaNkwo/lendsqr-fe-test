import IconDropDown from "../../assets/Icons/IconDropDown"
import IconLogo from "../../assets/Icons/IconLogo"

import IconSearchIcon from "../../assets/Icons/IconSearchIcon"
import { Avatar, NotificationImage } from "../../assets/Images"
import { TextField } from "../../shared/UIs/InputField"
import "./topbar.scss"
const Topbar = () => {
    return (
        <div className="topbar">
            <div className="topbar_left">
                <IconLogo />
                <div className="searchInput">
                    <TextField type="text" className="searchField" />
                    <div className="searchIcon">
                        <IconSearchIcon />
                    </div>
                </div>
            </div>
            <div className="topbar_right">
                <span className="docs">Docs</span>
                <img src={NotificationImage} alt="notification" className="notification" />
                <div className="avatar">
                    <img src={Avatar} alt="avatar" />
                    <span>Adedeji</span>
                    <IconDropDown />
                </div>
            </div>
        </div>
    )
}

export default Topbar