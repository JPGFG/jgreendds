import Nav from "react-bootstrap/Nav";

export default function Procedures() {
  return (
    <div>
      <TabsExample />
    </div>
  );
}

function TabsExample() {
  return (
    <Nav
      className="justify-content-center"
      variant="pills"
      defaultActiveKey="extraction"
      onSelect={DetermineText}
    >
      <Nav.Item>
        <Nav.Link eventKey="extraction">Extractions</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="rootcanal">Root Canals</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="filling">Fillings</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="crowns">Crowns/Bridges</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="prosthetics">Prosthetics</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="prevention">Prevention</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

function DetermineText(eventKey) {
  switch (eventKey) {
    case "extraction":
      console.log("extractions");
      break;
    case "rootcanal":
      console.log("rootcanal");
      break;
    case "filling":
      console.log("filling");
      break;
    case "crowns":
      console.log("crowns");
      break;
    case "prosthetics":
      console.log("prosthetics");
      break;
    case "prevention":
      console.log("prevention");
      break;
  }
}
