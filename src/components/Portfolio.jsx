import React, { useEffect, useState } from "react";
import "../App.css";
import creamsoda from "/assets/images/creamsoda2.jpg";
import creamsoda2 from "/assets/images/creamsoda5.jpg";
import randi from "/assets/images/randi.jpg";
import randi2 from "/assets/images/randi3.jpg";
import sasha from "/assets/images/sasha.jpg";
import sasha2 from "/assets/images/sasha2.jpg";
import creamsoda3 from "/assets/images/creamsoda3.jpg";
import fang2 from "/assets/images/fang2.jpg";
import fang357 from "/assets/images/fang357.jpg";
import roversi from "/assets/images/roversi.jpg";
import viktor5 from "/assets/images/viktor5.jpg";
import viktor2 from "/assets/images/viktor2.jpg";
import richemond from "/assets/images/richemond.jpg";
import fievre from "/assets/images/fever.jpg";
import yoav from "/assets/images/yoav.jpg";


const Portfolio = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const isMobile = window.innerWidth <= 768; 
      
      if (isMobile) {
        return; // Disable parallax effect on mobile
      }

      // Apply parallax scrolling effect ONLY on desktop
      const targets = document.querySelectorAll(".scroll");
      targets.forEach((target) => {
        let rate = parseFloat(target.dataset.rate || "0");
        const direction = target.dataset.direction || "vertical";

        if (direction === "vertical") {
          const pos = window.pageYOffset * rate;
          target.style.transform = `translate3d(0px, ${pos}px, 0px)`;
        } else {
          const rateX = parseFloat(target.dataset.ratex || "0");
          const rateY = parseFloat(target.dataset.ratey || "0");
          const posX = window.pageYOffset * rateX;
          const posY = window.pageYOffset * rateY;
          target.style.transform = `translate3d(${posX}px, ${posY}px, 0px)`;
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const portfolioItems = [
    { src: creamsoda, title: "Tim Gao" },
    { src: randi, title: "Randi" },
    { src: randi2, title: "Randi" },
    { src: sasha, title: "Sasha Gymn" },
    { src: sasha2, title: "Sasha Gymn, Alayna Neaum" },
    { src: yoav, title: "Yoav Paul" },
    { src: creamsoda3, title: "Tim Gao" },
    { src: creamsoda2, title: "Tim Gao" },
    { src: fang2, title: "Knas Vang, Heavy Herbe" },
    { src: richemond, title: "Hôtel Dinosaure Mag" },
    { src: fang357, title: "Knas Vang, Heavy Herbe" },
    { src: fievre, title: "Fièvre" },
    { src: roversi, title: "Nicola Delorme" },
    { src: viktor5, title: "Viktor Verana, 5yntax 3rr0r, Véro" },
    { src: viktor2, title: "Viktor Verana, 5yntax 3rr0r, Véro" },
  ];

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="container">
      <div className="row">
        {/* Column One */}
        <div
          data-rate="-3"
          data-direction="vertical"
          className="scroll col-xs-12 col-sm-6 col-md-4"
        >
          {portfolioItems.slice(0, 6).map((item, index) => (
            <div className="portfolio-item" key={index}>
              <div className="hover-bg" onClick={() => handleImageClick(item)}>
                <img
                  src={item.src}
                  className="img-responsive"
                  alt={item.title}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Column Two */}
        <div
          data-rate="-2"
          data-direction="vertical"
          className="scroll col-xs-12 col-sm-6 col-md-4"
        >
          {portfolioItems.slice(6, 11).map((item, index) => (
            <div className="portfolio-item" key={index}>
              <div className="hover-bg" onClick={() => handleImageClick(item)}>
                <img
                  src={item.src}
                  className="img-responsive"
                  alt={item.title}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Column Three */}
        <div
          data-rate="-1"
          data-direction="vertical"
          className="scroll col-xs-12 col-sm-6 col-md-4"
        >
          {portfolioItems.slice(11, 16).map((item, index) => (
            <div className="portfolio-item" key={index}>
              <div className="hover-bg" onClick={() => handleImageClick(item)}>
                <img
                  src={item.src}
                  className="img-responsive"
                  alt={item.title}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div className="image-modal" onClick={closeImageModal}>
          <div className="modal-content">
            <img
              src={selectedImage.src}
              alt={selectedImage.title}
              className="img-responsive"
            />
            <div className="modal-title">{selectedImage.title}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;
