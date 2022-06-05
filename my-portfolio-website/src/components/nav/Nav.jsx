import React from 'react'
import './nav.css'
import { AiOutlineHome } from 'react-icons/ai'
import { AiOutlineUser } from "react-icons/ai"
import { BiBook } from "react-icons/bi"
import { RiServiceLine } from "react-icons/ri";
import { AiOutlineProject } from "react-icons/ai";
import { RiCustomerServiceFill } from "react-icons/ri";



const Nav = () => {
  return (
    <nav>
      <a href="#home">
        <AiOutlineHome />
      </a>
      <a href="#about">
        <AiOutlineUser />
      </a>
      <a href="#experience">
        <BiBook />
      </a>
      <a href="#services">
        <RiServiceLine />
      </a>
      <a href="#portfolio">
        <AiOutlineProject />
      </a>
      <a href="#contact">
        <RiCustomerServiceFill />
      </a>
    </nav>
  );
}

export default Nav