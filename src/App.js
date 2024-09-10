import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Procedures from "./pages/Procedures";
import Billing from "./pages/Billing";
import Contact from "./pages/Contact";
import Directions from "./pages/Directions";
import FAQ from "./pages/FAQ";
import NavigationBar from "./components/NavigationBar";

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
      </Routes>
      <Footer />
    </>
  );
}

function DefaultPhotoSlider() {
  return (
    <div className="carousel-div">
      <Carousel className="d-none d-sm-block caro">
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
            <Button variant="primary">About Us</Button>{" "}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image className="c-img" src={require("./dentistry.png")} />
          <Carousel.Caption>
            <h3>Dr. Green's Tips for Healthy Teeth</h3>
            <Button variant="primary">Read Here</Button>{" "}
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

function Footer() {
  return (
    <div className="footer-plug">
      <a href="/">Notice of Nondiscrimination</a>
      <br />
      <br />
      <footer>2024 - all rights reserved.</footer>
      <footer>Website Created and Maintained by GreaseFire</footer>
    </div>
  );
}

export default App;
