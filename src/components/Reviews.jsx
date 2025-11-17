import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./Reviews.css";

export default function ReviewsSlider() {
  const reviews = [
    { id: 1, name: "Maria", text: "The best flan Ive ever had!" },
    { id: 2, name: "Alex", text: "Amazing coffee and friendly staff!" },
    { id: 3, name: "Jamie", text: "Perfect spot for a quick sweet treat." },
    { id: 4, name: "Sofia", text: "The caramel flavor is just perfection." },
    { id: 5, name: "Noah", text: "Loved the variety of desserts!" },
    { id: 6, name: "Emma", text: "Everything tasted homemade and fresh." },
    { id: 7, name: "Liam", text: "Friendly staff and cozy vibes." },
    { id: 8, name: "Olivia", text: "Highly recommend their coffee and flan combo!" },
    { id: 9, name: "Ethan", text: "The best part of my morning commute!" },
    { id: 10, name: "Isabella", text: "Desserts made with love — truly delicious!" },
    { id: 11, name: "Mason", text: "Affordable and amazing quality." },
    { id: 12, name: "Grace", text: "Their seasonal specials are always incredible." },
  ];

  return (
    <Swiper
      slidesPerView={4}
      spaceBetween={30}
      loop={true}
      pagination={{ clickable: true }}
      autoplay={{ delay: 4000, disableOnInteraction: false }}
      modules={[Autoplay, Pagination]}
      className="reviews-slider"
      breakpoints={{
        0: { slidesPerView: 1 },
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
        1280: { slidesPerView: 4 },
      }}
    >
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
