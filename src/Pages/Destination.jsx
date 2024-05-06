import React, { useState } from "react";
import "../css/style.css";
import "../css/bootstrap.min.css";

const Destination = () => {
  const [activeTab, setActiveTab] = useState("tab-1");

  const tabs = [
    {
      id: "tab-1",
      label: "All",
      content: [
        {
          imgSrc:
            "https://plus.unsplash.com/premium_photo-1673266203705-08ee530cc2b5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bmV3JTIweW9ya3xlbnwwfHwwfHx8MA%3D%3D",
          title: "New York City",
        },
        {
          imgSrc:
            "https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bmV3JTIweW9ya3xlbnwwfHwwfHx8MA%3D%3D",
          title: "Las Vegas",
        },
        {
          imgSrc:
            "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bmV3JTIweW9ya3xlbnwwfHwwfHx8MA%3D%3D",
          title: "Los Angeles",
        },
        {
          imgSrc:
            "https://images.unsplash.com/photo-1492666673288-3c4b4576ad9a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bmV3JTIweW9ya3xlbnwwfHwwfHx8MA%3D%3D",
          title: "Los Angeles",
        },
        {
          imgSrc:
            "https://images.unsplash.com/photo-1499092346589-b9b6be3e94b2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG5ldyUyMHlvcmt8ZW58MHx8MHx8fDA%3D",
          title: "San Francisco",
        },
        {
          imgSrc:
            "https://images.unsplash.com/photo-1518391846015-55a9cc003b25?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          title: "Los Angeles",
        },
      ],
    },
    {
      id: "tab-2",
      label: "USA",
      content: [
        {
          imgSrc:
            "https://images.unsplash.com/photo-1523374228107-6e44bd2b524e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG5ldyUyMHlvcmt8ZW58MHx8MHx8fDA%3D",
          title: "San Francisco",
        },
        {
          imgSrc:
            "https://images.unsplash.com/photo-1555109307-f7d9da25c244?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fG5ldyUyMHlvcmt8ZW58MHx8MHx8fDA%3D",
          title: "San Francisco",
        },
      ],
    },
    {
      id: "tab-3",
      label: "Canada",
      content: [
        {
          imgSrc:
            "https://images.unsplash.com/photo-1523374228107-6e44bd2b524e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG5ldyUyMHlvcmt8ZW58MHx8MHx8fDA%3D",
          title: "San Francisco",
        },
        {
          imgSrc:
            "https://images.unsplash.com/photo-1555109307-f7d9da25c244?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fG5ldyUyMHlvcmt8ZW58MHx8MHx8fDA%3D",
          title: "San Francisco",
        },
      ],
    },
    {
      id: "tab-4",
      label: "Europe",
      content: [
        {
          imgSrc:
            "https://images.unsplash.com/photo-1523374228107-6e44bd2b524e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG5ldyUyMHlvcmt8ZW58MHx8MHx8fDA%3D",
          title: "San Francisco",
        },
        {
          imgSrc:
            "https://images.unsplash.com/photo-1555109307-f7d9da25c244?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fG5ldyUyMHlvcmt8ZW58MHx8MHx8fDA%3D",
          title: "San Francisco",
        },
      ],
    },
    {
      id: "tab-5",
      label: "China",
      content: [
        {
          imgSrc:
            "https://images.unsplash.com/photo-1523374228107-6e44bd2b524e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG5ldyUyMHlvcmt8ZW58MHx8MHx8fDA%3D",
          title: "San Francisco",
        },
        {
          imgSrc:
            "https://images.unsplash.com/photo-1555109307-f7d9da25c244?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fG5ldyUyMHlvcmt8ZW58MHx8MHx8fDA%3D",
          title: "San Francisco",
        },
      ],
    },
    {
      id: "tab-6",
      label: "Singapore",
      content: [
        {
          imgSrc:
            "https://images.unsplash.com/photo-1523374228107-6e44bd2b524e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG5ldyUyMHlvcmt8ZW58MHx8MHx8fDA%3D",
          title: "San Francisco",
        },
        {
          imgSrc:
            "https://images.unsplash.com/photo-1555109307-f7d9da25c244?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fG5ldyUyMHlvcmt8ZW58MHx8MHx8fDA%3D",
          title: "San Francisco",
        },
      ],
    },
  ];

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div className="container-fluid destination py-5">
      <div className="container py-5">
        <div className="mx-auto text-center mb-5" style={{ maxWidth: "900px" }}>
          <h5 className="section-title px-3">Destination</h5>
          <h1 className="mb-0">Popular Destination</h1>
        </div>
        <div className="tab-class text-center">
          <ul className="nav nav-pills d-inline-flex justify-content-center mb-4">
            {tabs.map((tab) => (
              <li key={tab.id} className="nav-item">
                <button
                  className={`d-flex mx-3 py-2 border border-primary bg-${
                    activeTab === tab.id ? "primary" : "light"
                  }  rounded-pill`}
                  data-bs-toggle="pill"
                  href={`#${tab.id}`}
                  onClick={() => handleTabClick(tab.id)}
                >
                  <span
                    className={`text-${
                      activeTab === tab.id ? "white" : "dark"
                    }`}
                    style={{ width: "150px" }}
                  >
                    {tab.label}
                  </span>
                </button>
              </li>
            ))}
          </ul>
          <div className="tab-content">
            {tabs.map((tab) => (
              <div
                key={tab.id}
                id={tab.id}
                className={`tab-pane fade show p-0${
                  activeTab === tab.id ? " active" : ""
                }`}
              >
                <div className="row g-4">
                  {tab.content.map((item, index) => (
                    <div key={index} className="col-lg-6">
                      <div className="destination-img">
                        <img
                          className="img-fluid rounded w-100"
                          src={item.imgSrc}
                          alt=""
                        />
                        <div className="destination-overlay p-4">
                          <a
                            href="#"
                            className="btn btn-primary text-white rounded-pill border py-2 px-3"
                          >
                            20 Photos
                          </a>
                          <h4 className="text-white mb-2 mt-3">{item.title}</h4>
                          <a href="#" className="btn-hover text-white">
                            View All Place{" "}
                            <i className="fa fa-arrow-right ms-2"></i>
                          </a>
                        </div>
                        <div className="search-icon">
                          <a
                            href={item.imgSrc}
                            data-lightbox={`destination-${index}`}
                          >
                            <i className="fa fa-plus-square fa-1x btn btn-light btn-lg-square text-primary"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
