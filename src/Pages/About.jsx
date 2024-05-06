import React from "react";
import "../css/style.css";
import "../css/bootstrap.min.css";

const About = () => {
  return (
    <div className="container-fluid about py-5">
      <div className="container py-5">
        <div className="row g-5 align-items-center">
          <div className="col-lg-5">
            <div
              className="h-100"
              style={{
                border: "50px solid",
                borderColor: "transparent #13357B transparent #13357B",
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1544717305-2782549b5136?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGhhcHB5JTIwd29tZW4lMjBzdGFuZGluZ3xlbnwwfHwwfHx8MA%3D%3D"
                className="img-fluid w-100 h-100"
                alt=""
              />
            </div>
          </div>
          <div
            className="col-lg-7"
            style={{
              background:
                "linear-gradient(rgba(255, 255, 255, .8), rgba(255, 255, 255, .8)), url(https://images.unsplash.com/photo-1544717305-2782549b5136?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGhhcHB5JTIwd29tZW4lMjBzdGFuZGluZ3xlbnwwfHwwfHx8MA%3D%3D)",
            }}
          >
            <h5 className="section-about-title pe-3">About Us</h5>
            <h1 className="mb-4">
              Welcome to <span className="text-primary">Travela</span>
            </h1>
            <p className="mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Molestias, dolorum, doloribus sunt dicta, officia voluptatibus
              libero necessitatibus natus impedit quam ullam assumenda? Id atque
              iste consectetur. Commodi odit ab saepe!
            </p>
            <p className="mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium quos voluptatem suscipit neque enim, doloribus ipsum
              rem eos distinctio, dignissimos nisi saepe nulla? Libero numquam
              perferendis provident placeat molestiae quia?
            </p>
            <div className="row gy-2 gx-4 mb-4">
              <div className="col-sm-6">
                <p className="mb-0">
                  <i className="fa fa-arrow-right text-primary me-2"></i>First
                  Class Flights
                </p>
              </div>
              <div className="col-sm-6">
                <p className="mb-0">
                  <i className="fa fa-arrow-right text-primary me-2"></i>
                  Handpicked Hotels
                </p>
              </div>
              <div className="col-sm-6">
                <p className="mb-0">
                  <i className="fa fa-arrow-right text-primary me-2"></i>5 Star
                  Accommodations
                </p>
              </div>
              <div className="col-sm-6">
                <p className="mb-0">
                  <i className="fa fa-arrow-right text-primary me-2"></i>Latest
                  Model Vehicles
                </p>
              </div>
              <div className="col-sm-6">
                <p className="mb-0">
                  <i className="fa fa-arrow-right text-primary me-2"></i>150
                  Premium City Tours
                </p>
              </div>
              <div className="col-sm-6">
                <p className="mb-0">
                  <i className="fa fa-arrow-right text-primary me-2"></i>24/7
                  Service
                </p>
              </div>
            </div>
            <a className="btn btn-primary rounded-pill py-3 px-5 mt-2" href="">
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
