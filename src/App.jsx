// import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css'; // Swiper의 CSS 파일을 가져옵니다.
import 'swiper/css/effect-coverflow'; // Swiper의 Coverflow 효과 CSS 파일을 가져옵니다.
import 'swiper/css/pagination'; // Swiper의 페이지네이션 CSS 파일을 가져옵니다.
import 'swiper/css/navigation'; // Swiper의 네비게이션 버튼 CSS 파일을 가져옵니다.
import './index.css' // 사용자 정의 CSS 파일을 가져옵니다.

import { EffectCoverflow, Pagination, Navigation } from 'swiper'; // Swiper 라이브러리의 효과, 페이지네이션, 네비게이션을 가져옵니다.
import slide_image_1 from "./assets/images/img_1.jpg"; // 이미지 파일을 가져옵니다.
import slide_image_2 from "./assets/images/img_2.jpg";
import slide_image_3 from "./assets/images/img_3.jpg";
import slide_image_4 from "./assets/images/img_4.jpg";
import slide_image_5 from "./assets/images/img_5.jpg";
import slide_image_6 from "./assets/images/img_6.jpg";
import slide_image_7 from "./assets/images/img_7.jpg";

const App = () => {
  return (
    <div className='container'>
      <h1 className='heading'>Flower Gallery</h1>
      <Swiper
        effect={'coverFlow'} // 슬라이더의 효과로 Coverflow를 사용합니다.
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }} // 페이지네이션을 설정합니다.
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }} // 네비게이션 버튼을 설정합니다.
        modules={[EffectCoverflow, Pagination, Navigation]} // Swiper 모듈을 사용합니다.
        className='swiper_container'
      >
        <SwiperSlide>
          <img src={slide_image_1} alt='slide_image' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_2} alt='slide_image' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_3} alt='slide_image' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_4} alt='slide_image' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_5} alt='slide_image' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_6} alt='slide_image' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_7} alt='slide_image' />
        </SwiperSlide>

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
};

export default App;
