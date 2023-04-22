/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable react/button-has-type */
/* eslint-disable max-len */
import React from 'react';
import Typical from 'react-typical';
import './Home.css';

function Home() {
  return (
    <div>
      <div id="home" className="profile-container">
        <div className="profile-parent">
          <div className="profile-detail">
            <div className="colz">
              <div className="social-media">
                <ul className="element">
                  <li><a href="https://www.facebook.com/matiyas.yenew?mibextid=ZbWKwL" className="fa fa-facebook" target="_blank" rel="noreferrer" /></li>
                  <li><a href="https://www.linkedin.com/in/matiyas-yenew-m-aba414197" className="fa fa-linkedin" target="_blank" rel="noreferrer" /></li>
                  <li><a href="https://twitter.com/MatiyasYenew" className="fa fa-twitter" target="_blank" rel="noreferrer" /></li>
                  <li><a href="https://instagram.com/matiyas_yenew?igshid=ZDdkNTZiNTM=" className="fa fa-instagram" target="_blank" rel="noreferrer" /></li>
                </ul>
              </div>
            </div>
            <div className="profile-detail-name">
              <span className="primary-text">

                Hello, I&apos;m
                {' '}
                <span className="highlighted-text">Matiyas Yenew</span>
              </span>
            </div>
            <div className="profile-detail-role">
              <span className="primary-text" />
              <h2>
                <Typical
                  loop={Infinity}
                  steps={[
                    'Civil Engineer',
                    1000,
                    'Quantity Surveyor',
                    1000,
                    'Data Scrapper',
                    1000,
                    'CAD Drafter',
                    1000,
                    'Researcher',
                    1000,
                  ]}
                />
              </h2>
              <div className="profile-role-tagline">
                <p className="card-text">
                  Hi, if you are looking for a skilled and punctual Civil engineer, Quantity Surveyor and Data Collector then you’re reviewing the right profile. Have faith in me and give me a chance to make your project successful!
                </p>
              </div>
            </div>
          </div>
          <div className="profile-picture">
            <div className="profile-picture-background"> </div>
          </div>
        </div>
      </div>
    </div>
  );
}
/* eslint-enable max-len */
export default Home;
