import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../../../sass/swiper.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import HomeSwiperSlideComponent from "./slide/slide";

const HomeSwiperSliderComponent = () => {
  return (
    <div className="home-banner-swiper">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
      >
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <SwiperSlide key={i}>
            <HomeSwiperSlideComponent imgUrl={`/assets/swiper/${i + 1}.jpg`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HomeSwiperSliderComponent;
