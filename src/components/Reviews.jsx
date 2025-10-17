import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function ReviewsSlider() {
  const reviews = [
    { id: 1, name: "Maria", text: "The best flan I’ve ever had!" },
    { id: 2, name: "Alex", text: "Amazing coffee and friendly staff!" },
    { id: 3, name: "Jamie", text: "Perfect spot for a quick sweet treat." },
  ];

  return (
    <Swiper spaceBetween={30} slidesPerView={1} autoplay={{ delay: 4000 }}>
      {reviews.map((r) => (
        <SwiperSlide key={r.id}>
          <div className="review-card">
            <p>"{r.text}"</p>
            <h4>- {r.name}</h4>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}