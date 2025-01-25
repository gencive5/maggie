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

  // Debugging the location state
  console.log("Location State:", locationState);
  console.log("Selected Index:", selectedIndex);
  console.log("Items:", items);

  // If no items are passed, display a message
  if (!items.length) {
    console.error("No items passed to the carousel.");
    return <div>No items to display.</div>;
  }

  return (
    <div className="carousel-container">
      <button className="back-button" onClick={() => navigate("/")}>
        Back to Portfolio
      </button>

      {/* Simplified carousel with hardcoded test image */}
      <Swiper
          initialSlide={selectedIndex}
          navigation
          pagination={{ clickable: true }}
          modules={[Navigation, Pagination]}
          className="carousel-swiper"
          loop={false} // Turn off looping (can cause issues)
          spaceBetween={10} // Add space between slides
          slidesPerView={1} // Ensure only one slide is shown at a time
          centeredSlides={true} 
      >
        <SwiperSlide>
          <img
            className="img-slide"
            src="/assets/images/creamsoda2.jpg" // Replace with a valid image path
            alt="Test"
            onError={() => console.error("Failed to load test image")}
            onLoad={() => console.log("Image Loaded Successfully")}                
            
            
          />
        </SwiperSlide>
      </Swiper>

      {/* Original carousel code (can be restored later) */}
      {/* 
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
              <img
                src={item.src}
                alt={item.title}
                onError={() => console.error(`Failed to load image: ${item.src}`)}
              />
              <h3>{item.title}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      */}
    </div>
  );
};

export default ImageCarousel;
