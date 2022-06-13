import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
  Button,
  Input,
} from "reactstrap";

const Navi = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <div>
      <Navbar color="light" expand="md" light>
        <NavbarBrand href="/">SellCar</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <Input
                id="auto"
                name="auto"
                placeholder="Mercedes"
                type="text"
              />
            </NavItem>
          </Nav>
          <NavLink href="/ilan ver/">İlan ver</NavLink>
          <Button>Giriş yap / Üye Ol</Button>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Navi;
