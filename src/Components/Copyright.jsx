import React, { useState, useEffect } from "react";

const Copyright = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="container-fluid copyright text-body py-4">
      <div className="container">
        <div className="row g-4 align-items-center">
          <div className="col-md-6 text-center text-md-end mb-md-0">
            <i className="fas fa-copyright me-2"></i>
            <a className="text-white" href="#">
              Your Site Name
            </a>
            , All right reserved.
          </div>
          <div className="col-md-6 text-center text-md-start">
            Designed By{" "}
            <a className="text-white" href="https://htmlcodex.com">
              HTML Codex
            </a>{" "}
            Distributed By <a href="https://themewagon.com">ThemeWagon</a>
          </div>
        </div>
        {/* Button */}
        {isVisible && (
          <button
            onClick={scrollToTop}
            className="btn btn-primary btn-primary-outline-0 btn-md-square back-to-top"
          >
            <i className="fa fa-arrow-up"></i>
          </button>
        )}
      </div>
    </div>
  );
};

export default Copyright;
