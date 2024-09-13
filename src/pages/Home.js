import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { Card, ListGroup } from "react-bootstrap";
import "./Home.css";

export default function Home() {
  return (
    <>
      <div className="window">
        <h1>Your Trusted Family Dentist in Saratoga Springs</h1>
        <Container className="text-center" fluid="xs">
          <Row xs={1} md={2} className="justify-content-xl-center">
            <Col className="col">
              <img
                className="image"
                alt="Saratoga Skyline"
                src={require("./skyview-toga.jpg")}
              />
              <p>PlaceHolder Image</p>
            </Col>
            <Col className="justify-content-center text-center mx-auto">
              <HoursCard />
            </Col>
          </Row>
        </Container>
      </div>
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
    <Card className="mx-auto" style={{ width: "20rem" }}>
      <Card.Body>
        <Card.Title>Hours of Operation</Card.Title>
        <ListGroup variant="flush">
          {hoursData.map((entry, index) => (
            <ListGroup.Item key={index}>
              <strong>{entry.day} </strong> {entry.hours}
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Card.Body>
    </Card>
  );
};
