import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import MyTitle from "../compomemts/MyTitle";

export default function HomePage() {
  return (
    <div>
      <p>Your Name</p>
      <Container fluid className="bg-warning">
        <Row>
          <Col xs={12} sm={6} md={2}>
            <p>Date time</p>0
            <p>**Note</p>
            <Image
              src="https://images.unsplash.com/photo-1706402500309-597ba87c8f3a?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              style={{ maxHeight: 200, width: "100%" }}
              fluid
            />
            <Container fluid>
              <p>Life:</p>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </Container>
            <Container fluid>
              <p>Life:</p>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </Container>
            <Container fluid>
              <p>Coin:</p>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </Container>
            <Container fluid>
              <p>Gen:</p>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </Container>
          </Col>
          <Col xs={12} sm={6} md={4}>
            <Container fluid>
                <MyTitle icon={`icon`} text={`Status:`}/>
            </Container>
          </Col>
          <Col xs={12} sm={6} md={4}>
            sm=8
          </Col>
          <Col xs={12} sm={6} md={2}>
            sm=4
          </Col>
        </Row>
      </Container>
    </div>
  );
}
