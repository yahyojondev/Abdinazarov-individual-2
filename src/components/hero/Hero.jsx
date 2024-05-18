import { Button } from "@mui/material";
import React from "react";
import { IoSearch } from "react-icons/io5";
import heroright from "../../assets/images/boring.jpg";

const Hero = () => {
  return (
    <div className="hero">
      <div className="container">
        <div className="hero__wrapper">
          <div className="hero__wrapper__left">
            <h1 className="hero__wrapper__left__title">
              Professional ta'lim yo'nalishlarida 3-kurs mutahasislik fanlarini
              mustaqil o'rganish
            </h1>
            <p className="hero__wrapper__left__text">
              UShbu web sayt orqali siz professionla ta'lim yo'nalishlarda
              mutahasislik fanlarini mustaqil ravishda o'rganishingiz mumkin
            </p>
            <div className="hero__serach__wrapper">
              <div className="input__wrapper">
                <IoSearch />
                <input placeholder="Find the best brands" type="text" />
              </div>
              <Button className="hero__search__btn" variant="contained">
                Search
              </Button>
            </div>
          </div>
          <div className="hero__wrapper__right">
            <img src={heroright} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
