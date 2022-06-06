// rafce command
import React from 'react'
import './about.css'
import ME from '../../assets/png1.png'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from "react-icons/fi";
import { AiOutlineProject } from "react-icons/ai";


const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me </h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="AboutImage"></img>
          </div>
        </div>
        <div className="about__content">
          
        </div>
      </div>
    </section>
  );
}

export default About