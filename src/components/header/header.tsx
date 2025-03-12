import React from "react";
import logo from "../../assets/logo.svg";
import StyledHeader from "./header.styles.tsx";

const Header = () => {
  return (
    <StyledHeader>
      <div className="headerContainer">
        <div className="navContainer">
          <p className="navButtons">Personal</p>
          <p className="navButtons">Business</p>
          <p className="navButtons">Partners</p>
        </div>
        <img src={logo} alt="logo" className="logo" />
        <div className="loginButtonStyle">Log In</div>
      </div>
    </StyledHeader>
  );
};

export default Header;
