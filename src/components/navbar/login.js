
import React from "react"
import "./login.css"
import { useNavigate } from "react-router-dom";
export const Login = () => {
  const navigate = useNavigate();
  
  return (
      <div className="container">
        
          <div className="login-form">
          <div className="headings">
             <h2>Login Page</h2>
        </div>
              <form className="forms">
                  <input className="input" type="text" placeholder="Enter name" />
                  <input className="password" type="password" placeholder="Enter password" />
                  <button className="submit-button" onClick={() => navigate("/")} type="submit">Submit</button>
              </form>
          </div>
          <div className="image-container">
              <img src="./hospital-login.png" alt="Hospital Login" />
          </div>
      </div>
  );
  


};
