import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import cake1 from "../assets/cakes/2124.jpg";
import cake2 from "../assets/cakes/2125.jpg";
import cake3 from "../assets/cakes/2126.jpg";
import cake4 from "../assets/cakes/2127.jpg";
import cake5 from "../assets/cakes/2128.jpg";
import cake6 from "../assets/cakes/2129.jpg";
import cake7 from "../assets/cakes/2130.jpg";
import cake8 from "../assets/cakes/2131.jpg";
import cake9 from "../assets/cakes/2132.jpg";
import cake10 from "../assets/cakes/2133.jpg";

export default function CakeSlider() {
  const cakes = [cake1, cake2, cake3, cake4, cake5, cake6, cake7, cake8, cake9, cake10 ];

  return (
    <div className="cake-slider">
      <Swiper
        slidesPerView={4}
        spaceBetween={20}
        loop={true}
        pagination={{ clickable: true }}
        navigation
        autoplay={{delay: 3000}}
        className="cakeSwiper"
      >
        {cakes.map((img, i) => (
          <SwiperSlide key={i}>
            <img src={img} alt={`Cake ${i + 1}`} className="cake-image" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
