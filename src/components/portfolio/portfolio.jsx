/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './portfolio.css';
import IMG1 from '../../Assests/elms.png';
import IMG2 from '../../Assests/bookshare.png';
import IMG3 from '../../Assests/virtualschool.jpg';
import IMG4 from '../../Assests/spidykill.png';
import IMG5 from '../../Assests/zomzee.png';
import IMG6 from '../../Assests/periodic.png';
import IMG7 from '../../Assests/solarsystem.png';
import IMG8 from '../../Assests/neutron.png';
import IMG9 from '../../Assests/portfolio.png';

const Portfolio = () => {
  return (
    <section id="projects">
      <h5>My recent Works</h5>
      <h2>Projects</h2>
      <div className="container portfolio__container">
        <article className="portfolio_items">
          <div className="portfolio_items-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>
            Faculty Leave Management system
            <h5>Website </h5> <h5>php , mysql , bootstrap</h5>
          </h3>
          <div className="portfolio_items-cta">
            <a
              href="https://github.com/mohitsarawgi/Leave-Authorization-system"
              className="btn"
            >
              Github
            </a>
            {/* <a href="#" className="btn btn-primary">
              Live Demo
            </a> */}
          </div>
        </article>

        <article className="portfolio_items">
          <div className="portfolio_items-image">
            <img src={IMG2} alt="" />
          </div>
          <h3>
            BookShare
            <h5>E-commerce Website </h5> <h5>react.js, mongo-db, node-js </h5>
          </h3>
          <div className="portfolio_items-cta">
            <a href="https://github.com/mohitsarawg8" className="btn">
              Github
            </a>
            {/* <a href="#" className="btn btn-primary">
              Live Demo
            </a> */}
          </div>
        </article>
        <article className="portfolio_items">
          <div className="portfolio_items-image">
            <img src={IMG9} alt="" />
          </div>
          <h3>
            This Portfolio :)
            <h5>Website</h5> <h5>Reactjs, Nodejs, Javascript</h5>
          </h3>
          <div className="portfolio_items-cta">
            <a href="https://github.com/mohitsarawgi/portfolio" className="btn">
              Github
            </a>
          </div>
        </article>

        <article className="portfolio_items">
          <div className="portfolio_items-image">
            <img src={IMG3} alt="" />
          </div>
          <h3>
            Virtual School
            <h5>Virtual Reality</h5>{' '}
            <h5>C#, unity-3d, Vuforiaengine, google vr box </h5>
          </h3>
          <div className="portfolio_items-cta">
            <a
              href="https://github.com/mohitsarawgi/Virtual_school"
              className="btn"
            >
              Github
            </a>
            <a href="https://youtu.be/1jUgh8JW-jE" className="btn btn-primary">
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio_items">
          <div className="portfolio_items-image">
            <img src={IMG4} alt="" />
          </div>
          <h3>
            Spidy Kill
            <h5>Virtual Reality Game</h5>{' '}
            <h5>C#, unity-3d, Vuforiaengine, google vr box </h5>
          </h3>
          <div className="portfolio_items-cta">
            <a
              href="https://drive.google.com/file/d/1wi_Ttj1w_N-vQz4kX0c1GKBVDPvFeQD2/view?usp=share_link"
              className="btn"
            >
              Source Code
            </a>
            <a href="https://youtu.be/p_Obhze2JUA" className="btn btn-primary">
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio_items">
          <div className="portfolio_items-image">
            <img src={IMG5} alt="" />
          </div>
          <h3>
            Zombee Apocalypse
            <h5>3D Game , web Based</h5> <h5>C#, unity-3d, Unity Assests</h5>
          </h3>
          <div className="portfolio_items-cta">
            <a
              href="https://drive.google.com/file/d/1DaZwLy851C23eyVw3jrh7F6H5Mbj6zUk/view?usp=share_link"
              className="btn"
            >
              Source Code
            </a>
            <a href="https://youtu.be/rzYHd0_5KHI" className="btn btn-primary">
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio_items">
          <div className="portfolio_items-image">
            <img src={IMG6} alt="" />
          </div>
          <h3>
            Periodic Table
            <h5>Augmented Model</h5> <h5>C#, unity-3d</h5>
          </h3>
          <div className="portfolio_items-cta">
            <a
              href="https://drive.google.com/file/d/1iBmDwJXfB9NhUO7EqgBT68C97JCop3ew/view?usp=share_link"
              className="btn"
            >
              Source Code
            </a>
            <a href="https://youtu.be/F9sumHe6X60" className="btn btn-primary">
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio_items">
          <div className="portfolio_items-image">
            <img src={IMG7} alt="" />
          </div>
          <h3>
            Solar system
            <h5>Augmented Model</h5> <h5>C#, unity-3d</h5>
          </h3>
          <div className="portfolio_items-cta">
            <a
              href="https://drive.google.com/file/d/1XB10Tk3ddW9aM4Ox9aNISJJItuSrIyzF/view?usp=share_link"
              className="btn"
            >
              Source Code
            </a>
            <a
              href="https://youtube.com/shorts/2OlkFKWpnfQ"
              className="btn btn-primary"
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio_items">
          <div className="portfolio_items-image">
            <img src={IMG8} alt="" />
          </div>
          <h3>
            Discovery of Neutrons
            <h5>Augmented Model</h5> <h5>C#, unity-3d</h5>
          </h3>
          <div className="portfolio_items-cta">
            <a
              href="https://drive.google.com/file/d/118GnmPFFvzsHjoQ7bLRrR9n61_W4Ejm8/view?usp=share_link"
              className="btn"
            >
              Source Code
            </a>
            <a
              href="https://youtube.com/shorts/scwXJcbi5lw"
              className="btn btn-primary"
            >
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
