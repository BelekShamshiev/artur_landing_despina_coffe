import s from "./Best.module.css";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import best_coffee_img from "../../assets/rectangle.png";
import capuchino from "../../assets/capuchino.png";
import makachino from "../../assets/makachino.jpg";
import latte from "../../assets/latte.png";
import { Button } from "antd";
const Best = () => {
  return (
    <div className={s.container}>
      <div className={s.best_coffee}>
        <img src={best_coffee_img} alt="coffee" />
      </div>
      <Swiper
       loop
        spaceBetween={40}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Navigation,Autoplay]}
        className={s.coffee_swiper}
      >
        <SwiperSlide>
          <img className={s.swiper_img} src={capuchino} alt="capuchino" />
        </SwiperSlide>
        <SwiperSlide>
          <img className={s.swiper_img} src={makachino} alt="capuchino" />
        </SwiperSlide>
        <SwiperSlide>
          <img className={s.swiper_img} src={latte} alt="capuchino" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Best;
