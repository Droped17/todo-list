import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";

export default function UserDetail(){
    return (
        <div className="user-detail">
        <p>Date time</p>
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
      </div>
    );
}