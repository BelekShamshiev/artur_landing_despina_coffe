import s from "./Coffeedespina.module.css"
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import despina_one from "../../assets/despina_one.png"
import despina_two from "../../assets/despina_two.png"
import despina_three from "../../assets/despina_three.png"
import despina_four from "../../assets/despina_four.png"
import despina_five from "../../assets/despina_five.png"
const Coffeedespina = () => {
    return (
        <div className={s.container}>
        <div className={s.despina}>
        <h1 className={s.h_despina}>#coffeedespina</h1>
      </div>
      <div className={s.p_despina}>
        <p className={s.p_despina_p}>
          Enjoyed your stay at Despina? Share your moments with us. Follow us on
          Instagram and use
        </p>
        </div>
        <Swiper
         loop
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          "@0.75": {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          "@1.00": {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          "@1.50": {
            slidesPerView: 5,
            spaceBetween: 60,
          },
        }}
        modules={[Pagination]}
        className={s.coffeedespina}
      >
        <SwiperSlide>
            <img className={s.despina_one_img} src={despina_one} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img className={s.despina_one_img} src={despina_two} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img className={s.despina_one_img} src={despina_three} alt="" />
        </SwiperSlide>        
        <SwiperSlide>
            <img className={s.despina_one_img} src={despina_four} alt="" />
        </SwiperSlide>      
        <SwiperSlide>
            <img className={s.despina_one_img} src={despina_five} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img className={s.despina_one_img} src={despina_five} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img className={s.despina_one_img} src={despina_five} alt="" />
        </SwiperSlide>

      </Swiper>
        </div>
    );
};

export default Coffeedespina;