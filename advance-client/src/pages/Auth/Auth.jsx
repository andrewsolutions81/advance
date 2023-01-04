import React from "react";
import Logo from "../../img/logo.png";
import "./Auth.css";

const Auth = () => {
  return (
    <div className="Auth">
      <div className="a-left">
        <img src={Logo} alt="Advance logo" />
        <div className="Webname">
          <h1>Advance</h1>
          <h6>Advance your projects</h6>
        </div>
      </div>
      <Login />
    </div>
  );
  function Login() {
    return (
      <div className="a-right">
        <form action="" className="infoForm authForm">
          <h3>Log in</h3>
          <div className="signup-section">
            <input
              className="infoInput"
              name="username"
              type="text"
              placeholder="User Name"
            />
          </div>
          <div className="signup-section">
            <input
              className="infoInput"
              name="password"
              type="password"
              placeholder="Password"
            />
          </div>
          <div>
            <span className="login-text">No Acount ? Sign up!</span>
          </div>
          <button className="button infoButton" type="submit">Login</button>
        </form>
      </div>
    );
  }
  function SignUp() {
    return (
      <div className="a-right">
        <form action="" className="infoForm authForm">
          <h3>SignUp</h3>
          <div className="signup-main">
            <input
              className="infoInput"
              name="firstname"
              type="text"
              placeholder="First Name"
            />
            <input
              className="infoInput"
              name="lastname"
              type="text"
              placeholder="Last Name"
            />
          </div>
          <div className="signup-section">
            <input
              className="infoInput"
              name="username"
              type="text"
              placeholder="User Name"
            />
          </div>
          <div className="signup-section">
            <input
              className="infoInput"
              name="password"
              type="password"
              placeholder="Password"
            />
            <input
              className="infoInput"
              name="confirmpassword"
              type="password"
              placeholder="Confirm Password"
            />
          </div>
          <div>
            <span className="login-text">Already have an account ? Login!</span>
          </div>
          <button className="button infoButton" type="submit">Sign Up</button>
        </form>
      </div>
    );
  }
};

export default Auth;
