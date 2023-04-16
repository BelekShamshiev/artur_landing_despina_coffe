import React from 'react';
import "./Burger.css"
import logo from "../../assets/logo.png";
import phone from "../../assets/phone.png";
import basket from "../../assets/basket.png";
const Burger = () => {
    return (
        <div className='container'>
  <section class="top-nav">
    <div className="logo">
      <img src={logo} alt="" />
    </div>
    <input id="menu-toggle" type="checkbox" />
    <label className='menu-button-container' for="menu-toggle">
    <div className='menu-button'></div>
  </label>
    <ul className="menu">
      <a href='home'>HOME</a>
      <a href='menu'>MENU</a>
      <a href='shop'>SHOP</a>
      <a href='pages'>PAGES</a>
      <a href='block'>BLOCK</a>
      <a href='contact'> CONTACT</a>
      <a href='number'>123-456-789</a>
      <a href='basket'>0- $0.00</a>
    </ul>

  </section>


        </div>
    );
};

export default Burger;