import React from "react";
import "../css/style.css";
import "../css/bootstrap.min.css";

function Gallery() {
  const galleryData = [
    { id: 1, title: "All", category: "all" },
    { id: 2, title: "World tour", category: "world" },
    { id: 3, title: "Ocean Tour", category: "ocean" },
    { id: 4, title: "Summer Tour", category: "summer" },
    { id: 5, title: "Sport Tour", category: "sport" },
  ];

  const galleryItems = [
    {
      id: 1,
      category: "world",
      image:
        "https://images.unsplash.com/photo-1567604539011-ce1f37c5d657?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8d29ybGQlMjB0b3VyfGVufDB8fDB8fHww",
    },
    {
      id: 2,
      category: "world",
      image:
        "https://images.unsplash.com/photo-1567604539011-ce1f37c5d657?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8d29ybGQlMjB0b3VyfGVufDB8fDB8fHww",
    },
    {
      id: 3,
      category: "world",
      image:
        "https://images.unsplash.com/photo-1567604539011-ce1f37c5d657?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8d29ybGQlMjB0b3VyfGVufDB8fDB8fHww",
    },
    {
      id: 4,
      category: "world",
      image:
        "https://images.unsplash.com/photo-1567604539011-ce1f37c5d657?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8d29ybGQlMjB0b3VyfGVufDB8fDB8fHww",
    },
    {
      id: 5,
      category: "world",
      image:
        "https://images.unsplash.com/photo-1567604539011-ce1f37c5d657?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8d29ybGQlMjB0b3VyfGVufDB8fDB8fHww",
    },
    {
      id: 6,
      category: "world",
      image:
        "https://images.unsplash.com/photo-1567604539011-ce1f37c5d657?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8d29ybGQlMjB0b3VyfGVufDB8fDB8fHww",
    },
    {
      id: 7,
      category: "world",
      image:
        "https://images.unsplash.com/photo-1567604539011-ce1f37c5d657?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8d29ybGQlMjB0b3VyfGVufDB8fDB8fHww",
    },
    {
      id: 8,
      category: "world",
      image:
        "https://images.unsplash.com/photo-1567604539011-ce1f37c5d657?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8d29ybGQlMjB0b3VyfGVufDB8fDB8fHww",
    },
  ];

  return (
    <div className="container-fluid gallery py-5 my-5">
      <div className="mx-auto text-center mb-5" style={{ maxWidth: "900px" }}>
        <h5 className="section-title px-3">Our Gallery</h5>
        <h1 className="mb-4">Tourism & Traveling Gallery.</h1>
        <p className="mb-0">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
          tempore nam, architecto doloremque velit explicabo? Voluptate sunt
          eveniet fuga eligendi! Expedita laudantium fugiat corrupti eum cum
          repellat a laborum quasi.
        </p>
      </div>
      <div className="tab-class text-center">
        <ul className="nav nav-pills d-inline-flex justify-content-center mb-5">
          {galleryData.map((item) => (
            <li className="nav-item" key={item.id}>
              <a
                className={`d-flex mx-3 py-2 border border-primary bg-light rounded-pill ${
                  item.category === "all" ? "active" : ""
                }`}
                data-bs-toggle="pill"
                href={`#GalleryTab-${item.id}`}
              >
                <span className="text-dark" style={{ width: "150px" }}>
                  {item.title}
                </span>
              </a>
            </li>
          ))}
        </ul>
        <div className="tab-content">
          {galleryData.map((item) => (
            <div
              id={`GalleryTab-${item.id}`}
              className={`tab-pane fade show p-0 ${
                item.category === "all" ? "active" : ""
              }`}
              key={item.id}
            >
              <div className="row g-2">
                {galleryItems
                  .filter(
                    (galleryItem) =>
                      item.category === "all" ||
                      galleryItem.category === item.category
                  )
                  .map((galleryItem) => (
                    <div
                      className="col-sm-6 col-md-6 col-lg-4 col-xl-3"
                      key={galleryItem.id}
                    >
                      <div className="gallery-item h-100">
                        <img
                          src={galleryItem.image}
                          className="img-fluid w-100 h-100 rounded"
                          alt="Image"
                        />
                        <div className="gallery-content">
                          <div className="gallery-info">
                            <h5 className="text-white text-uppercase mb-2">
                              World Tour
                            </h5>
                            <a href="#" className="btn-hover text-white">
                              View All Place{" "}
                              <i className="fa fa-arrow-right ms-2"></i>
                            </a>
                          </div>
                        </div>
                        <div className="gallery-plus-icon">
                          <a
                            href={galleryItem.image}
                            data-lightbox={`gallery-${galleryItem.id}`}
                            className="my-auto"
                          >
                            <i className="fas fa-plus fa-2x text-white"></i>
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
  );
}

export default Gallery;
