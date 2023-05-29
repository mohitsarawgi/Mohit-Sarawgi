import React from 'react';
import CV from '../../Assests/mohit.pdf';
const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} download className="btn">
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Reach out!
      </a>
    </div>
  );
};

export default CTA;
