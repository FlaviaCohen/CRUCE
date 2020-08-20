import React from "react";
import { Link } from "react-router-dom";
import { Nav, OptionContainer } from "./style";

const Navbar = () => {
  return (
    <Nav className="navbar navbar-expand-sm bg-light navbar-light">
      <OptionContainer>
        <Link className="navbar-brand" to="/">
          <img
            src="http://www.e-cruce.com/wp-content/uploads/2019/10/cruce.svg"
            alt="logo"
          />
        </Link>
        <Link style={{color: '#505050'}} className="nav-link" to="/admin-products">
          Admin
        </Link>
        <Link style={{color: '#505050'}} className="nav-link" to="/">
          Catálogo
        </Link>
      </OptionContainer>
    </Nav>
  );
};

export default Navbar;
