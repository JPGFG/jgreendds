import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { Card, ListGroup } from "react-bootstrap";
import "./Home.css";

export default function Home() {
  return (
    <>
      <h1
        className="mx-auto"
        style={{ marginTop: "2rem", marginBottom: "2rem" }}
      >
        Your Trusted Family Dentist in Saratoga Springs
      </h1>

      <Container className="text-center">
        <Row className="g-2 mx-auto">
          <Col className="col">
            <img
              className="image"
              alt="Saratoga Skyline"
              src={require("./skyview-toga.jpg")}
            />
            <p>PlaceHolder Image</p>
            <MailingAddress />
          </Col>
          <Col className="justify-content-center text-center mx-auto">
            <HoursCard />
          </Col>
        </Row>
      </Container>
    </>
  );
}

// Example hours data
const hoursData = [
  { day: "Monday", hours: "8:00 AM - 5:00 PM" },
  { day: "Tuesday", hours: "8:00 AM - 5:00 PM" },
  { day: "Wednesday", hours: "8:00 AM - 5:00 PM" },
  { day: "Thursday", hours: "8:00 AM - 5:00 PM" },
  { day: "Friday", hours: "Closed" },
  { day: "Saturday", hours: "Closed" },
  { day: "Sunday", hours: "Closed" },
];

const HoursCard = () => {
  return (
    <Card className="mx-auto" style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>Hours of Operation</Card.Title>
        <ListGroup variant="flush">
          {hoursData.map((entry, index) => (
            <ListGroup.Item key={index}>
              <Row className="mx-0" style={{ padding: "0rem", margin: "0" }}>
                <Col style={{ textAlign: "left" }}>
                  <strong>{entry.day} </strong>
                </Col>
                <Col style={{ textAlign: "left", fontSize: "15px" }}>
                  {entry.hours}
                </Col>
              </Row>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Card.Body>
    </Card>
  );
};

function MailingAddress() {
  return (
    <Card className="mx-auto" style={{ width: "18rem", textAlign: "center" }}>
      <Card.Body>
        <Card.Text>
          R. Jamie Green, DDS
          <br />
          586 Maple Avenue
          <br />
          Saratoga Springs, NY 12866
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
