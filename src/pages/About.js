import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import { Card } from "react-bootstrap";

export default function About() {
  return (
    <>
      <h1
        className="mx-auto"
        style={{ marginTop: "2rem", marginBottom: "2rem" }}
      >
        Meet your Care Team
      </h1>

      <Container className="text-center">
        <Row>
          <Col>
            <Image
              style={{
                maxHeight: "18rem",
                maxwidth: "18rem",
                marginBottom: "2rem",
                textAlign: "center",
              }}
              src={require("./drjamie.png")}
              rounded
            />
            <MailingAddress />
          </Col>
        </Row>
      </Container>
    </>
  );
}

function MailingAddress() {
  return (
    <Card className="mx-auto" style={{ width: "30rem" }}>
      <Card.Header>
        <strong style={{ textDecoration: "underline", textAlign: "center" }}>
          Dr. Richard Jamie Green, DDS
        </strong>
      </Card.Header>
      <Card.Body>
        <Card.Text style={{ textAlign: "left" }}>
          Dr. Green grew up in the Saratoga-Wilton area and is a graduate of the
          Saratoga Springs school system. He attended the State University of
          New York at Albany and received a BS in Biology and Chemistry. He then
          attended the State University of New York at Buffalo School of Dental
          Medicine, receiving his DDS degree in 1990. After graduation, he
          received post doctoral training at the Yale University School of
          Medicine, and the Yale-New Haven Hospital in New Haven Connecticut.
          After working in Connecticut for a few years, he realized that the
          Wilton area was where he felt at home. He opened his practice at it’s
          current location in 1996. Dr. Green is a member of the New York
          National Guard, as well as several local civic organizations. He
          enjoys practicing all phases of modern dental care, centered on
          developing his patient’s lifelong enjoyment of their dentition
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
