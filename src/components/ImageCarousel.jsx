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

  const { selectedIndex = 0, items = [] } = location.state || {};

  // Log the received state for debugging
  console.log("Received location.state:", location.state);
  console.log("Selected Index:", selectedIndex);
  console.log("Items:", items);

  if (!items.length) {
    console.error("No items passed to the carousel.");
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
        loop={false}
        spaceBetween={10}
        slidesPerView={1}
        centeredSlides={true}
      >
        {items.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="carousel-item">
              <img
                className="img-slide"
                src={item.src}
                alt={item.title}
                onError={(e) => {
                  console.error(`Failed to load image: ${item.src}`);
                  e.target.style.display = "none"; // Hide image on error
                }}
              />
              <h3>{item.title}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageCarousel;
