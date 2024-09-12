import "./Billing.css";
import { ButtonMailto } from "../components/ButtonMailto";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Billing() {
  return (
    <div className="billingblock">
      <Row className="mx-auto">
        <Col>
          <BillingPolicyCard />
        </Col>
        <Col>
          <InsurancePolicyCard />
        </Col>
      </Row>
    </div>
  );
}

function BillingPolicyCard() {
  return (
    <Card className="mx-auto" style={{ width: "24rem", textAlign: "center" }}>
      <Card.Body>
        <Card.Header
          className="flex-fill mx-0"
          as="h3"
          style={{
            marginBottom: "1rem",
            marginTop: "-1rem",
            width: "100%",
            backgroundColor: "white",
          }}
        >
          Billing Policy
        </Card.Header>
        <Card.Text style={{ textAlign: "left", marginTop: "1rem" }}>
          Payment is expected at time of service. <br />
          We accept cash, local checks, and credit cards. <br /> <br />
          <strong>
            If for some reason you are unable to pay in full, please contact
            Cindy in our billing department.
          </strong>
          <br />
          <div style={{ textAlign: "center", marginTop: "0.5rem" }}>
            <a href="tel:518-587-8885">(518) 587-8885</a> Option 2 <br />
            <ButtonMailto
              label="cindy@jamiegreendds.com"
              mailto="mailto:cindy@jamiegreendds.com"
            />
          </div>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
function InsurancePolicyCard() {
  return (
    <Card
      className="mx-auto"
      style={{ width: "24rem", textAlign: "center", marginTop: "2rem" }}
    >
      <Card.Body>
        <Card.Header
          className="flex-fill mx-0"
          as="h3"
          style={{
            marginBottom: "1rem",
            marginTop: "-1rem",
            width: "100%",
            backgroundColor: "white",
          }}
        >
          Insurance
        </Card.Header>
        <Card.Text style={{ textAlign: "left", marginTop: "1rem" }}>
          Your insurance company will have guidelines on how often they will pay
          for procedures such as x-rays, cleanings, and crowns. If you have not
          met their guidelines, you will be responsible for the service
          provided. There will also be guidelines stating what percentage of
          each procedure will be covered by your insurance. Not all procedures
          will be 100% covered. Unfortunately, each insurance policy has
          different guidelines. Even within the same insurance company, there
          may be differences in each policy. Therefore, in most cases, we cannot
          tell you what your individual insurance policy will cover. <br />
          <br />
          <strong>
            Please call the 1-800 number on your insurance card to gather this
            information.
          </strong>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
