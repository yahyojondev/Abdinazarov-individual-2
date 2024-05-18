import React, { useState, useEffect } from "react";
import axios from "axios";
import stars from "../../assets/images/star.png";
import { cardproduct } from "../../static/route";
import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Products = () => {
  let navigate = useNavigate();
  const API_URL = "https://dummyjson.com/products";
  const [data, setData] = useState([]);
  const [count, setCount] = useState(6);
  useEffect(() => {
    // window.scrollTo(0, 0);
    axios
      .get(`${API_URL}?limit=${count}`)
      .then((res) => setData(res.data.products))
      .catch((err) => console.log(err));
  }, [count]);

  const productItem = cardproduct?.map((el) => (
    <div key={el.id} className="card">
      <div className="card__img__wrapper">
        <img src={el.link} alt="" />
      </div>
      <div className="card__content">
        <h3>{el.title}</h3>
        {/* <img src={stars} alt="" /> */}
        {/* <div className="price__wrapper">
          <del>${el.price * 2}</del>
          <p>${el.price}</p>
        </div> */}
      </div>
      {/* <navigate to={"indivudual - word.vercel.app"}> */}
      <NavLink to={el.path}>
        <Button className="card__btn" variant="contained">
          Ko'proq
        </Button>
      </NavLink>
      {/* </navigate> */}
      {/* <button className="card__btn">ko'proq...</button> */}
    </div>
  ));

  return (
    <div className="product">
      {/* <div className="container">
        <div className="cards__wrapper">{productItem.slice(1, 4)}</div>
      </div> */}
      <div className="product__wrapper">
        <div className="container">
          <div className="cards__title__wrapper">
            <p>Find your favourite subjects</p>
            <h2>Professional ta'lim yo'nalishlaridagi fanlar</h2>
          </div>
        </div>
        <div className="container">
          <div className="cards__wrapper">{productItem}</div>
        </div>
        <button onClick={() => setCount((p) => p + 4)} className="more__btn">
          View More
        </button>
        <div className="container">
          <div className="cards__title__wrapper">
            <p>Here are our some of the best clients.</p>
            <h2>What People Say About Us</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
