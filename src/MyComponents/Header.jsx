import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../assets/bird3.png"
import "../MyComponents/Header.css";; 

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm fixed-top">
      <div className="container">
        {/* Logo and Brand */}
        <a className="navbar-brand d-flex align-items-center" href="#home">
          <img src={logo} alt="Logo" width="40" height="40" className="me-2" />
          <strong>UDAAN</strong>
        </a>

        {/* Navbar Links */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto"> 
            <li className="nav-item">
              <a className="nav-link active me-3" href="#home">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link me-3" href="#opportunities">Opportunities</a>
            </li>
            <li className="nav-item">
              <a className="nav-link me-3" href="#calendar">Calendar</a>
            </li>
            <li className="nav-item">
              <a className="nav-link me-3" href="#about">About Us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link me" href="#contact">Contact Us</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
