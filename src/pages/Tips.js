import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "./Home.css";

export default function Tips() {
  return (
    <>
      <h1
        className="mx-auto"
        style={{ marginTop: "2rem", marginBottom: "2rem" }}
      >
        Dr. Greens Tips for Healthy Teeth
      </h1>

      <Container
        style={{ textAlign: "center" }}
        className="text-center"
        fluid="xs"
      >
        <Row xs={1} md={2} className="justify-content-center mx-auto">
          <Col style={{ textAlign: "left" }} className="col">
            <p>
              You can write anything you want here, and it can be put in any way
              you wish.
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
}
