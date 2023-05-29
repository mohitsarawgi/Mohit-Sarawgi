import React from 'react';
import './services.css';
import { SiPython } from 'react-icons/si';
import { TbBrandCpp } from 'react-icons/tb';
import { GrMysql } from 'react-icons/gr';
import { FaReact } from 'react-icons/fa';
import { TbBinaryTree } from 'react-icons/tb';
import { GiArtificialIntelligence } from 'react-icons/gi';
import { GiVrHeadset } from 'react-icons/gi';
import { TbAugmentedReality2 } from 'react-icons/tb';
import { FaNodeJs } from 'react-icons/fa';
const Services = () => {
  return (
    <section id="skills">
      <h2>Skills</h2>
      <div className="container services__container">
        <article className="service">
          <ul className="service__list">
            <li>
              <p>
                <TbBrandCpp /> C++
              </p>
            </li>

            <li>
              <p>
                <SiPython /> Python
              </p>
            </li>

            <li>
              <p>
                <GiArtificialIntelligence /> Machine Learning
              </p>
            </li>

            <li>
              <p>
                <GrMysql /> Mysql
              </p>
            </li>
            <li>
              <p>
                <FaReact /> React.js
              </p>
            </li>
            <li>
              <p>
                <FaNodeJs /> Node.js
              </p>
            </li>
            <li>
              <p>
                <TbAugmentedReality2 />
                Augmented Reality
              </p>
            </li>

            <li>
              <p>
                <GiVrHeadset /> Virtual Reality
              </p>
            </li>

            <li>
              <p>
                <TbBinaryTree /> Data Structure And Algorithms
              </p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
