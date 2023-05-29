import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';
import { SiLeetcode } from 'react-icons/si';
import { SiGeeksforgeeks } from 'react-icons/si';
import { SiCodechef } from 'react-icons/si';
const HeaderSocial = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/mohitsarawgi07/" target="blank">
        <BsLinkedin />
      </a>
      <a href="https://github.com/mohitsarawgi" target="blank">
        <BsGithub />
      </a>
      <a href="https://leetcode.com/Shinobi7/" target="blank">
        <SiLeetcode />
      </a>
      <a href="https://auth.geeksforgeeks.org/user/mohit777" target="blank">
        <SiGeeksforgeeks />
      </a>
      <a href="https://www.codechef.com/users/mohit_0508" target="blank">
        <SiCodechef />
      </a>
    </div>
  );
};

export default HeaderSocial;
