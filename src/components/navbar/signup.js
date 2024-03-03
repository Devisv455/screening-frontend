import React from "react";
import "./signup.css";
import { useNavigate } from "react-router-dom";

export const Signup = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="signup-form">
        <div className="title">
          <h1>Signup</h1>
        </div>

        <form className="form">
          <input
            className="input"
            type="text"
            placeholder="username"
          />

          <input
            className="password"
            type="password"
            placeholder="enter password"
          />

          <button
            className="sbutton"
            onClick={() => navigate("/login")}
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>

      <div className="pic-container">
        <img src="./hospital-login.png" alt="Hospital Login" />
      </div>
    </div>
  );
};

