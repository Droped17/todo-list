import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import MyTitle from "../MyTitle";
import Accordion from "react-bootstrap/Accordion";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { thisMonth } from "../../data/mockData";

export default function UserThisMonth() {
  return (
    <div className="user-thismonth">
      <Image
        src="https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        style={{ maxHeight: 200, width: "100%" }}
        fluid
      />
      <Accordion defaultActiveKey="0" className="accordion">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Quest Board</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      <Container fluid>
        <MyTitle text={`This month`} />
        <Row className="gy-3 gx-3">
          {thisMonth.map((cardItem) => (
            <Col key={cardItem.id} xs={12} sm={6} md={6}>
              <Card
                className="card"
                style={{ height: "200px", minWidth: "100px" }}
              >
                <Card.Img
                  variant="top"
                  src={`${cardItem.img}`}
                  style={{ height: "100px", objectFit: "cover" }}
                />
                <Card.Body className="d-flex align-items-center">
                  <Card.Title className="text-white">
                    {cardItem.title}
                  </Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
