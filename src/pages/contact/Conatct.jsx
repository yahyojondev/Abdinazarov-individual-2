import React from "react";
import { NavLink } from "react-router-dom";

const Conatct = () => {
  return (
    <div>
      <div className="container">
        <div className="brand__wrapper">
          <div className="brand__wrapper__left">
            <ul className="brand__wrapper__left__list">
              <li>
                <NavLink to={"/nazariya"}>
                  1-dars M:Pedagogik faoliyatning mohiyati va qadriyat
                  xususiyatlari.
                </NavLink>
              </li>
              <li>
                <NavLink to={"/nazariyaOne"}>
                  2-dars M:Pedagogning shaxsiy va kasbiy malakasi,Pedagogning
                  kasbiy rivojlanishining pedagogik asoslari
                </NavLink>
              </li>
              <li>
                <NavLink to={"/trt"}>
                  3-dars M:.O‘zbekistonda ta’lim siyosati,Pedagogika shaxs
                  haqidagi gumanitar bilimlar tizimida
                </NavLink>
              </li>
              <li>
                <NavLink to={"/trt"}>
                  4-dars M:Didaktika fan sifatida,Ta’limning maqsad va
                  vazifalari
                </NavLink>
              </li>
              <li>
                <NavLink to={"/trt"}>
                  5-dars M:O‘quv maqsadlarini aniqlashda Blum
                  taksonomiyasi,O‘qitishni tashkil etish shakllari
                </NavLink>
              </li>
              <li>
                <NavLink to={"/trt"}>
                  Qolgan mavzular kelgusida to'ldirib boriladi!...
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Conatct;
