import { Logo, Login_Img } from "../../assets";
import { Form } from "../../components";
import "./login.scss";

export default function Login() {
  return (
    <>
      <div className="login_container">
        <div className="login_logo">
          <img src={Logo} alt="logo" />
        </div>
        <div className="form_content">
          <div className="form_left">
            <img src={Login_Img} alt="login_img" />
          </div>
          <div className="form_right">
            <Form />
          </div>
        </div>
      </div>
    </>
  );
}
