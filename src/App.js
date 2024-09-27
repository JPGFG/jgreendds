import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import "./App.css";
import { Route, Routes, Link } from "react-router-dom";
import About from "./pages/About";
import Tips from "./pages/Tips";
import Home from "./pages/Home";
import Procedures from "./pages/Procedures";
import Billing from "./pages/Billing";
import Contact from "./pages/Contact";
import Directions from "./pages/Directions";
import FAQ from "./pages/FAQ";
import NavigationBar from "./components/NavigationBar";
import Nondescrimination from "./components/NonDesc";

function App() {
  return (
    <>
      <DefaultPhotoSlider />
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/billing" element={<Billing />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/directions" element={<Directions />} />
        <Route path="/FAQs" element={<FAQ />} />
        <Route path="/procedures" element={<Procedures />} />
        <Route path="/about" element={<About />} />
        <Route path="/tips" element={<Tips />} />
      </Routes>
      <Footer />
    </>
  );
}

function DefaultPhotoSlider() {
  return (
    <div className="carousel-div">
      <Carousel
        className="d-none d-sm-block caro mx-auto"
        style={{ maxHeight: "400px", maxWidth: "60rem" }}
      >
        <Carousel.Item>
          <Image className="c-img" src={require("./dentistry.png")} />
          <Carousel.Caption>
            <h3>Dr. R. Jamie Green, DDS</h3>
            <p>Serving Saratoga Since 1996</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image className="c-img" src={require("./dentistry.png")} />
          <Carousel.Caption>
            <h3>Meet the Team</h3>
            <Button as={Link} to="/about" variant="primary">
              About Us
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image className="c-img" src={require("./dentistry.png")} />
          <Carousel.Caption>
            <h3>Dr. Green's Tips for Healthy Teeth</h3>
            <Button as={Link} to="/tips" variant="primary">
              Read Here
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

function Footer() {
  return (
    <div className="footer-plug">
      <Nondescrimination />
      <br />
      <br />
      <footer>2024 - all rights reserved.</footer>
      <footer>GreaseFire</footer>
    </div>
  );
}

export default App;
