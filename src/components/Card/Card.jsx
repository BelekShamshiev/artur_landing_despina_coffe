import React from "react";
import s from "./Card.module.css"
import { Button, Space } from "antd";
import flavours from "../../assets/girl.png";
import sale from "../../assets/machin.png";
import creat from "../../assets/spon.png";
const Card = () => {
  return (
    <div className={s.container_card}>
      <div className={s.card_all}>
      <div className={s.card_flavour}>
        <img src={flavours} alt="flavours"/>
        <div className={s.flavor_main}>
        <p  className={s.creat_p}>New Coffee Flavours</p>
        <div class="wrapper">
            <a className={s.swiper_btn} href="#">
              <span>read more</span>
            </a>
          </div>
     </div>
      </div>
      <div className={s.card_two}>
      <div className={s.card_creat}>
        <img src={creat} alt="creat" />
      </div>
      <div className={s.card_sale}>
        <img src={sale} alt="sale" />
        <p>This friday  25%  off</p>
      </div>
      </div>
      </div>
    </div>
  );
};

export default Card;
