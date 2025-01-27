import React, { useEffect, useState } from "react";
import "../App.css";
import creamsoda from "/assets/images/creamsoda2.jpg";
import randi from "/assets/images/randi.jpg";
import raisa2 from "/assets/images/raisa2.jpg";
import sasha from "/assets/images/sasha.jpg";
import sasha2 from "/assets/images/sasha2.jpg";
import creamsoda3 from "/assets/images/creamsoda3.jpg";
import fang from "/assets/images/fang.jpg";
import fang2 from "/assets/images/fang2.jpg";
import fang3 from "/assets/images/fang3.jpg";
import fang357 from "/assets/images/fang357.jpg";
import fang358 from "/assets/images/fang358.jpg";
import roversi from "/assets/images/roversi.jpg";
import knas from "/assets/images/knas.jpg";
import knas3 from "/assets/images/knas3.jpg";
import viktor5 from "/assets/images/viktor5.jpg";
import viktor2 from "/assets/images/viktor2.jpg";
import richemond from "/assets/images/richemond.jpg";

const Portfolio = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const targets = document.querySelectorAll(".scroll");

      targets.forEach((target) => {
        const rate = parseFloat(target.dataset.rate || "0");
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
    { src: creamsoda, title: "creamsoda" },
    { src: randi, title: "randi" },
    { src: raisa2, title: "RaisaVanessa" },
    { src: sasha, title: "SashaGymn" },
    { src: creamsoda3, title: "creamsoda2" },
    { src: sasha2, title: "SashaGymn2" },
    { src: fang, title: "FangDong" },
    { src: fang3, title: "FangDong" },
    { src: fang2, title: "FangDong" },
    { src: richemond, title: "Richemond" },
    { src: fang357, title: "FangDong" },
    { src: fang358, title: "FangDong" },
    { src: roversi, title: "NicolaDelorme" },
    { src: knas, title: "Knas" },
    { src: knas3, title: "Knas" },
    { src: viktor5, title: "ViktorVerana" },
    { src: viktor2, title: "ViktorVerana" },
    
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
          {portfolioItems.slice(0, 7).map((item, index) => (
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
          {portfolioItems.slice(7, 12).map((item, index) => (
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
          {portfolioItems.slice(12, 17).map((item, index) => (
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
