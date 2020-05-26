import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, NavbarText } from 'reactstrap';

const NavBar = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div className="stickIt"
        >
            <Navbar color="dark" dark  expand="sm">
            <NavbarBrand href="/">PORTFOLIO</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink className="text-white" href="/project">
                                Projects
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="text-white" href="/resume">
                                Resume
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="text-white" href="/contact">
                                Contact
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
};

export default NavBar;