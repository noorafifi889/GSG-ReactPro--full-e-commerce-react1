import React from "react";
import signup from "../../image/signup.jpg";
import "./login.css";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import {Button} from "../Button"
const Login = () => {
  return (
    <div className="login">
      <img src={signup} alt="Signup" />
      <div className="content-login">
        <h1>Log in to Exclusive</h1>
        <p>Enter Your details below</p>
        <form action="">
          <input type="text" placeholder="Email or Phone Number" />
          <input type="password" placeholder="Password" />
          <div
            className="btn-login
          "
          >
            <Link to="/logged">
              <Button title="Log in " />
            </Link>
            <Link
              to="forget-password"
              style={{ color: "red", fontSize: "15PX", textDecoration: "none" }}
            >
              Forget password
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
  
}

export default Login