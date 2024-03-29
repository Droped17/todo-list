import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";

export default function UserDetail() {
  return (
    <div className="user-detail">
      <p>Date time</p>
      <p>**Note</p>
      <div className="detail-img">
        <Image
          src="https://images.unsplash.com/photo-1706402500309-597ba87c8f3a?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          style={{ height: "auto", width: "100%" }}
          fluid
        />
      </div>
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
      <Container fluid>
        <div className="d-flex justify-content-between">
          <span>Partner: </span>
          <span>asd</span>
        </div>
        <span>asdasd</span>
        <Image
          src="src/assets/images/Cat-Memes-07.webp"
          style={{ height: "auto", width: "100%" }}
          fluid
        />
      </Container>
    </div>
  );
}
