
import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";

import "../Styles/header.scss";

const Header = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav>

        <div className="logo">
          <h2>Shubham.</h2>
        </div>

        <div className="menu">

          <a onClick={() => setMenuOpen(false)} href="#home">
            Home
          </a>

          <a onClick={() => setMenuOpen(false)} href="#projects">
            Projects
          </a>

          <a onClick={() => setMenuOpen(false)} href="#education">
            Education
          </a>

          <a onClick={() => setMenuOpen(false)} href="#certificates">
            Certificates
          </a>

          <a onClick={() => setMenuOpen(false)} href="#contact">
            Contact
          </a>

        </div>

        <div className="btn">
          <a href="mailto:shubhamhanumnatpail@gmail.com">
            <button>Email</button>
          </a>
        </div>

      </nav>


      {/* Menu Button */}

      <button
        className="navBtn"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <AiOutlineMenu />
      </button>


      {/* Mobile Menu */}

      <div className={`navPhone ${menuOpen ? "navPhoneComes" : ""}`}>
         <h2>Shubham.</h2>

        <a onClick={() => setMenuOpen(false)} href="#home">
          Home
        </a>

        <a onClick={() => setMenuOpen(false)} href="#projects">
          Projects
        </a>

        <a onClick={() => setMenuOpen(false)} href="#education">
          Education
        </a>

        <a onClick={() => setMenuOpen(false)} href="#certificates">
          Certificates
        </a>

        <a onClick={() => setMenuOpen(false)} href="#contact">
          Contact
        </a>

        <a href="mailto:shubhamhanumnatpail@gmail.com">
            <button>Email</button>
          </a>
      </div>

    </>
  );
};

export default Header;