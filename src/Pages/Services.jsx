import React from "react";
import "../css/style.css";
import "../css/bootstrap.min.css";

const servicesData = [
  {
    title: "WorldWide Tours",
    description:
      "Dolor sit amet consectetur adipisicing elit. Non alias eum, suscipit expedita corrupti officiis debitis possimus nam laudantium beatae quidem dolore consequuntur voluptate rem reiciendis, omnis sequi harum earum.",
    icon: "fa fa-globe fa-4x text-primary",
  },
  {
    title: "Hotel Reservation",
    description:
      "Dolor sit amet consectetur adipisicing elit. Non alias eum, suscipit expedita corrupti officiis debitis possimus nam laudantium beatae quidem dolore consequuntur voluptate rem reiciendis, omnis sequi harum earum.",
    icon: "fa fa-hotel fa-4x text-primary",
  },
  {
    title: "Travel Guides",
    description:
      "Dolor sit amet consectetur adipisicing elit. Non alias eum, suscipit expedita corrupti officiis debitis possimus nam laudantium beatae quidem dolore consequuntur voluptate rem reiciendis, omnis sequi harum earum.",
    icon: "fa fa-user fa-4x text-primary",
  },
  {
    title: "Event Management",
    description:
      "Dolor sit amet consectetur adipisicing elit. Non alias eum, suscipit expedita corrupti officiis debitis possimus nam laudantium beatae quidem dolore consequuntur voluptate rem reiciendis, omnis sequi harum earum.",
    icon: "fa fa-cog fa-4x text-primary",
  },
  {
    title: "WorldWide Tours",
    description:
      "Dolor sit amet consectetur adipisicing elit. Non alias eum, suscipit expedita corrupti officiis debitis possimus nam laudantium beatae quidem dolore consequuntur voluptate rem reiciendis, omnis sequi harum earum.",
    icon: "fa fa-globe fa-4x text-primary",
  },
  {
    title: "Hotel Reservation",
    description:
      "Dolor sit amet consectetur adipisicing elit. Non alias eum, suscipit expedita corrupti officiis debitis possimus nam laudantium beatae quidem dolore consequuntur voluptate rem reiciendis, omnis sequi harum earum.",
    icon: "fa fa-hotel fa-4x text-primary",
  },
  {
    title: "Travel Guides",
    description:
      "Dolor sit amet consectetur adipisicing elit. Non alias eum, suscipit expedita corrupti officiis debitis possimus nam laudantium beatae quidem dolore consequuntur voluptate rem reiciendis, omnis sequi harum earum.",
    icon: "fa fa-user fa-4x text-primary",
  },
  {
    title: "Event Management",
    description:
      "Dolor sit amet consectetur adipisicing elit. Non alias eum, suscipit expedita corrupti officiis debitis possimus nam laudantium beatae quidem dolore consequuntur voluptate rem reiciendis, omnis sequi harum earum.",
    icon: "fa fa-cog fa-4x text-primary",
  },
];

const ServiceItem = ({ title, description, icon }) => (
  <div className="service-content-inner d-flex align-items-center bg-white border border-primary rounded p-4 pe-0">
    <div className="service-content text-end">
      <h5 className="mb-4">{title}</h5>
      <p className="mb-0">{description}</p>
    </div>
    <div className="service-icon p-4">
      <i className={icon}></i>
    </div>
  </div>
);

const Services = () => {
  return (
    <div className="container-fluid bg-light service py-5">
      <div className="container py-5">
        <div className="mx-auto text-center mb-5" style={{ maxWidth: "900px" }}>
          <h5 className="section-title px-3">Services</h5>
          <h1 className="mb-0">Our Services</h1>
        </div>
        <div className="row g-4">
          {servicesData.map((service, index) => (
            <div className="col-lg-6" key={index}>
              <ServiceItem {...service} />
            </div>
          ))}
        </div>
        <div className="col-12">
          <div className="text-center">
            <a className="btn btn-primary rounded-pill py-3 px-5 mt-2" href="">
              Service More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
