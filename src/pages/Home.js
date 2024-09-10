import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "./Home.css";

export default function Home() {
  return (
    <>
      <div className="window">
        <h1>Your Trusted Family Dentist in Saratoga Springs</h1>
        <Container fluid="xs">
          <Row xs={1} md={2} className="justify-content-xl-center">
            <Col className="col">
              <img
                className="image"
                alt="Saratoga Skyline"
                src={require("./skyview-toga.jpg")}
              />
              <p>PlaceHolder Image</p>
            </Col>
            <Col className="col">
              <p>
                Welcome to Dr. R. Jamie Green, DDS, where compassionate family
                dental care meets a trusted local tradition in Saratoga Springs,
                New York. Since opening our doors in the late 1990s, our
                practice has been dedicated to serving the community with
                personalized and attentive dental services. Dr. Green, who has
                deep ties to the area, brings a wealth of experience and a
                genuine commitment to patient care. We offer a full range of
                family dentistry services, from routine cleanings to advanced
                treatments, all designed to make your visits comfortable and
                stress-free. Let us care for your family’s smiles with the same
                dedication and expertise we’ve provided for years.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
