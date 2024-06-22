import { useState } from "react"
import { LoginLeftImage, Logo } from "../../assets/Images"
import { FilledButton } from "../../shared/UIs/Buttons"
import "./login.scss"
import { TextField } from "../../shared/UIs/InputField"
import { useNavigate } from "react-router-dom"

const Login = () => {
    const navigate = useNavigate()
    const [inputType, setInputType] = useState<"password" | "text">("password")
    const handleShowPassword = () => {
        setInputType(inputType === "password" ? "text" : "password")
    }
    return (
        <div className="loginPage">
            <div className="login_mobile">
                <div className="icon">
                    <img src={Logo} alt="logo" />
                </div>
                <div className=" loginFormMobile">
                    <div className="left_header">
                        <h2>Welcome!</h2>
                        <span>Enter details to login</span>
                    </div>
                    <form className="loginForm">
                        <TextField withBorder type="email" placeholder="Email" />
                        <div className="passwordField">
                            <TextField withBorder type={inputType} placeholder="Password" />

                            <span className="showPassword" onClick={handleShowPassword}>SHOW</span>
                        </div>
                        <span className="forgotPassword">FORGET PASSWORD?</span >
                        <FilledButton title="LOG IN" className="loginButton" onClick={() => navigate("/users")} />
                    </form>
                </div>
            </div>
            <div className="loginContainer">
                <div className="loginLeftSide">
                    <div className="left_icon">
                        <img src={Logo} alt="logo" />
                    </div>
                    <img src={LoginLeftImage} alt="" className="left_image" />
                </div>
                <div className="loginRightSide">
                    <div className="left_header">
                        <h2>Welcome!</h2>
                        <span>Enter details to login</span>
                    </div>
                    <form className="loginForm">
                        <TextField withBorder type="email" placeholder="Email" />
                        <div className="passwordField">
                            <TextField withBorder type={inputType} placeholder="Password" />

                            <span className="showPassword" onClick={handleShowPassword}>SHOW</span>
                        </div>
                        <span className="forgotPassword">FORGET PASSWORD?</span >
                        <FilledButton title="LOG IN" className="loginButton" onClick={() => navigate("/users")} />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login