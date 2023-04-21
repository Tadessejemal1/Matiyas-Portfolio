/* eslint-disable linebreak-style */
import React from 'react';
import IMG3 from '../../assets/Home/img/Image-.JPG';
import IMG1 from '../../assets/Home/img/Image--.JPG';
import './Portfolios.css';

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Villa Floor Plan',
    Citation: 'https://www.researchgate.net/publication/357509918_Performance_Analysis_of_Hybrid_Beamforming_Techniques_in_Large_MU_MIMO_Systems',
    demo: 'https://res.cloudinary.com/upwork-fp/image/upload/c_scale,w_1000/v1671890989/profile/portfolio/1342780576422658048/sg2xycraauucnqwom1q4.jpg',
  },
  {
    id: 2,
    image: 'https://www.upwork.com/att/download/portfolio/persons/uid/1342780576422658048/profile/projects/files/88d15b07-0bec-4fb6-89dd-3b5b02b7dd8d',
    title: 'Residential House Design',
    Citation: 'https://www.researchgate.net/publication/357509918_Performance_Analysis_of_Hybrid_Beamforming_Techniques_in_Large_MU_MIMO_Systems',
    demo: 'https://www.upwork.com/att/download/portfolio/persons/uid/1342780576422658048/profile/projects/files/88d15b07-0bec-4fb6-89dd-3b5b02b7dd8d',

  },
  {
    id: 3,
    image: IMG3,
    title: '3D residential house by using Auto cad.',
    Citation: 'https://www.researchgate.net/publication/357509918_Performance_Analysis_of_Hybrid_Beamforming_Techniques_in_Large_MU_MIMO_Systems',
    demo: 'https://www.upwork.com/att/download/portfolio/persons/uid/1342780576422658048/profile/projects/files/d27d347b-6752-4d84-be83-4670c172b367',

  },
  {
    id: 4,
    image: 'https://www.upwork.com/att/download/portfolio/persons/uid/1342780576422658048/profile/projects/files/8b84f3b0-b8f6-4b5c-a22f-ffefc792b2fe',
    title: 'Data Scraping',
    Citation: 'https://www.researchgate.net/publication/357509918_Performance_Analysis_of_Hybrid_Beamforming_Techniques_in_Large_MU_MIMO_Systems',
    demo: 'https://www.upwork.com/att/download/portfolio/persons/uid/1342780576422658048/profile/projects/files/8b84f3b0-b8f6-4b5c-a22f-ffefc792b2fe',

  },
  {
    id: 5,
    image: 'https://www.upwork.com/att/download/portfolio/persons/uid/1497539725159186432/profile/projects/files/ee9f0a28-e8db-4f17-8e9d-de8d305500dc',
    title: 'Budget App',
    Citation: 'https://www.researchgate.net/publication/357509918_Performance_Analysis_of_Hybrid_Beamforming_Techniques_in_Large_MU_MIMO_Systems',
    demo: 'https://www.upwork.com/att/download/portfolio/persons/uid/1497539725159186432/profile/projects/files/ee9f0a28-e8db-4f17-8e9d-de8d305500dc',

  },
];
const Portfolios = () => (
  <div id="portfolios">
    <h2>My Recent Works</h2>
    <h3>Portfolio</h3>

    <div className="portfolio-container">
      {
              data.map(({
                id, image, title, Citation, demo,
              }) => (
                <article key={id} className="portfolio-item">
                  <div className="portfolio-item-image">
                    <img src={image} alt={title} />
                  </div>
                  <p>{title}</p>
                  <div className="portfolio-item-cta">
                    <a href={Citation} className="btn" target="_blank" rel="noreferrer">Citation</a>
                    <a href={demo} className="btn" target="_blank" rel="noreferrer">Live Demo</a>
                  </div>
                </article>
              ))
            }
    </div>
  </div>
);

export default Portfolios;
