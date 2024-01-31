import { Navbar, Nav } from "react-bootstrap";
export default function Header() {
  return (
    <Navbar bg="dark" expand="lg" style={{padding: 5,border: ""}}>
      <Navbar.Brand href="#home" style={{color: "white"}}>Todo List</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          {/* <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link> */}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
