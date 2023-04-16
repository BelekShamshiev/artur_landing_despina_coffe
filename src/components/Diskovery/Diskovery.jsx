import React from "react";
import s from "./Diskovery.module.css";
import Coffe from "../Coffe/Coffe";
import { Button, Space } from "antd";
import {menu} from "../../constants/menu"
const Diskovery = () => {
    
  return (
    <div className={s.diskovery}>
        <div className={s.diskovery_title}>
            <h1>Discover Menu</h1>
            <p>What Happens Here</p>
        </div>
        <div className={s.menu_coffees}>
        {menu.map(item => (
            <Coffe {...item}/>
        ))}
        <div className={s.btn_disk}>
        </div>
        </div>
    </div>
  );
};

export default Diskovery;