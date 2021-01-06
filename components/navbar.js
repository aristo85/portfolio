import PropTypes from "prop-types";
import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import { i18n, withTranslation } from "../i18n";

const pro = "projects";

const NavBar = ({ t }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="stickIt">
      <Navbar color="dark" dark expand="sm" style={{paddingLeft: 25}}>
        <NavbarBrand href="/">{t("portfolio")}</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink className="text-white" href="/projects">
                {t("projects")}
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="text-white" href="/resume">
                {t("resume")}
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="text-white" href="/contacts">
                {t("contacts")}
              </NavLink>
            </NavItem>
            <NavItem
              onClick={() =>
                i18n.changeLanguage(i18n.language === "en" ? "ru" : "en")
              }
              style={{ color: "blue" }}
            >
              {i18n.language === "en" ? (
                <NavLink className="text-info">Русский</NavLink>
              ) : (
                <NavLink className="text-info">English</NavLink>
              )}
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};
NavBar.getInitialProps = async () => ({
  namespacesRequired: ["navbar"],
});
NavBar.prototype = {
  t: PropTypes.string.isRequired,
};

export default withTranslation("navbar")(NavBar);
