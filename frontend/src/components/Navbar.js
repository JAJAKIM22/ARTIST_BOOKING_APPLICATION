import React from "react";
import { Link } from "react-router-dom";

 export default function Navbar(){
    return(
        <nav class="navbar navbar-dark bg-primary">
         <Link className="nav-link" to="/artists">ARTISTS</Link>
         <Link className="nav-link" to="/venues">VENUES</Link>
         <Link className="nav-link" to="/shows">SHOWS</Link>
         <Link className="nav-link" to="/forms">POSTPAGE</Link>
       </nav>
              

    )

 }