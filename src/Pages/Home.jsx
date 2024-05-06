import Maincarousel from "../Components/Maincarousel";

import About from "./About";
import Destination from "./Destination";
import ExploreTour from "./ExploreTour";
import Gallery from "./Gallery";
import Packages from "./Packages";
import Services from "./Services";
import Contact from "./Contact";
import Guide from "./Guides";
import Newsletter from "../Components/Newsletter";

const Home = () => {
  return (
    <div>
      <Maincarousel />
      <About />
      <Services />
      <Destination />
      <ExploreTour />
      <Packages />
      <Gallery />
      <Contact />
      <Guide />
      <Newsletter />
    </div>
  );
};

export default Home;
