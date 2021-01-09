import React from "react";
import { Navbar, Nav, NavItem, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useStateValue } from "../../context/user/StateProvider";

const NavbarComponent = () => {
  const [state] = useStateValue();
  const { authenticated } = state;

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Link to="/">
        <Navbar.Brand>My Todo List</Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          {!authenticated && (
            <>
              <Link to="/login">
                <Button className="mr-3">Login</Button>
              </Link>
              <Link to="/register">
                <Button>Register</Button>
              </Link>
            </>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarComponent;
