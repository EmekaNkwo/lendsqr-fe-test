import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./form.css";

export default function Form() {
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");

  const [errorMesg, setErrorMesg] = useState("");
  const [passwordShown, setPasswordShown] = useState(false);

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  const navigate = useNavigate();
  const handleLogin = (e: any) => {
    e.preventDefault();
    if (email === "" || pwd === "") {
      setErrorMesg("Please fill in all fields");
    }
    if (email === "admin@example.com" && pwd === "admin") {
      navigate("/dashboard");
    }
    return setErrorMesg("Invalid username or password");
  };

  useEffect(() => {
    setErrorMesg("");
  }, [email, pwd]);
  return (
    <>
      <strong
        data-testid="error"
        aria-live="assertive"
        className={errorMesg ? "warning" : "offscreen"}
      >
        {errorMesg}
      </strong>
      <div className="form">
        <h1>Welcome!</h1>
        <span>Enter details to login</span>
        <form action="" className="form_container" onSubmit={handleLogin}>
          <div className="email">
            <input
              type="text"
              value={email}
              autoComplete="off"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="input_field"
              required
            />
          </div>
          <div className="pass">
            <input
              type={passwordShown ? "text" : "password"}
              onChange={(e) => setPwd(e.target.value)}
              id="password"
              placeholder="Password"
              className="input_field"
              value={pwd}
              required
            />
            <span onClick={togglePassword} className="pass_span">
              show
            </span>
          </div>

          <span>FORGOT PASSWORD?</span>
          <button type="submit" className="login_button">
            LOG IN
          </button>
        </form>

        <div className="instructions">
          <p>Please use the following credentials to login</p>
          <p>
            Email: <b>admin@example.com</b>
          </p>
          <p>
            password: <b>admin</b>
          </p>
        </div>
      </div>
    </>
  );
}
