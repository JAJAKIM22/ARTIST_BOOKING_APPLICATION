import React from "react";
import { Link } from "react-router-dom";

 export default function Navbar(){
    return(
      <nav class="navbar bg-light">
      <form class="container-fluid justify-content-start">
        <button class="btn btn-outline-success me-5" type="button"><Link className="nav-link" to="/artists">ARTISTS</Link></button>
        <button class="btn btn-outline-success me-5" type="button"><Link className="nav-link" to="/venues">VENUES</Link></button>
        <button class="btn btn-outline-success me-5" type="button"><Link className="nav-link" to="/shows">SHOWS</Link></button>
        <button class="btn btn-outline-success me-5" type="button"> <Link className="nav-link" to="/forms">POSTPAGE</Link></button>
      </form>
    </nav>         

    )

 }