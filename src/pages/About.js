export default function About() {
  return (
    <>
      <h1
        className="mx-auto"
        style={{ marginTop: "2rem", marginBottom: "2rem" }}
      >
        Meet your Care Team
      </h1>

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
    </>
  );
}
