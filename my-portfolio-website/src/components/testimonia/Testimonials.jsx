import React from 'react'
import './testimonia.css'
import AVTAR1 from '../../assets/avatar1.jpg'
import AVTAR2 from "../../assets/avatar2.jpg"
import AVTAR3 from "../../assets/avatar3.jpg"
import AVTAR4 from "../../assets/avatar4.png"


const Testimonials = () => {
  return (
    <section id='testimonioals'>
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>

      <div className="container testimonials__container">
        <article className="testimonial">
          <div className="client__avatar">
            <img src={AVTAR1} alt="" />
          </div>
        </article>
      </div>
    </section>
  )
}

export default Testimonials