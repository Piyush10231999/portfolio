import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import P7 from "../../img/P7.png";
import P6 from "../../img/P6.png";
import P1 from "../../img/P1.png";
import P2 from "../../img/p2.png";
import P3 from "../../img/P3.png";
import P4 from "../../img/P4.png";
import { themeContext } from "../../Context";


const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
        
>


        <SwiperSlide>
          <img src={P7} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={P6} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={P2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={P1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={P3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={P4} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
