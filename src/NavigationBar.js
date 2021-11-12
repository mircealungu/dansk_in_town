import { Navbar, Container, Nav } from "react-bootstrap";
import Parse from "parse";

export function NavigationBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {!Parse.User.current() && (
              <>
                <Nav.Link href="/signup">Sign Up</Nav.Link>
                <Nav.Link href="/login">LogIn</Nav.Link>
              </>
            )}

            {Parse.User.current() && (
              <>
                <Nav.Link href="/upload">Upload</Nav.Link>
                <Nav.Link href="/exercises">Exercises</Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
