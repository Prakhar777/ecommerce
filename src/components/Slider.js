import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import { Navigation } from "swiper";
function Slider() {
  const banner = {
    img1: require("../img/banner1.jpg"),
    img2: require("../img/banner2.jpg"),
  };
  return (
    <>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
        slidesPerView={1}
      >
        <SwiperSlide>
          <img className="img-fluid" src={banner.img2} />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img className="img-fluid" src={banner.img2} />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Slider;
