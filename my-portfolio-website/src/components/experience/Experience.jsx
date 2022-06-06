import React from "react";
import "./experience.css";
import { BsFillPatchCheckFill } from "react-icons/bs";

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skiils I Have</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        {/* Create Frontend Part */}
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsFillPatchCheckFill />
              <h4>HTML</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill />
              <h4>CSS</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill />
              <h4>JavaScript</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill />
              <h4>Bootstrap</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill />
              <h4>Java</h4>
              <small className="text-light">Intermediate</small>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill />
              <h4>React</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill />
              <h4>Python</h4>
              <small className="text-light">Intermediate</small>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill />
              <h4>PHP</h4>
              <small className="text-light">Basic</small>
            </article>
          </div>
        </div>
        {/* End of Frontend Part */}

        {/* Start Backend Part */}
        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsFillPatchCheckFill />
              <h4>NodeJS</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill />
              <h4>MongoDB</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill />
              <h4>Django</h4>
              <small className="text-light">Intermediate</small>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill />
              <h4>MySql</h4>
              <small className="text-light">Intermediate</small>
            </article>

            <article className="experience__details">
              <BsFillPatchCheckFill />
              <h4>AngularJS</h4>
              <small className="text-light">Basic</small>
            </article>
          </div>
        </div>
        {/* End Backend Part */}
      </div>
    </section>
  );
};

export default Experience;
