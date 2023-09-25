import { useEffect } from "react";
import { GameIntroduction } from "./GameIntroduction";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Mousewheel, HashNavigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export const HomePage = () => {
  return (
    <Swiper
      direction={"vertical"}
      slidesPerView={1}
      spaceBetween={30}
      mousewheel={true}
      hashNavigation={{
        watchState: true,
      }}
      pagination={{
        clickable: true,
      }}
      modules={[Mousewheel, Pagination, HashNavigation]}
      className="mySwiper"
    >
      <SwiperSlide data-hash="slide1">Slide 1</SwiperSlide>
      <SwiperSlide data-hash="slide2">Slide 2</SwiperSlide>
      <SwiperSlide data-hash="slide3">Slide 3</SwiperSlide>
      <SwiperSlide data-hash="slide4">Slide 4</SwiperSlide>
      <SwiperSlide data-hash="slide5">Slide 5</SwiperSlide>
      <SwiperSlide data-hash="slide6">Slide 6</SwiperSlide>
      <SwiperSlide data-hash="slide7">Slide 7</SwiperSlide>
    </Swiper>
  );
};
