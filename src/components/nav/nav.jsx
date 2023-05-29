/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './nav.css';

import { ImHome } from 'react-icons/im';
import { FaUser } from 'react-icons/fa';
import { FcIdea } from 'react-icons/fc';
import { BsStars } from 'react-icons/bs';
import { TbMessageShare } from 'react-icons/tb';

import { useState } from 'react';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');

  return (
    <nav>
      <a
        href="#"
        onClick={() => setActiveNav('#')}
        className={activeNav === '#' ? 'active' : ''}
      >
        <ImHome />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav('#about')}
        className={activeNav === '#about' ? 'active' : ''}
      >
        <FaUser />
      </a>

      <a
        href="#projects"
        onClick={() => setActiveNav('#projects')}
        className={activeNav === '#projects' ? 'active' : ''}
      >
        <FcIdea />
      </a>

      <a
        href="#skills"
        onClick={() => setActiveNav('#skills')}
        className={activeNav === '#skills' ? 'active' : ''}
      >
        <BsStars />
      </a>

      <a
        href="#contact"
        onClick={() => setActiveNav('#contact')}
        className={activeNav === '#contact' ? 'active' : ''}
      >
        <TbMessageShare />
      </a>
    </nav>
  );
};

export default Nav;
