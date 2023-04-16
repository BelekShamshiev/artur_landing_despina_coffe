import s from "./Hero.module.css";
import coffe from "../../assets/coffee.png";
import milk from "../../assets/milk.png";
import coctail from "../../assets/cocktail.png";
import bewerages from "../../assets/bewerages.png";
import tea from "../../assets/tea.png";
import cake from "../../assets/cake.png";
import bob from "../../assets/bob.png";
import drink from "../../assets/drink.png";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
const Hero = () => {
  return (
    <div className={s.container}>
      <div className={s.low_container}>
        <div className={s.low}>


       <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          "@0.00": {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          "@0.75": {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          "@1.00": {
            slidesPerView: 4,
            spaceBetween: 50,
          },
          "@1.50": {
            slidesPerView: 6,
            spaceBetween: 50,
          },
        }}
        className="mySwiper"
      >
        <SwiperSlide>
        <img className={s.coffe} src={coffe} alt="coffe"></img> <p>Coffe</p>
        </SwiperSlide>
        <SwiperSlide>
        <img className={s.coffe} src={milk} alt="milk" /> <p>Milk</p>
        </SwiperSlide>
        <SwiperSlide>
        <img className={s.coffe} src={coctail} alt="coctail" /> <p>Coctail</p>
        </SwiperSlide>
        <SwiperSlide>
        <img className={s.coffe} src={bewerages} alt="bewerages" /> <p>Bewerages</p>
        </SwiperSlide>
        <SwiperSlide>
        <img className={s.coffe} src={tea} alt="tea" /> <p>Tea</p>
        </SwiperSlide>
        <SwiperSlide>
        <img className={s.coffe} src={cake} alt="cake" /> <p>Cake</p>
        </SwiperSlide>
      </Swiper>
        </div>
      </div>

      <div className={s.best}>
        <div className={s.line}></div>
        <img className={s.bob} src={bob} alt="bob" />
        <hr className={s.line_1} />
        <div className={s.dev}>
          <h1 className={s.h1_best}>BEST QUALITY</h1>
          <p className={s.p_best}>ESTABLISHED IN 1991</p>
          <h1 className={s.h1_special}>SPECIAL COFFEE</h1>
          <p className={s.p_special}>BEANS</p>
        </div>
        <div className={s.main}></div>
        <hr />
        <img className={s.drink} src={drink} alt="" />
      </div>
    </div>
  );
};

export default Hero;
