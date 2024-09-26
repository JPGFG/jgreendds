import { ButtonMailto } from "../components/ButtonMailto";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Contact.css";

export default function Home() {
  return (
    <div className="mx-auto">
      <h1 style={{ marginTop: "2rem" }}>Contact</h1>
      <AutoLayout />
    </div>
  );
}

function AutoLayout() {
  return (
    <Container className="text-center mx-auto">
      <Row className="justify-content-center" style={{ marginBottom: "2rem" }}>
        <Col />
        <Col>
          <Alert />
        </Col>
        <Col />
      </Row>
      <Row className="justify-content-center text-center mx-auto">
        <Col style={{ marginBottom: "2rem" }}>
          <MailingAddress />
        </Col>
        <Col style={{ marginBottom: "2rem" }}>
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
      <Card.Header>
        <strong style={{ textDecoration: "underline" }}>Mail</strong>
      </Card.Header>
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

function PhoneNumbers() {
  return (
    <Card className="mx-auto" style={{ width: "18rem", textAlign: "center" }}>
      <Card.Header>
        <strong style={{ textDecoration: "underline" }}>Phone</strong>
      </Card.Header>
      <Card.Body>
        <Card.Text>
          <strong>Main Phone</strong> <br />
          <a href="tel:518-587-8885">(518) 587-8885</a>
          <br />
          <strong>Billing Dept</strong> <br />
          <a href="tel:518-587-8885">(518) 587-8885 option 2</a>
          <br />
          <strong>Fax</strong> <br />
          <a href="tel:518-587-2827">(518) 587-2827</a>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

function EmailList() {
  return (
    <Card className="mx-auto" style={{ width: "18rem", textAlign: "center" }}>
      <Card.Header>
        <strong style={{ textDecoration: "underline" }}>E-Mail</strong>
      </Card.Header>
      <Card.Body>
        <Card.Text>
          <ButtonMailto
            label="jamiegreendds@gmail.com"
            mailto="mailto:jamiegreendds@gmail.com"
          />
          <br />
          <br />
          <strong>Billing</strong> <br />
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
        <Card.Header>
          <strong>If you are having a dental emergency</strong>
        </Card.Header>
        <Card.Body>
          <Card.Text>
            Please <strong>CALL</strong> us, rather than contact us via email.
            If no one is available to take your call, please leave a message.
            Messages will be checked more frequently than email. <br />
            Thank you! <br />
            <a style={{ color: "white" }} href="tel:518-587-8885">
              (518) 587-8885
            </a>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}
