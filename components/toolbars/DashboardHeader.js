import React from "react";
import Router from "next/router";
import Link from "next/link";
import { Nav, Navbar, DropdownButton, Dropdown } from "react-bootstrap";
// services
import AccountService from "services/AccountService";

function DashboardHeader(props) {
  const { user } = props;

  const displayName = user && `${user.first_name} ${user.last_name}`;

  const handleLogOut = () => {
    AccountService.logout();
    Router.push("/");
  };

  return (
    <Navbar className="bg-transparent d-flex justify-content-right" bg="light" expand="lg">
      <Link href="/">
        <Navbar.Brand as="a" className="text-white">
          Docket
        </Navbar.Brand>
      </Link>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Nav className="ml-auto">
          <DropdownButton menuAlign="right" title={displayName}>
            <Dropdown.Item onClick={handleLogOut}>Logout</Dropdown.Item>
          </DropdownButton>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default DashboardHeader;
