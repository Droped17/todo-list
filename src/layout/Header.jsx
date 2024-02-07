import { Navbar, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { doSignOut } from "../context/auth";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Header() {
  const navigate = useNavigate();
  const { userLoggedIn } = useAuth();

  return (
    <Navbar
      bg="dark"
      expand="lg"
      style={{ padding: 5, borderBottom: "1px solid white" }}
    >
      <Navbar.Brand href="#home" style={{ color: "white" }}>
        Todo List
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          {/* <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link> */}
        </Nav>
        {userLoggedIn ? (
          <Button
            variant="danger"
            type="submit"
            onClick={() =>
              doSignOut().then(() => {
                navigate("/login");
              })
            }
          >
            Logout
          </Button>
        ) : undefined}
        <Link to={"/login"}></Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
