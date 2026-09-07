import React from "react";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import "../Styles/projects.scss";

import project from "../assets/blog.png";
import portfolio from "../assets/portfolioME.png";

const Project = () => {
  return (
    <div id="projects">
      <h2>Projects</h2>

      <section>
        <article>
          <Carousel
            showArrows={false}
            showIndicators={false}
            showStatus={false}
            showThumbs={false}
            interval={2000}
            infiniteLoop={true}
            autoPlay={true}
            stopOnHover={false}
          >
            {/* Portfolio */}
            <div className="projectItem">
              <img src={portfolio} alt="Personal Portfolio" />

              <aside>
                <h3>Personal Portfolio</h3>

                <p>
                  Responsive portfolio website built with React.js and Sass.
                </p>

                <a
                  href="https://shubham-desale.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Demo
                </a>

                {/* <a
                  href="YOUR_GITHUB_LINK"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a> */}
              </aside>
            </div>

            {/* Blog */}
            <div className="projectItem">
              <img src={project} alt="MERN Blog" />

              <aside>
                <h3>MERN Blog</h3>

                <p>
                  React.js, Sass, Node.js, Express.js, MongoDB, Mongoose,
                  Cloudinary
                </p>

                <a
                  href="https://client-sepia-iota.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Demo
                </a>

                {/* <a
                  href="YOUR_GITHUB_LINK"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a> */}
              </aside>
            </div>
          </Carousel>
        </article>
      </section>
    </div>
  );
};

export default Project;
