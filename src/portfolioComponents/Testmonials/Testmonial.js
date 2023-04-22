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
import img2 from '../../assets/Home/img/tibebu.jpg';
import img3 from '../../assets/Home/img/ermi.JPG';

const clients = [

  {
    Img: img1,
    review: 'It was a great joy again working with Matiyas on this project He deserves every bit of credit for making this project possible. I hope we will be able to connect and work together again in the future!',
    Name: 'Geert D.',
    Work: 'Data Scientist',

  },
  {
    Img: img2,
    review: 'Working with Matiyas was wonderful, he is a great communicator, a fast worker, and delivered the project requirements ahead of time - his strong professional and technical skills really shone through.',
    Name: 'Tibebu Eneyew',
    Work: 'Full-Stack developer',

  },
  {
    Img: img3,
    review: 'Matiyas exceeded my expectations! His drafting skill is exactly as I requested and delivered in a timely manner. Excellent communication skills. I will certainly hire Matiyas for future work.',
    Name: 'Ermias Sisay',
    Work: 'PhD. Candidate',

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
