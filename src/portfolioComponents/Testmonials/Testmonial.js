/* eslint-disable linebreak-style */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-undef */
import React from 'react';
import './Testmonial.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Pagination } from 'swiper';
import 'swiper/css/pagination';
import img1 from '../../assets/Home/img/geeret.jpg';
// import img2 from '../../assets/Home/img/marco.JPG';
// import img3 from '../../assets/Home/img/kuma.JPG';
// import img4 from '../../assets/Home/img/matias.JPG';

const clients = [

  {
    Img: img1,
    review: 'It was a great joy again working with Matiyas on this project He deserves every bit of credit for making this project possible. I hope we will be able to connect and work together again in the future!',
    Name: 'Geert D.',
    Work: 'Data Scientist',

  },
  {
    Img: img1,
    review: 'Choosing Tadesse will be an excellent choice as every team needs people who complete their work on time and in a professional manner.',
    Name: 'Marco Vincio',
    Work: 'Full-Stack developer',

  },
  {
    Img: img1,
    review: 'Tadesse is attentive to details and undoubtedly a concise person when it comes to dealing with development and technological issues.',
    Name: 'Kumilachew Getie',
    Work: 'IT Engineer',

  },
  {
    Img: img1,
    review: 'Tadesse showed familiarity with the codebase ,and completed it under the time estimated. I am continuing to work with him on other projects.',
    Name: 'Matias Aguirre',
    Work: 'Software Engineer',
  },
];
function Testmonial() {
  return (

    <div id="testimonial" className="t-main">
      <h2 className="heading">Testmonials</h2>
      <div className="t-heading">
        <div className="blur t-blur1" style={{ background: 'var(--purple)' }} />
        <div className="blur t-blur2" style={{ background: 'skyblue' }} />
      </div>
      <Swiper
          // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        spaceBetween={40}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => (
          <SwiperSlide key={index}>
            <div className="testimonial">
              <img src={client.Img} alt="" />
              <span>{client.review}</span>
              <span>{client.Name}</span>
              <span>
                {client.Work}
                {' '}
              </span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Testmonial;
