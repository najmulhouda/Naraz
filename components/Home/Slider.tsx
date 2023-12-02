// import Swiper core and required modules
import {
  A11y,
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import { baseUrl } from "@/config/appConfig";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Slider = () => {
  return (
    <Swiper
      className="md:container lg:container container my-2 mx-20 rounded-lg px-10"
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      // navigation
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      // pagination={{ clickable: true }}
      // scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      <SwiperSlide className="">
        <picture>
          <img
            src={`${baseUrl}/img/slider/slider-5.jpg`}
            className="md:h-64 h-34 w-full"
          />
        </picture>
      </SwiperSlide>
      <SwiperSlide>
        <picture>
          <img
            src={`${baseUrl}/img/slider/slider-2.jpg`}
            className="md:h-64 h-34 w-full"
          />
        </picture>
      </SwiperSlide>
      <SwiperSlide>
        <picture>
          <img
            src={`${baseUrl}/img/slider/slider-3.jpg`}
            className="md:h-64 h-34 w-full"
          />
        </picture>
      </SwiperSlide>
      <SwiperSlide>
        <picture>
          <img
            src={`${baseUrl}/img/slider/slider-4.jpg`}
            className="md:h-64 h-34 w-full"
          />
        </picture>
      </SwiperSlide>
      <SwiperSlide>
        <picture>
          <img
            src={`${baseUrl}/img/slider/slider-1.jpg`}
            className="md:h-64 h-34 w-full"
          />
        </picture>
      </SwiperSlide>
    </Swiper>
  );
};
export default Slider;
