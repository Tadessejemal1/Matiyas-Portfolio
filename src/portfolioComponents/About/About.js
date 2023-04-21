/* eslint-disable linebreak-style */
/* eslint-disable max-len */
import React from 'react';
import './About.css';
import { FaAward } from 'react-icons/fa';
import { VscFolderLibrary } from 'react-icons/vsc';
import Profile from '../../assets/Home/profile2.jpg';

function About() {
  return (
    <div id="about" className="About-main">
      <div className="about">
        <div className="container">
          <h2 className="about-heading">About Me</h2>
          <h4 className="about-heading2">
            I&apos;M Matiyas Yenew
            <span className="about-span">Civil Engineer | Quantity Surveyor | Data Collector</span>
          </h4>
          <div className="about-content">
            <div className="about-me">
              <div className="about-image">
                <img src={Profile} alt="profiles" />
              </div>
            </div>
            <div className="right">
              <div className="about-cards">
                <article className="about-card">
                  <FaAward className="about-icon" />
                  <h5>Experience</h5>
                  <small>3+ Years Working</small>
                </article>
                <article className="about-card">
                  <VscFolderLibrary className="about-icon" />
                  <h5>Project</h5>
                  <small>20+</small>
                </article>
              </div>
              <div className="about-text">
                <p>
                  Hello I am a System Engineer | Academic Writing | Latex Expert! I can do anything related to my profession and I can provide technical reviews and assessments of networking, Space communication, Secure Communication, and cyber defense technology development If
                  you like what you see and have a project you need coded, don&apos;t
                  hesitate to contact me.
                </p>
                <a href="#contact" className="btn btn-primary">Let&apos;s Talk</a>
              </div>
            </div>
          </div>
        </div>
        <div className="container-info">
          <section id="skill-section">
            <div className="header skill-head">
              <h2>
                My
                <span> Skills</span>
              </h2>
              <p>Here is my skills to represent my Expertise</p>
            </div>
            <div className="skill-main">
              <div className="skill-bar">
                <div className="info">
                  <p>AutoCAD Civil 3D</p>
                  <p>97%</p>
                </div>
                <div className="bar">
                  <span className="html" />
                </div>
              </div>
              <div className="skill-bar">
                <div className="info">
                  <p>ArchiCAD</p>
                  <p>98%</p>
                </div>
                <div className="bar">
                  <span className="css" />
                </div>
              </div>
              <div className="skill-bar">
                <div className="info">
                  <p>SAP2000</p>
                  <p>90%</p>
                </div>
                <div className="bar">
                  <span className="javascript" />
                </div>
              </div>
              <div className="skill-bar">
                <div className="info">
                  <p>Revit</p>
                  <p>95%</p>
                </div>
                <div className="bar">
                  <span className="bootstrap" />
                </div>
              </div>
              <div className="skill-bar">
                <div className="info">
                  <p>STAAD Pro</p>
                  <p>92%</p>
                </div>
                <div className="bar">
                  <span className="react" />
                </div>
              </div>
              <div className="skill-bar">
                <div className="info">
                  <p>Proteus PCB</p>
                  <p>90%</p>
                </div>
                <div className="bar">
                  <span className="ruby" />
                </div>
              </div>
              <div className="skill-bar">
                <div className="info">
                  <p>FEC coding</p>
                  <p>92%</p>
                </div>
                <div className="bar">
                  <span className="rails" />
                </div>
              </div>
              <div className="skill-bar">
                <div className="info">
                  <p>GIS</p>
                  <p>93%</p>
                </div>
                <div className="bar">
                  <span className="postgressql" />
                </div>
              </div>
            </div>
          </section>
          <div className="sour" />
          <h2 className="qualification">Qualification</h2>
        </div>
        <div className="row">
          <div className="education">
            <h3 className="title">Education</h3>
            <div className="row">
              <div className="timeline-box">
                <div className="timeline-shadow">
                  <div className="timeline-item">
                    <div className="circle-dot" />
                    <h3 className="timeline-date">
                      <i className="fa fa-calendar"> 2013</i>
                    </h3>
                    <h4 className="timeline-title">Degree</h4>
                    <p className="timeline-text">
                      I graduated from Adama Science and Technology University with a degree in Civil Engineering.
                    </p>
                  </div>
                  <div className="timeline-item">
                    <div className="circle-dot" />
                    <h3 className="timeline-date">
                      <i className="fa fa-calendar"> 2017 - 2019</i>
                    </h3>
                    <h4 className="timeline-title">Master</h4>
                    <p className="timeline-text">
                      I graduated with an Master of Science (MS), Civil engineering from Indian Institute of Technology (IIT) Roorkee.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="experience">
            <h3 className="title">Experience</h3>
            <div className="row">
              <div className="timeline-box">
                <div className="timeline-shadow">
                  <div className="timeline-item">
                    <div className="circle-dot" />
                    <h3 className="timeline-date">
                      <i className="fa fa-calendar"> 2013 - 2014</i>
                    </h3>
                    <h4 className="timeline-title">Design and Supervision Engineer</h4>
                    <p className="timeline-text">
                      {' '}
                      I have one year&apos;s of work experience in the position of Supervision Engineer from Injebara Town Municipality.
                      <br />
                    </p>
                  </div>
                  <div className="timeline-item">
                    <div className="circle-dot" />
                    <h3 className="timeline-date">
                      <i className="fa fa-calendar"> 2014 - 2015</i>
                    </h3>
                    <h4 className="timeline-title">Assistance Lecturer</h4>
                    <p className="timeline-text">
                      {' '}
                      I have one year&apos;s of work experience in the position of Assistant Lecturer from Debre Tabor University in the Department of Civil Engineering.
                      <br />
                    </p>
                  </div>
                  <div className="timeline-item">
                    <div className="circle-dot" />
                    <h3 className="timeline-date">
                      <i className="fa fa-calendar"> 2019 - present</i>
                    </h3>
                    <h4 className="timeline-title">Lecturer</h4>
                    <p className="timeline-text">
                      I have four year&apos;s of work experience as a Lecturer at Debre Tabor University in the Civil Engineering Department.
                      {' '}
                      <br />
                    </p>
                  </div>
                  <div className="timeline-item">
                    <div className="circle-dot" />
                    <h3 className="timeline-date">
                      <i className="fa fa-calendar"> 2021 - Present</i>
                    </h3>
                    <h4 className="timeline-title"> CAD Drafter | Quantity Surveyor | Online Research</h4>
                    <p className="timeline-text">
                      I have two years of work experience as a freelancer on UPWork.
                      {' '}
                      <br />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
