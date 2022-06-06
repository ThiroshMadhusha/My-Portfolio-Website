import React from "react";
import "./portfolio.css";
import IMG1 from '../../assets/img1.png'
import IMG2 from "../../assets/img2.png";
import IMG3 from "../../assets/img3.png";
import IMG4 from "../../assets/img4.png";
import IMG5 from "../../assets/img5.png";
import IMG6 from "../../assets/img6.png";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG2} alt="" />
          </div>
          <h2>Online Electro Grid Management System</h2>
          <h5>Java Maven Project</h5>
          <div className="portfolio__item-cta">
            {" "}
            <a href="https://github.com" className="btn" target="_blank">
              GitHub
            </a>
            <a
              href="https://dribbble.com/Alien_pixels"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h2>Ice Cream Factory Management System</h2>
          <h5>MERN Stack Project</h5>
          <div className="portfolio__item-cta">
            <a href="https://github.com" className="btn" target="_blank">
              GitHub
            </a>
            <a
              href="https://dribbble.com/Alien_pixels"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG5} alt="" />
          </div>
          <h2>Online Bus Ticket Management System</h2>
          <h5>Java (OOP) Project</h5>
          <div className="portfolio__item-cta">
            <a href="https://github.com" className="btn" target="_blank">
              GitHub
            </a>
            <a
              href="https://dribbble.com/Alien_pixels"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG4} alt="" />
          </div>
          <h2>Tea Factory Management System</h2>
          <h5>Python Project</h5>
          <div className="portfolio__item-cta">
            <a href="https://github.com" className="btn" target="_blank">
              GitHub
            </a>
            <a
              href="https://dribbble.com/Alien_pixels"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG3} alt="" />
          </div>
          <h2>Online Aquarium Fish Selling App</h2>
          <h5>Android Studio with Java Project</h5>
          <div className="portfolio__item-cta">
            <a href="https://github.com" className="btn" target="_blank">
              GitHub
            </a>
            <a
              href="https://dribbble.com/Alien_pixels"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG6} alt="" />
          </div>
          <h2>Online Shopping Management System</h2>
          <h5>HTML, CSS, JavaScript & PHP Project</h5>
          <div className="portfolio__item-cta">
            {" "}
            <a href="https://github.com" className="btn" target="_blank">
              GitHub
            </a>
            <a
              href="https://dribbble.com/Alien_pixels"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
