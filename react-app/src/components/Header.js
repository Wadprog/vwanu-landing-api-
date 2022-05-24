import React from "react";
import { Link } from "react-router-dom";
import {
  NavbarToggler,
  Collapse,
  Nav,
  NavLink,
  NavItem,
  UncontrolledDropdown,
  DropdownMenu,
  DropdownToggle,
  DropdownItem,
} from "reactstrap";

const Header = () => (
  <div className="mt--4">
    <NavbarToggler onClick={function noRefCheck() {}} />
    <Collapse navbar>
      <Nav fill className="me-auto" navbar>
        <UncontrolledDropdown inNavbar nav>
          <DropdownToggle className="text-secondary" caret nav>
            Images
          </DropdownToggle>
          <DropdownMenu right>
            <DropdownItem>Categories</DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
        <UncontrolledDropdown inNavbar nav>
          <DropdownToggle className="text-secondary" caret nav>
            Graphics Assets
          </DropdownToggle>
          <DropdownMenu right className="">
            <DropdownItem>Vectors</DropdownItem>
            <DropdownItem divider />
            <DropdownItem>PSD</DropdownItem>
            <DropdownItem divider />
            <DropdownItem>Canva</DropdownItem>
            <DropdownItem divider />
            <DropdownItem>Icon</DropdownItem>
            <DropdownItem divider />
            <DropdownItem>Collections</DropdownItem>
            <DropdownItem divider />
            <DropdownItem>Templates</DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
        <UncontrolledDropdown inNavbar nav>
          <DropdownToggle className="text-secondary" caret nav>
            Videos
          </DropdownToggle>
          <DropdownMenu right>
            <DropdownItem>Footage</DropdownItem>
            <DropdownItem divider />
            <DropdownItem>Motion Graphics</DropdownItem>
            <DropdownItem divider />
            <DropdownItem>Templates</DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
        <UncontrolledDropdown inNavbar nav>
          <DropdownToggle className="text-secondary" caret nav>
            Music
          </DropdownToggle>
          <DropdownMenu right>
            <DropdownItem>Beats</DropdownItem>
            <DropdownItem divider />
            <DropdownItem>Sounds effects</DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
        <UncontrolledDropdown inNavbar nav>
          <DropdownToggle className="text-secondary" caret nav>
            Blog
          </DropdownToggle>
          <DropdownMenu right>
            <DropdownItem>New Year</DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
        <NavItem>
          <NavLink
            className="text-secondary"
            href="https://github.com/reactstrap/reactstrap"
          >
            About Us
          </NavLink>
        </NavItem>
      </Nav>
      <Nav>
        <NavItem>
          <NavLink className="" href="/auth/login/">
            Login
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className="collabo-btn btn btn-default btn-primary ml-3"
            href="/auth/register/"
          >
            Register
          </NavLink>
        </NavItem>
      </Nav>
    </Collapse>
  </div>
);

export default Header;
