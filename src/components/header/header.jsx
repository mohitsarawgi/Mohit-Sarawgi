import React from 'react';
import './header.css';
import HeaderSocial from './headersocial';

import ME from 'file:///C:/Users/mohit/mohit-portfolio/src/Assests/images/f.png';

import CTA from './cta';
const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello . . I'm</h5>
        <h1>MOHIT SARAWGI</h1>
        <h5 className="text-light"> "Created by code, now writing code :)"</h5>
        <CTA />
        <HeaderSocial />
        <div className="me">
          <img src={ME} alt="xyz" />
        </div>
      </div>
    </header>
  );
};

export default Header;
