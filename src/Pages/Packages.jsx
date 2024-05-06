import React, { useState } from "react";
import "../css/style.css";
import "../css/bootstrap.min.css";

const PackageItem = ({ packageInfo }) => {
  return (
    <div className="packages-item">
      <div className="packages-img">
        <img
          src={packageInfo.imageUrl}
          className="img-fluid w-100 rounded-top"
          alt="Image"
        />
        <div
          className="packages-info d-flex border border-start-0 border-end-0 position-absolute"
          style={{ width: "100%", bottom: 0, left: 0, zIndex: 5 }}
        >
          <small className="flex-fill text-center border-end py-2">
            <i className="fa fa-map-marker-alt me-2"></i>
            {packageInfo.location}
          </small>
          <small className="flex-fill text-center border-end py-2">
            <i className="fa fa-calendar-alt me-2"></i>
            {packageInfo.duration}
          </small>
          <small className="flex-fill text-center py-2">
            <i className="fa fa-user me-2"></i>
            {packageInfo.capacity} Person
          </small>
        </div>
        <div className="packages-price py-2 px-4">{packageInfo.price}</div>
      </div>
      <div className="packages-content bg-light">
        <div className="p-4 pb-0">
          <h5 className="mb-0">{packageInfo.title}</h5>
          <small className="text-uppercase">{packageInfo.dealType}</small>
          <div className="mb-3">
            {[...Array(packageInfo.rating)].map((_, index) => (
              <small key={index} className="fa fa-star text-primary"></small>
            ))}
          </div>
          <p className="mb-4">{packageInfo.description}</p>
        </div>
        <div className="row bg-primary rounded-bottom mx-0">
          <div className="col-6 text-start px-0">
            <a href="#" className="btn-hover btn text-white py-2 px-4">
              Read More
            </a>
          </div>
          <div className="col-6 text-end px-0">
            <a href="#" className="btn-hover btn text-white py-2 px-4">
              Book Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const Carousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="carousel">
      <button className="carousel-button prev" onClick={prevSlide}>
        Prev
      </button>
      {items.map((item, index) => (
        <div
          className={index === currentIndex ? "slide active" : "slide"}
          key={index}
        >
          {index === currentIndex && <PackageItem packageInfo={item} />}
        </div>
      ))}
      <button className="carousel-button next" onClick={nextSlide}>
        Next
      </button>
    </div>
  );
};

const Packages = () => {
  const packages = [
    {
      imageUrl:
        "https://images.unsplash.com/photo-1605554861390-2d3d016664da?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aXRhbGx5fGVufDB8fDB8fHww",
      location: "Venice - Italy",
      duration: "3 days",
      capacity: 2,
      price: "$349.00",
      title: "Venice - Italy",
      dealType: "Hotel Deals",
      rating: 5,
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt nemo quia quae illum aperiam fugiat voluptatem repellat",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1669482218834-fca7e425411b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGl0YWxseXxlbnwwfHwwfHx8MA%3D%3D",
      location: "Venice - Italy",
      duration: "3 days",
      capacity: 2,
      price: "$449.00",
      title: "The New California",
      dealType: "Hotel Deals",
      rating: 5,
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt nemo quia quae illum aperiam fugiat voluptatem repellat",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1647729338821-78985beab628?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGl0YWxseXxlbnwwfHwwfHx8MA%3D%3D",
      location: "Venice - Italy",
      duration: "3 days",
      capacity: 2,
      price: "$549.00",
      title: "Discover Japan",
      dealType: "Hotel Deals",
      rating: 5,
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt nemo quia quae illum aperiam fugiat voluptatem repellat",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1588778943428-cec10a6f1666?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aXRhbGx5fGVufDB8fDB8fHww",
      location: "Thayland",
      duration: "3 days",
      capacity: 2,
      price: "$649.00",
      title: "Thayland Trip",
      dealType: "Hotel Deals",
      rating: 5,
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt nemo quia quae illum aperiam fugiat voluptatem repellat",
    },
  ];

  return (
    <div className="container-fluid packages py-5">
      <div className="container py-5">
        <div className="mx-auto text-center mb-5" style={{ maxWidth: "900px" }}>
          <h5 className="section-title px-3">Packages</h5>
          <h1 className="mb-0">Awesome Packages</h1>
        </div>
        <Carousel items={packages} />
      </div>
    </div>
  );
};

export default Packages;
