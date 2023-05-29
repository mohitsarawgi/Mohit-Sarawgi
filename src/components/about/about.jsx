import React from 'react';
import './about.css';
import ME from '../../Assests/images/main.png';
const About = () => {
  return (
    <section id="about">
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About_Image" />
          </div>
        </div>
        <p>
          I'm currently pursuing B.Tech in Artificial Intelligence and Machine
          Learning from Gyan Ganga Institute of Technology and Sciences in
          Madhya Pradesh, Jabalpur. I have expertise in Machine Learning, data
          structures and algorithms, full-stack development, and
          Augmented/Virtual Reality.
        </p>
      </div>
    </section>
  );
};

export default About;
