import React from "react";
// next
import Link from "next/link";
// react bootstrap
import { Navbar, Nav, Container } from "react-bootstrap";

function NavigationComponent() {
  return (
    <>
      <Navbar className="home-nav" bg="light" expand="lg">
        <Link href="/">
          <Navbar.Brand as="a">Docket</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Link href="/accounts/login">
              <Nav.Link as="a">Login</Nav.Link>
            </Link>
            <Link href="/accounts/register">
              <Nav.Link as="a">Register</Nav.Link>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default NavigationComponent;
