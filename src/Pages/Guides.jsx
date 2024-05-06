import React from "react";
import "../css/style.css";
import "../css/bootstrap.min.css";
function Guide() {
  const guides = [
    {
      imgSrc:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Full Name",
      designation: "Designation",
    },
    {
      imgSrc:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Full Name",
      designation: "Designation",
    },
    {
      imgSrc:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Full Name",
      designation: "Designation",
    },
    {
      imgSrc:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Full Name",
      designation: "Designation",
    },
  ];

  return (
    <div className="container-fluid guide py-5">
      <div className="container py-5">
        <div className="mx-auto text-center mb-5" style={{ maxWidth: "900px" }}>
          <h5 className="section-title px-3">Travel Guide</h5>
          <h1 className="mb-0">Meet Our Guide</h1>
        </div>
        <div className="row g-4">
          {guides.map((guide, index) => (
            <div className="col-md-6 col-lg-3" key={index}>
              <div className="guide-item">
                <div className="guide-img">
                  <div className="guide-img-efects">
                    <img
                      src={guide.imgSrc}
                      className="img-fluid w-100 rounded-top"
                      alt="Image"
                    />
                  </div>
                  <div className="guide-icon rounded-pill p-2">
                    <a
                      className="btn btn-square btn-primary rounded-circle mx-1"
                      href=""
                    >
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a
                      className="btn btn-square btn-primary rounded-circle mx-1"
                      href=""
                    >
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a
                      className="btn btn-square btn-primary rounded-circle mx-1"
                      href=""
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a
                      className="btn btn-square btn-primary rounded-circle mx-1"
                      href=""
                    >
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </div>
                </div>
                <div className="guide-title text-center rounded-bottom p-4">
                  <div className="guide-title-inner">
                    <h4 className="mt-3">{guide.name}</h4>
                    <p className="mb-0">{guide.designation}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Guide;
