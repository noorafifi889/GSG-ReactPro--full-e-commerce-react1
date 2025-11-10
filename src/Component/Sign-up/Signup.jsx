import React from "react";
import signup from "../../image/signup.jpg";
import "./signup.css";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

const Signup = () => {
  return (
    <div className="signup">
      <img src={signup} alt="Signup" />
      <div className="content-signup">
        <h1>Create an account</h1>
        <p>Enter Your details below</p>
        <form action="">
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Email or Phone Number" />
          <input type="password" placeholder="Password" />
          <button type="button" className="btn" style={{backgroundColor:"red" ,color:"white"}}>
           <Link to="/login" className="link">  Create Account</Link>
          </button>
          <button type="button" className="google-btn">
            <FcGoogle size={20} /> Sign Up With Google
          </button>
        </form>
        <p className="login-link">
          Already have an account? <Link to="/login">Log in</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
