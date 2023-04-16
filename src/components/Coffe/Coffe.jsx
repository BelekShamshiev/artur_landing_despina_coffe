import React from "react";
import s from "./Coffe.module.css"
import late from "../../assets/late.png";
const Coffe = ({img , coffeName , price , title}) => {
  return (
    <div className={s.container_coffe}>
      <div className={s.coffe}>
        <div className={s.coffe_img}>
            <img src={img} alt="coffe_img" />
        </div>
        <div>
            <div className={s.coffe_title}>
                <h3>{coffeName}</h3>
                <p>$ {price}</p>
            </div>
            <div className={s.line}>
                --------------------------------------------------------
            </div>
            <div>
                <p>{title}</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Coffe;