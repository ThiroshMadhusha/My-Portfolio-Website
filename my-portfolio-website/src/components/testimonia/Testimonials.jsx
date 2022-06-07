import React from "react";
import "./testimonia.css";
import AVTAR1 from "../../assets/avatar1.jpg";
import AVTAR2 from "../../assets/avatar2.jpg";
import AVTAR3 from "../../assets/avatar3.jpg";
import AVTAR4 from "../../assets/avatar4.png";

const Testimonials = () => {
  return (
    <section id="testimonioals">
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>
      <div className="container testimonials__container">
        <article className="testimonial">
          <div className="client__avatar">
            <img src={AVTAR1} alt="Avatar1" />
          </div>
          <h5 className="client__name">Ernest Achiever</h5>
          <small className="client__review">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id mollitia
            porro similique laudantium cupiditate repellat minima voluptatibus
            sit, corrupti inventore dolorem. Pariatur voluptate error maiores?
            Fugiat maxime qui libero!
          </small>
        </article>

        <article className="testimonial">
          <div className="client__avatar">
            <img src={AVTAR2} alt="Avatar1" />
          </div>
          <h5 className="client__name">Ernest Achiever</h5>
          <small className="client__review">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id mollitia
            porro similique laudantium cupiditate repellat minima voluptatibus
            sit, corrupti inventore dolorem. Pariatur voluptate error maiores?
            Fugiat maxime qui libero!
          </small>
        </article>

        <article className="testimonial">
          <div className="client__avatar">
            <img src={AVTAR3} alt="Avatar1" />
          </div>
          <h5 className="client__name">Ernest Achiever</h5>
          <small className="client__review">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id mollitia
            porro similique laudantium cupiditate repellat minima voluptatibus
            sit, corrupti inventore dolorem. Pariatur voluptate error maiores?
            Fugiat maxime qui libero!
          </small>
        </article>
        <article className="testimonial">
          <div className="client__avatar">
            <img src={AVTAR4} alt="Avatar1" />
          </div>
          <h5 className="client__name">Ernest Achiever</h5>
          <small className="client__review">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id mollitia
            porro similique laudantium cupiditate repellat minima voluptatibus
            sit, corrupti inventore dolorem. Pariatur voluptate error maiores?
            Fugiat maxime qui libero!
          </small>
        </article>
      </div>
    </section>
  );
};

export default Testimonials;
