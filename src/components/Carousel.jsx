import React from 'react';
import "../App.css";



const images = [
  'assets/images/creamsoda2.jpg',
  'assets/images/raisa.jpg',
  'assets/images/raisa2.jpg',
  'assets/images/randy.jpg'
];

const Carousel = () => {
  return (
    <div id="carouselExemple" className="carousel slide" data-ride="carousel" data-interval="3000">
      <div className="carousel-inner">
        {images.map((src, index) => (
          <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={src}>
            <img src={src} className="d-block" alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>
      <a href="#carouselExemple" className="carousel-control-prev" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a href="#carouselExemple" className="carousel-control-next" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
};

export default Carousel;
