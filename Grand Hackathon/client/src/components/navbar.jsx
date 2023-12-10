import React from "react";
import image from "../assets/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand ms-lg-4">
            <img src={image} alt="Logo" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link active me-lg-4 ms-md-4 ms-sm-4 ms-4" aria-current="page">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link active me-lg-4 ms-md-4 ms-sm-4 ms-4">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/doctor" className="nav-link active me-lg-4 ms-md-4 ms-sm-4 ms-4">
                  Doctors
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/pateints" className="nav-link active me-lg-4 ms-md-4 ms-sm-4 ms-4">
                  Patients
                </Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <Link to="/appointment">
                <button
                  className="btn btn-outline-primary me-lg-5 ms-md-4 ms-sm-4 ms-4"
                  type="submit"
                >
                  Get an Appointment
                </button>
              </Link>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
