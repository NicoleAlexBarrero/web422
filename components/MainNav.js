import { Container, Nav, Navbar } from "react-bootstrap";
import Link from "next/link";

export default function MainNav() {
  return (
    //<p>MainNav</p> ?
    <>
      <Navbar bg="dark" expand="lg" className="fixed-top navbar-dark bg-dark">
        <Container>
          <Navbar.Brand>Nicole Barrero</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link href="/" passHref legacyBehavior>
                <Nav.Link>Companies</Nav.Link>
              </Link>
              <Link href="/about" passHref legacyBehavior>
                <Nav.Link>About</Nav.Link>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <br />
      <br />
    </>
  );
}