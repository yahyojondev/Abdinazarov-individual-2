import React from "react";
import pdf from "../brands/pdf/dars1.pdf";
import { NavLink } from "react-router-dom";
const Barands = () => {
  return (
    <div>
      <div className="container">
        <div className="brand__wrapper">
          <div className="brand__wrapper__left">
            <ul className="brand__wrapper__left__list">
              <li>
                <NavLink to={"/trt"}>
                  1-dars M:Kirish ta'limda raqamli texnalogiyalar asosiy
                  tushinchalar va tindenssiyalar.
                </NavLink>
              </li>
              <li>
                <NavLink to={"/trtOne"}>
                  2-dars M:Zamonaviy taʼlim muhitida raqamli texnologiyalarning
                  oʻrni
                </NavLink>
              </li>
              <li>
                <NavLink to={"/trt"}>
                  3-dars M:Raqamli texnologiyalar tomonidan
                  qo‘llab-quvvatlanadigan pedagogik modellar va usullar
                </NavLink>
              </li>
              <li>
                <NavLink to={"/trt"}>
                  4-dars M:Ta’lim jarayonida QR kodlardan foydalanish
                </NavLink>
              </li>
              <li>
                <NavLink to={"/trt"}>
                  5-dars M:3D-chop etish va uning ta’lim tizimidagi o‘rni,
                  taʼlimda zamonaviy robotlar va ularning oʻrni
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

export default Barands;
