import React from "react";
import "../css/style.css";
import "../css/bootstrap.min.css";

const toursData = {
  nationalTours: [
    {
      id: 1,
      title: "Weekend Tour",
      image:
        "https://images.unsplash.com/photo-1465778893808-9b3d1b443be4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dG91cnxlbnwwfHwwfHx8MA%3D%3D",
      offer: null,
    },
    {
      id: 2,
      title: "Holiday Tour",
      image:
        "https://images.unsplash.com/photo-1528127269322-539801943592?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dG91cnxlbnwwfHwwfHx8MA%3D%3D",
      offer: null,
    },
    {
      id: 3,
      title: "Road Trip",
      image:
        "https://images.unsplash.com/photo-1569949381669-ecf31ae8e613?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dG91cnxlbnwwfHwwfHx8MA%3D%3D",
      offer: "15% Off",
    },
    {
      id: 4,
      title: "Historical Trip",
      image:
        "https://plus.unsplash.com/premium_photo-1661764174171-c29f85bd8a37?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHRvdXJ8ZW58MHx8MHx8fDA%3D",
      offer: null,
    },
    {
      id: 5,
      title: "Family Tour",
      image:
        "https://images.unsplash.com/photo-1569949380643-6e746ecaa3bd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      offer: "50% Off",
    },
    {
      id: 6,
      title: "Beach Tour",
      image:
        "https://images.unsplash.com/photo-1615277716590-d87d101caa70?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHRvdXJ8ZW58MHx8MHx8fDA%3D",
      offer: null,
    },
  ],
  internationalTours: [
    {
      id: 1,
      title: "Australia",
      image:
        "https://images.unsplash.com/photo-1598890777032-bde835ba27c2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRvdXJ8ZW58MHx8MHx8fDA%3D",
      offer: "30% Off",
      cities: 8,
      tourPlaces: 143,
    },
    {
      id: 2,
      title: "Germany",
      image:
        "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2VybWFueXxlbnwwfHwwfHx8MA%3D%3D",
      offer: null,
      cities: 12,
      tourPlaces: 21,
    },
    {
      id: 3,
      title: "Spain",
      image:
        "https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3BhaW58ZW58MHx8MHx8fDA%3D",
      offer: "45% Off",
      cities: 9,
      tourPlaces: 133,
    },
    {
      id: 4,
      title: "Japan",
      image:
        "https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8amFwYW58ZW58MHx8MHx8fDA%3D",
      offer: null,
      cities: 8,
      tourPlaces: 137,
    },
    {
      id: 5,
      title: "London",
      image:
        "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      offer: "70% Off",
      cities: 17,
      tourPlaces: 26,
    },
  ],
};

const ExploreTour = () => {
  return (
    <div className="container-fluid ExploreTour py-5">
      <div className="container py-5">
        <div className="mx-auto text-center mb-5" style={{ maxWidth: "900px" }}>
          <h5 className="section-title px-3">Explore Tour</h5>
          <h1 className="mb-4">The World</h1>
          <p className="mb-0">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
            tempore nam, architecto doloremque velit explicabo? Voluptate sunt
            eveniet fuga eligendi! Expedita laudantium fugiat corrupti eum cum
            repellat a laborum quasi.
          </p>
        </div>
        <div className="tab-class text-center">
          <ul className="nav nav-pills d-inline-flex justify-content-center mb-5">
            <li className="nav-item">
              <a
                className="d-flex mx-3 py-2 border border-primary bg-light rounded-pill active"
                data-bs-toggle="pill"
                href="#NationalTab-1"
              >
                <span className="text-dark" style={{ width: "250px" }}>
                  National Tour Category
                </span>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="d-flex py-2 mx-3 border border-primary bg-light rounded-pill"
                data-bs-toggle="pill"
                href="#InternationalTab-2"
              >
                <span className="text-dark" style={{ width: "250px" }}>
                  International tour Category
                </span>
              </a>
            </li>
          </ul>
          <div className="tab-content">
            <div id="NationalTab-1" className="tab-pane fade show p-0 active">
              <div className="row g-4">
                {toursData.nationalTours.map((tour) => (
                  <div className="col-md-6 col-lg-4" key={tour.id}>
                    <div className="national-item">
                      <img
                        src={tour.image}
                        className="img-fluid w-100 rounded"
                        alt="Image"
                      />
                      <div className="national-content">
                        <div className="national-info">
                          <h5 className="text-white text-uppercase mb-2">
                            {tour.title}
                          </h5>
                          <a href="#" className="btn-hover text-white">
                            View All Place
                            <i className="fa fa-arrow-right ms-2"></i>
                          </a>
                        </div>
                      </div>
                      {tour.offer && (
                        <div className="tour-offer bg-info">{tour.offer}</div>
                      )}
                      <div className="national-plus-icon">
                        <a href="#" className="my-auto">
                          <i className="fas fa-link fa-2x text-white"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div id="InternationalTab-2" className="tab-pane fade show p-0">
              <div className="InternationalTour-carousel owl-carousel">
                {toursData.internationalTours.map((tour) => (
                  <div className="international-item" key={tour.id}>
                    <img
                      src={tour.image}
                      className="img-fluid w-100 rounded"
                      alt="Image"
                    />
                    <div className="international-content">
                      <div className="international-info">
                        <h5 className="text-white text-uppercase mb-2">
                          {tour.title}
                        </h5>
                        <a href="#" className="btn-hover text-white me-4">
                          <i className="fas fa-map-marker-alt me-1"></i>{" "}
                          {tour.cities} Cities
                        </a>
                        <a href="#" className="btn-hover text-white">
                          <i className="fa fa-eye ms-2"></i>{" "}
                          <span>{tour.tourPlaces}+ Tour Places</span>
                        </a>
                      </div>
                    </div>
                    {tour.offer && (
                      <div className="tour-offer bg-success">{tour.offer}</div>
                    )}
                    <div className="international-plus-icon">
                      <a href="#" className="my-auto">
                        <i className="fas fa-link fa-2x text-white"></i>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreTour;
