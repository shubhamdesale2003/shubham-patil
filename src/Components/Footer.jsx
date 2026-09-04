import React from "react";
import me from '../assets/me.jpeg'
import {LuLinkedin} from 'react-icons/lu'
import {
  AiFillGithub,
  AiFillInstagram,
  AiOutlineArrowUp,
} from "react-icons/ai";
import '../Styles/footer.scss'
const Footer = () => {
  return (
    <footer>
      <div>
        <img
          src={me}
          alt="Founder"
        />

        <h2>Shubham Patil</h2>
        <p>Motivation is temporary, but discipline last forever.</p>
      </div>

      <aside>
        <h2>Social Media</h2>

        <article>
          <a href="https://linkedin.com/in/shubhamdesale2003" target={"blank"}>
            <LuLinkedin />
          </a>
          <a href="https://instagram.com/shubham_.desale/" target={"blank"}>
            <AiFillInstagram />
          </a>
          <a href="https://github.com/shubhmdesale2003" target={"blank"}>
            <AiFillGithub />
          </a>
        </article>
      </aside>
      <a href="#home">
        <AiOutlineArrowUp />
      </a>
    </footer>
  );
};

export default Footer;

 