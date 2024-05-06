import React, { useState } from "react";
import "../css/style.css";
import "../css/bootstrap.min.css";

const Maincarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? 2 : prevIndex - 1));
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex === 2 ? 0 : prevIndex + 1));
  };

  const carouselItems = [
    {
      imageUrl:
        "https://images.unsplash.com/photo-1611918126831-0a8352d6196f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Explore The World",
      subTitle: "Let's The World Together!",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
      buttonText: "Discover Now",
    },
    {
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1712685912266-aa85a267a419?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bmF0dXJlJTIwYmFja2dyb3VuZHxlbnwwfHwwfHx8MA%3D%3D",
      title: "Explore The World",
      subTitle: "Find Your Perfect Tour At Travel",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
      buttonText: "Discover Now",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1610147323479-a7fb11ffd5dd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bmF0dXJlJTIwYmFja2dyb3VuZHxlbnwwfHwwfHx8MA%3D%3D",
      title: "Explore The World",
      subTitle: "You Like To Go?",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
      buttonText: "Discover Now",
    },
  ];

  return (
    <div className="carousel-header">
      <div id="carouselId" className="carousel slide" data-bs-ride="carousel">
        <ol className="carousel-indicators">
          {carouselItems.map((item, index) => (
            <li
              key={index}
              data-bs-target="#carouselId"
              data-bs-slide-to={index}
              className={activeIndex === index ? "active" : ""}
            ></li>
          ))}
        </ol>
        <div className="carousel-inner" role="listbox">
          {carouselItems.map((item, index) => (
            <div
              key={index}
              className={`carousel-item ${
                activeIndex === index ? "active" : ""
              }`}
            >
              <img src={item.imageUrl} className="img-fluid" alt="Image" />
              <div className="carousel-caption">
                <div className="p-3" style={{ maxWidth: "900px" }}>
                  <h4
                    className="text-white text-uppercase fw-bold mb-4"
                    style={{ letterSpacing: "3px" }}
                  >
                    {item.title}
                  </h4>
                  <h1 className="display-2 text-capitalize text-white mb-4">
                    {item.subTitle}
                  </h1>
                  <p className="mb-5 fs-5">{item.text}</p>
                  <div className="d-flex align-items-center justify-content-center">
                    <a
                      className="btn-hover-bg btn btn-primary rounded-pill text-white py-3 px-5"
                      href="#"
                    >
                      {item.buttonText}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselId"
          data-bs-slide="prev"
          onClick={handlePrev}
        >
          <span
            className="carousel-control-prev-icon btn bg-primary"
            aria-hidden="false"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselId"
          data-bs-slide="next"
          onClick={handleNext}
        >
          <span
            className="carousel-control-next-icon btn bg-primary"
            aria-hidden="false"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div
        className="container-fluid search-bar position-relative"
        style={{ top: "-50%", transform: "translateY(-50%)" }}
      >
        <div className="container">
          <div
            className="position-relative rounded-pill w-100 mx-auto p-5"
            style={{ background: "rgba(19, 53, 123, 0.8)" }}
          >
            <input
              className="form-control border-0 rounded-pill w-100 py-3 ps-4 pe-5"
              type="text"
              placeholder="Eg: Thailand"
            />
            <button
              type="button"
              className="btn btn-primary rounded-pill py-2 px-4 position-absolute me-2"
              style={{
                top: "50%",
                right: "46px",
                transform: "translateY(-50%)",
              }}
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Maincarousel;
