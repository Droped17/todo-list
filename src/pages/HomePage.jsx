import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import UserDetail from "../compomemts/homepage/UserDetail";
import UserStatus from "../compomemts/homepage/UserStatus";
import UserThisMonth from "../compomemts/homepage/UserThisMonth";
import UserMainQuest from "../compomemts/homepage/UserMainQuest";

export default function HomePage() {
  return (
    <div className="bg-dark text-white">
      <main>
        <Container fluid className="primary-color">
          <Row className="gy-3 gx-3">
            <span>Your Name</span>
            <span>JOB: job title</span>
            <Col xs={12} sm={6} md={6} lg={2}>
              <UserDetail />
            </Col>
            <Col xs={12} sm={6} md={6} lg={4}>
              <UserStatus />
            </Col>
            <Col xs={12} sm={6} md={6} lg={4}>
              <UserThisMonth />
            </Col>
            <Col xs={12} sm={6} md={6} lg={2}>
              <UserMainQuest />
            </Col>
          </Row>
        </Container>
      </main>
    </div>
  );
}
