import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules"; 

const ImageCarousel = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Handle fallback for state or default values
  const locationState = location.state || {};
  const { selectedIndex = 0, items = [] } = locationState;

  if (!items.length) {
    return <div>No items to display.</div>;
  }

  return (
    <div className="carousel-container">
      <button className="back-button" onClick={() => navigate("/")}>
        Back to Portfolio
      </button>
      <Swiper
        initialSlide={selectedIndex}
        navigation
        pagination={{ clickable: true }}
        modules={[Navigation, Pagination]}
        className="carousel-swiper"
      >
        {items.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="carousel-item">
              <img src={item.src} alt={item.title} />
              <h3>{item.title}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageCarousel;
