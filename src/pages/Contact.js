import { ButtonMailto } from "../components/ButtonMailto";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Contact.css";

export default function Home() {
  return (
    <div>
      <h1>Contact</h1>
      <AutoLayout />
    </div>
  );
}

function AutoLayout() {
  return (
    <Container className="text-center">
      <Row className="justify-content-center">
        <Col />
        <Col>
          <Alert />
        </Col>
        <Col />
      </Row>
      <Row className="justify-content-center text-center mx-auto">
        <Col>
          <MailingAddress />
        </Col>
        <Col>
          <PhoneNumbers />
        </Col>
        <Col>
          <EmailList />
        </Col>
      </Row>
    </Container>
  );
}

function MailingAddress() {
  return (
    <Card className="mx-auto" style={{ width: "18rem", textAlign: "center" }}>
      <Card.Body>
        <Card.Title>Mail</Card.Title>
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

function PhoneNumbers() {
  return (
    <Card className="mx-auto" style={{ width: "18rem", textAlign: "center" }}>
      <Card.Body>
        <Card.Title>Phone</Card.Title>
        <Card.Text>
          Main Phone: <br />
          <a href="tel:518-587-8885">(518) 587-8885</a>
          <br />
          Billing Dept: <br />
          <a href="tel:518-587-8885">(518) 587-8885 option 2</a>
          <br />
          Fax: <br />
          <a href="tel:518-587-2827">(518) 587-2827</a>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

function EmailList() {
  return (
    <Card className="mx-auto" style={{ width: "18rem", textAlign: "center" }}>
      <Card.Body>
        <Card.Title>E-Mail</Card.Title>
        <Card.Text>
          <ButtonMailto
            label="jamiegreendds@gmail.com"
            mailto="mailto:jamiegreendds@gmail.com"
          />
          <br />
          Billing <br />
          <ButtonMailto
            label="cindy@jamiegreendds.com"
            mailto="mailto:cindy@jamiegreendds.com"
          />
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
function Alert() {
  return (
    <>
      <Card
        bg="danger"
        key="danger"
        text={"danger" === "light" ? "dark" : "white"}
        style={{ width: "18rem" }}
        className="mb-2 mx-auto"
      >
        <Card.Body>
          <Card.Title>If you are having a dental emergency: </Card.Title>
          <Card.Text>
            please CALL us, rather than contact us via email. If no one is
            available to take your call, please leave a message. Messages will
            be checked more frequently than email. Thank you!
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}
