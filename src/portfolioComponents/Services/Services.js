/* eslint-disable linebreak-style */
import React from 'react';
import './Services.css';
import { BiCheck } from 'react-icons/bi';

const Services = () => (
  <section className="app_services" id="servies">
    <h2>Services</h2>
    <div className="servies-container">
      <article className="servies">
        <div className="servies-head">
          <h1>Civil Engineer</h1>
        </div>
        <ul className="servies-list">
          <li>
            <BiCheck className="servies-list-icons" />
            <p>CAD Drafter</p>
          </li>
          <li>
            <BiCheck className="servies-list-icons" />
            <p>Designing Construction Projects</p>
          </li>
          <li>
            <BiCheck className="servies-list-icons" />
            <p>preparing BOQ </p>
          </li>
          <li>
            <BiCheck className="servies-list-icons" />
            <p>Provide Technical Advice</p>
          </li>
          <li>
            <BiCheck className="servies-list-icons" />
            <p>Conduct Quality Control</p>
          </li>
        </ul>
      </article>
      <article className="servies">
        <div className="servies-head">
          <h1>Quantity Surveyor</h1>
        </div>
        <ul className="servies-list">
          <li>
            <BiCheck className="servies-list-icons" />
            <p>Estimating Construction Cost</p>
          </li>
          <li>
            <BiCheck className="servies-list-icons" />
            <p>Analyzing Cost Plan</p>
          </li>
          <li>
            <BiCheck className="servies-list-icons" />
            <p>Monitoring Project budget</p>
          </li>
          <li>
            <BiCheck className="servies-list-icons" />
            <p>Ensure Quality Standard</p>
          </li>
          <li>
            <BiCheck className="servies-list-icons" />
            <p>Tender Documentation</p>
          </li>
        </ul>

      </article>
      <article className="servies">
        <div className="servies-head">
          <h1>Data Collection</h1>
        </div>
        <ul className="servies-list">
          <li>
            <BiCheck className="servies-list-icons" />
            <p>Collection of Data</p>
          </li>
          <li>
            <BiCheck className="servies-list-icons" />
            <p>Online Research</p>
          </li>
          <li>
            <BiCheck className="servies-list-icons" />
            <p>Data Entry</p>
          </li>
          <li>
            <BiCheck className="servies-list-icons" />
            <p>Leadership Data base</p>
          </li>
          <li>
            <BiCheck className="servies-list-icons" />
            <p>Research Static Data</p>
          </li>
        </ul>

      </article>

    </div>
  </section>
);

export default Services;
