import React, { useState, useEffect } from "react";
import "../css/style.css";
import "../css/bootstrap.min.css";

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className="container-fluid position-sticky top-0 p-0"
      style={{ zIndex: 1000 }}
    >
      <nav
        className={`navbar navbar-expand-lg navbar-light bg-light px-4 px-lg-5 py-3 py-lg-0 ${
          scrolling ? "navbar-dark" : ""
        }`}
        style={{ height: scrolling ? "60%" : "auto", zIndex: 1000 }}
      >
        <a href="/" className="navbar-brand p-0">
          <h1 className={`m-0 ${scrolling ? "text-dark" : "text-white"}`}>
            <i className="fa fa-map-marker-alt me-3"></i>Travela
          </h1>
        </a>
        <button
          className={`navbar-toggler ${scrolling ? "text-dark" : "text-white"}`}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="fa fa-bars"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto py-0">
            <a href="/" className="nav-item nav-link active">
              Home
            </a>
            <a href="/about" className="nav-item nav-link">
              About
            </a>
            <a href="./services" className="nav-item nav-link">
              Services
            </a>
            <a href="./packages" className="nav-item nav-link">
              Packages
            </a>
            <a href="../Pages/Blog.jsx" className="nav-item nav-link">
              Blog
            </a>
            <div className="nav-item dropdown">
              <a
                href="#"
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                Pages
              </a>
              <div className="dropdown-menu m-0">
                <a href="../Pages/Single.jsx" className="dropdown-item">
                  Destination
                </a>
                <a href="/exploretour" className="dropdown-item">
                  Explore Tour
                </a>
                <a href="/contact" className="dropdown-item">
                  Travel Booking
                </a>
                <a href="/gallery" className="dropdown-item">
                  Our Gallery
                </a>
                <a href="/guides" className="dropdown-item">
                  Travel Guides
                </a>

                <a href="404.html" className="dropdown-item">
                  404 Page
                </a>
              </div>
            </div>
            <a href="/contact" className="nav-item nav-link">
              Contact
            </a>
          </div>
          <a href="" className="btn btn-primary rounded-pill py-2 px-4 ms-lg-4">
            Book Now
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
