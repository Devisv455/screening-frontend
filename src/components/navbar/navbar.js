import React from "react";
import { Link } from "react-router-dom"

import "./navbar.css"

export const Navbar = () =>{

 return (
   <div className="NavbarContainer">
    <div className = "Links">
       <Link to = "/signup">Signup</Link>
       <Link to = "/login">Login</Link>
        <Link to = "/appointment">Appointment-List </Link>
    </div>
    </div>
 )
    
};

