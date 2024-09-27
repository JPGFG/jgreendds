import "./Procedures";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

export default function Home() {
  return (
    <div
      className="mx-auto"
      style={{ textAlign: "center", position: "relative" }}
    >
      <h1 style={{ marginTop: "2rem" }}>Directions</h1>
      <Container
        style={{ textAlign: "center" }}
        className="text-center"
        fluid="xs"
      >
        <Row xs={1} md={2} className="justify-content-center mx-auto">
          <Col
            style={{ textAlign: "left", maxwidth: "250px" }}
            className="justify-content-center"
          >
            <div
              className="mx-auto"
              style={{ maxWidth: "250px", marginBottom: "2rem" }}
            >
              We are on the Corner of Maple Avenue and Smith Bridge Road. A
              short drive north from the Cumberland Farms off of Daniels Road.
            </div>
          </Col>
        </Row>
      </Container>
      <div className="iframe-rwd">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.2798787073784!2d-73.77235168772637!3d43.11475498696804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89de37228962668f%3A0x95d694c43c8f2d40!2sR%20Jamie%20Green%20Family%20Dentistry!5e1!3m2!1sen!2sus!4v1726006329892!5m2!1sen!2sus"
          width="600"
          title="directionalmap"
          height="450"
          allowfullscreen=""
          referrerpolicy="no-referrer-when-downgrade"
          className="mx-auto"
        ></iframe>
      </div>
    </div>
  );
}
