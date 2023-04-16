import React from "react";
import s from "./Header.module.css"
import logo from "../../assets/logo.png";
import phone from "../../assets/phone.png";
import basket from "../../assets/basket.png";
const Header = () => {
  return (
    <div className={s.container}>
      <div className={s.burger}>
        
      </div>
      <div className={s.header}>
        <div className={s.header_logo}>
          <img src={logo} alt="" />
        </div>
        <div className={s.header_p}>
          <a href="#">HOME</a>
          <a href="#">MENU</a>
          <a href="#">SHOP</a>
          <a href="#">PAGES</a>
          <a href="#" >BLOCK</a>
          <a href="#">CONTACT</a>
        </div>
        <div className={s.phone}>
          <div className={s.phone_img}>
            <img src={phone} alt="phone" />
            <p>123-456-789</p>
          </div>
          <div className={s.basket}>
            <img src={basket} alt="basket" />
            <p>0- $0.00</p>
          </div>
          </div>
        </div>
    </div>
  );
};

export default Header;

