import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";
import L1 from '../../img/L1.png'
import L2 from "../../img/L2.png";
import L3 from "../../img/L3.png";
import L4 from "../../img/L4.png";

const Testimonial = () => {
  const clients = [
    {
      img: L1,
      review:
        "Experienced in web development, UI/UX design, and desktop applications, creating responsive websites and intuitive user interfaces for seamless digital experiences. Passionate about crafting visually appealing and functional designs with a user-centric approach.",
    },
    {
      img: L2,
      review:
        "Skilled in WordPress development, SEO, and desktop applications, optimizing websites for performance, visibility, and seamless functionality. Focused on creating user-friendly, high-ranking digital experiences.",
    },
    {
      img: L3,
      review:
        "Frontend Developer skilled in React.js, JavaScript, and UI/UX design, with a growing knowledge of backend technologies. Passionate about creating responsive, user-friendly web applications. ",
    },
    {
      img: L4,
      review:
        "Working as a freelance web developer, handling web development, SEO, and tech classes. Passionate about building digital solutions and sharing knowledge through teaching. ",
    },
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>Company always get </span>
        <span>Exceptional Work </span>
        <span>from me...</span>
      <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
      <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
