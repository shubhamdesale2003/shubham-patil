import React from "react";
import m2 from "../assets/m2 (3).png";
import "../Styles/home.scss";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { BsArrowUpRight, BsChevronDown } from "react-icons/bs";
const Home = () => {
  return (
    <div id="home">
      <section>
        <div>
          <motion.h1
            initial={{
              x: -100,
              opacity: 0,
            }}
            whileInView={{
              x: 0,
              opacity: 1,
            }}
          >
            Hi, I Am <br /> Shubham Patil
          </motion.h1>
          <Typewriter
            options={{
              strings: ["A Developer", "A Designer", "A Student"],
              autoStart: true,
              loop: true,
              cursor: "",
              wrapperClassName: "typewriterpara",
            }}
          />
          <div>
            <a href="mailto:shubhamhanumantpatil@gmail.com">Hire Me</a>
            <a href="#projects">
              Projects <BsArrowUpRight />
            </a>
          </div>
        </div>
      </section>
      <section>
        <img src={m2} alt="shubham_pic" />
      </section>
    </div>
  );
};

export default Home;
