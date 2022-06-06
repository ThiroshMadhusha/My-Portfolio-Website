import React from 'react'
import './services.css'
import {BiCheck} from "react-icons/bi"

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container Services__container">
        <article className="services">
          <div className="services__head">
            <h3>Frontend Development</h3>
          </div>
          <ui className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </li>
          </ui>
        </article>
        {/* End Frontend */}
        <article className="services">
          <div className="services__head">
            <h3>Backend Development</h3>
          </div>
          <ui className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </li>
          </ui>
        </article>
        {/* End Backend */}
        <article className="services">
          <div className="services__head">
            <h3>Fulstack Development</h3>
          </div>
          <ui className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </li>
          </ui>
        </article>
        {/* End Fulstac Development */}
      </div>
    </section>
  );
}

export default Services