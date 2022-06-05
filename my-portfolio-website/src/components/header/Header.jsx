import React from "react";
import "./header.css";
import CAT from "./CAT";
import ME from "../../assets/png1.png"
import HeaderSocial from "./HeaderSocial";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Thirosh Madhusha</h1>
        <h5 className="text-light">Fullstack Developer</h5>

        {/* Add Cv Download Link */}
        <CAT />
        <HeaderSocial />

        {/* Add Image */}
        <div className="me">
          <img src={ME} alt="me"></img>
        </div>

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
