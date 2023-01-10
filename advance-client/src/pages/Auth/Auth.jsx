import React, { useState } from "react";
import {useDispatch, useSelector} from 'react-redux'
import Logo from "../../img/logo.png";
import { signUp , logIn } from "../../redux/actions/AuthActions";
import "./Auth.css";

const Auth = () => {
  const initialState = {
    firstname: "",
    lastname: "",
    username: "",
    password: "",
    confirmpass: "",
  };
  const dispatch = useDispatch()
  const loading = useSelector((state) => state.authReducer.loading)
  const [isSignUp, setIsSignUp] = useState(true);
  const [data, setData] = useState(initialState);
  const [confirmPass, setConfirmPass] = useState(true);

  const handleLoginSignup = () => {
    setIsSignUp((previous) => !previous);
    resetForm();
  };

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

/*   const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignUp) {
      if (data.password !== data.confirmpass) {
        setConfirmPass(false);
      }
    }
  }; */
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignUp) {
      data.password === data.confirmpass
      ? dispatch(signUp(data))
      :setConfirmPass(false)
    }else {
      dispatch(logIn(data))
    }
  };
  const resetForm = () => {
    setConfirmPass(true);
    setData(initialState);
  };

  return (
    <div className="Auth">

      <div className="a-left">
        <img src={Logo} alt="Advance logo" />
        <div className="Webname">
          <h1>Advance</h1>
          <h6>Advance your projects</h6>
        </div>
      </div>

      <div className="a-right">
        <form action="" className="infoForm authForm" onSubmit={handleSubmit}>
          <h3>{isSignUp ? "SignUp" : "Log in"}</h3>
          {isSignUp && (
            <div className="signup-main">
              <input
                className="infoInput"
                name="firstname"
                type="text"
                placeholder="First Name"
                onChange={handleChange}
              />
              <input
                className="infoInput"
                name="lastname"
                type="text"
                placeholder="Last Name"
                onChange={handleChange}
              />
            </div>
          )}

          <div className="signup-section">
            <input
              className="infoInput"
              name="username"
              type="text"
              placeholder="User Name"
              onChange={handleChange}
              value={data.username}
            />
          </div>
          <div className="signup-section">
            <input
              className="infoInput"
              name="password"
              type="password"
              placeholder="Password"
              onChange={handleChange}
              value={data.password}
            />
            {isSignUp && (
              <input
                required
                type="password"
                className="infoInput"
                name="confirmpass"
                placeholder="Confirm Password"
                onChange={handleChange}
                value={data.confirmpass}
              />
            )}
          </div>
          <span
            style={{
              color: "red",
              fontSize: "12px",
              alignSelf: "flex-end",
              marginRight: "5px",
              display: confirmPass ? "none" : "block",
            }}
          >
            *Password dosn't match.
          </span>
          <div>
            <span className="login-text" onClick={handleLoginSignup}>
              {isSignUp
                ? "Already have an account ? Login!"
                : "No Acount ? Sign up!"}
            </span>
          </div>
          <button className="button infoButton" type="submit" disabled={loading}>
            {loading? "Loading..." : isSignUp ? "Sign Up" : "login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Auth;
