import { Navbar, Container, Nav } from "react-bootstrap";
import Parse from "parse";
import { Link } from "react-router-dom";

export function NavigationBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Dansk in Town</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" activeKey={window.location.pathname}>
            {!Parse.User.current() && (
              <>
                <Nav.Link href="/signup">Sign Up</Nav.Link>
                <Nav.Link href="/login">LogIn</Nav.Link>
              </>
            )}

            {Parse.User.current() && (
              <>
                <Nav.Link as={Link} to="/myimages">
                  My Images
                </Nav.Link>
                <Nav.Link as={Link} to="/upload">
                  Upload
                </Nav.Link>
                <Nav.Link as={Link} to="/exercises">
                  Exercises
                </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
