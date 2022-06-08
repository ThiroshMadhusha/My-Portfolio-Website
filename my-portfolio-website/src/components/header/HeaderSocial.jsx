import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { BsStackOverflow } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";

const HeaderSocial = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/thirosh-madhusha/" target="_blank">
        <BsLinkedin />
      </a>
      <a href="https://github.com/IT20146238" target="_blank">
        <FaGithub />
      </a>
      <a
        href="https://stackoverflow.com/users/16248685/thirosh-madhusha"
        target="_blank"
      >
        <BsStackOverflow />
      </a>
      <a href="https://twitter.com/ThiroshMadhusha" target="_blank">
        <BsTwitter />
      </a>
    </div>
  );
};

export default HeaderSocial;
