import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/img1.png";
import IMG2 from "../../assets/img2.png";
import IMG3 from "../../assets/img3.png";
import IMG4 from "../../assets/img4.png";
import IMG5 from "../../assets/img5.png";
import IMG6 from "../../assets/img6.png";

const data = [
  {
    id: 1,
    image: IMG2,
    title: "Online Electro Grid Management System",
    subtitle: "Java Maven Project",
    github: "https://github.com/IT20146238/ElectroGridSystem",
    demo: "https://dribbble.com/shots/17400065/attachments/12525929?mode=media",
  },
  {
    id: 2,
    image: IMG1,
    title: "Ice Cream Factory Management System",
    subtitle: "Java Maven Project",
    github:
      "https://github.com/IT20146238/KaleyIceCream/tree/main/inventory_app",
    demo: "https://dribbble.com/shots/6013122-Ice-Cream-Island",
  },
  {
    id: 3,
    image: IMG5,
    title: "Online Bus Ticket Management System",
    subtitle: "Java (OOP) Project",
    github: "https://github.com/IT20146238/OOPProject",
    demo: "https://dribbble.com/shots/4880802-Banner-ad",
  },
  {
    id: 4,
    image: IMG4,
    title: "Tea Factory Management System",
    subtitle: "Python Project",
    github: "https://github.com/SLIIT-FacultyOfComputing/itp_project-g09",
    demo: "https://dribbble.com/shots/17321299-Coffee-Galaxy",
  },
  {
    id: 5,
    image: IMG3,
    title: "Online Aquarium Fish Selling App",
    subtitle: "Android Studio with Java Project",
    github: "https://github.com/IT20005108/FishRep",
    demo: "https://dribbble.com/shots/7695501-Buy-Aquarium-Fishes-Online-Ui-Concept",
  },
  {
    id: 6,
    image: IMG6,
    title: "Online Shopping Management System",
    subtitle: "HTML, CSS, JavaScript & PHP Project",
    github: "https://github.com/IT20146238/OnlineShoppingManagementSystem",
    demo: "https://dribbble.com/shots/16790287-Online-store-SHINING",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, subtitle, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h2>{title}</h2>
              <h5>{subtitle}</h5>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="_blank">
                  GitHub
                </a>
                <a href={demo} className="btn btn-primary" target="_blank">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
