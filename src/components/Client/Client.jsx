import s from "./Client.module.css"
import down from "../../assets/down.png";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import robert from "../../assets/artur-round.png"
import { Pagination, Scrollbar } from "swiper";
const Client = () => {
  const onAutoplayTimeLeft = (s, time, progress) => {};
  return (
    <div className={s.container_client}>
      <div className={s.client}>
        <h1>What Clients Say</h1>
      </div>
      <div className={s.p_client}>
        <p>1500+ Satisfied Clients</p>
      </div>
      <Swiper
      loop
      pagination={{
        clickable:true
      }}
        scrollbar={{
          hide: true,
        }}
        modules={[Pagination]}
        className={s.client_swiper}
      >
        <SwiperSlide>
        <div className={s.client_photo}>
            <img src={down} alt="" />
          </div>
          <div className={s.client_name}>
            <h1>Alice Williams</h1>
          </div>
          <div className={s.client_profession}>
            <p>Kitchen Manager</p>
          </div>
          <div className={s.client_title}>
            <p>
              Success isn’t really that difficult. There is a significant
              portion of the <br /> population here in North America, that
              actually want and need success 
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={s.client_photo}>
            <img src={down} alt="" />
          </div>
          <div className={s.client_name}>
            <h1>Alice Williams</h1>
          </div>
          <div className={s.client_profession}>
            <p>Kitchen Manager</p>
          </div>
          <div className={s.client_title}>
            <p>
              Success isn’t really that difficult. There is a significant
              portion of the <br /> population here in North America, that
              actually want and need success 
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className={s.client_photo}>
            <img src={down} alt="" />
          </div>
          <div className={s.client_name}>
            <h1>Alice Williams</h1>
          </div>
          <div className={s.client_profession}>
            <p>Kitchen Manager</p>
          </div>
          <div className={s.client_title}>
            <p>
              Success isn’t really that difficult. There is a significant
              portion of the <br /> population here in North America, that
              actually want and need success 
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className={s.client_photo}>
            <img src={robert} alt="" />
          </div>
          <div className={s.client_name}>
            <h1>Artur</h1>
          </div>
          <div className={s.client_profession}>
            <p>the person who checks my assignment</p>
          </div>
          <div className={s.client_title}>
            <p>
            As for me, the layout is shit, but for the first time it will do
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Client;
