import React, { useRef, useState } from "react";
import stars from "../../assets/images/star.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import swiperimg from "../../assets/images/ganisher.jpg";
import swiperimg1 from "../../assets/images/fayzulloh.jpg";
import swiperimg3 from "../../assets/images/yahyo.jpg";
import swiperimg4 from "../../assets/images/qodirjon.jpg";

const Profile = () => {
  return (
    <div className="profile">
      <div className="container">
        <Swiper
          slidesPerView={2}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="profile__card">
              <img className="profile__card__img" src={swiperimg1} alt="" />
              <div className="profile__card__content">
                <h4>Fayzulloh Obidov</h4>
                <p>
                  Don’t waste time, just order! This is the best website to
                  puschase smart watches.
                </p>
                <img className="profile__card__star" src={stars} alt="" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="profile__card">
              <img className="profile__card__img" src={swiperimg} alt="" />
              <div className="profile__card__content">
                <h4>G'anisher Rajabov</h4>
                <p>
                  Don’t waste time, just order! This is the best website to
                  puschase smart watches.
                </p>
                <img className="profile__card__star" src={stars} alt="" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="profile__card">
              <img className="profile__card__img" src={swiperimg3} alt="" />
              <div className="profile__card__content">
                <h4>Yahyo Nabjonov</h4>
                <p>
                  Don’t waste time, just order! This is the best website to
                  puschase smart watches.
                </p>
                <img className="profile__card__star" src={stars} alt="" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="profile__card">
              <img className="profile__card__img" src={swiperimg4} alt="" />
              <div className="profile__card__content">
                <h4>Qodirjon Xayitmirzayev</h4>
                <p>
                  Don’t waste time, just order! This is the best website to
                  puschase smart watches.
                </p>
                <img className="profile__card__star" src={stars} alt="" />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Profile;
