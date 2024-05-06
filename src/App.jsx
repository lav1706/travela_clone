import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import Footer from "./Components/Footer";
import Announcement from "./Components/Announcement";
import ExploreTour from "./Pages/ExploreTour";
import Copyright from "./Components/Copyright";
import Services from "./Pages/Services";
import Guide from "./Pages/Guides";
import Packages from "./Pages/Packages";
import Gallery from "./Pages/Gallery";

const App = () => {
  return (
    <Router>
      <Announcement />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/guides" element={<Guide />} />
        <Route path="/exploretour" element={<ExploreTour />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
      <Footer />
      <Copyright />
    </Router>
  );
};

export default App;
