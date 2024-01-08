import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./styles/mainSection.css";
import React, { useState, useEffect } from "react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import PercentageBar from "./PercentageBar";

const MainSection = () => {
  const [isMobile, setIsMovile] = useState(window.innerWidth < 600);

  useEffect(() => {
    const handleResize = () => {
      setIsMovile(window.innerWidth < 600);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="main__section">
      <h1 className="title__app">GRAN SORTE0</h1>
      <PercentageBar />

      {isMobile ? (
        <div className="raffleImg__box">
          <Swiper
            modules={[Pagination]}
            spaceBetween={50}
            slidesPerView={1}
            pagination={{ clickable: true }}
            onSlideChange={() => console.log("slide change")}
          >
            <SwiperSlide>
              {" "}
              <img
                className="img_raflle"
                src="./image2.jpg"
                alt="img not found"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="img_raflle"
                src="./imagen3.jpg"
                alt="img not found"
              />
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <img
                className="img_raflle"
                src="./imagen4.jpg"
                alt="img not found"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      ) : (
        <div className="raffleImg__box">
          <img src="./image2.jpg" alt="img not found" />
          <img src="./imagen3.jpg" alt="img not found" />
          <img src="./imagen4.jpg" alt="img not found" />
        </div>
      )}
    </section>
  );
};

export default MainSection;
