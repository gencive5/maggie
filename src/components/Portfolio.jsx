import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";
import creamsoda from "/assets/images/creamsoda2.jpg";
import randy from "/assets/images/randy.jpg";
import raisa2 from "/assets/images/raisa2.jpg";
import sasha from "/assets/images/sasha.jpg";

const Portfolio = () => {
  const navigate = useNavigate();

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
    { src: randy, title: "randy" },
    { src: raisa2, title: "RaisaVanessa" },
    { src: sasha, title: "SashaGymn" },
    { src: creamsoda, title: "creamsoda" },
    { src: randy, title: "randy" },
    { src: raisa2, title: "RaisaVanessa" },
    { src: sasha, title: "SashaGymn" },
    { src: sasha, title: "SashaGymn" },
    { src: creamsoda, title: "creamsoda" },
    { src: randy, title: "randy" },
    { src: raisa2, title: "RaisaVanessa" },
    { src: sasha, title: "SashaGymn" },
  ];

  const handleImageClick = (index) => {
    navigate("/carousel", {
      state: { selectedIndex: index, items: portfolioItems },
    });
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
          {portfolioItems.slice(0, 4).map((item, index) => (
            <div className="portfolio-item" key={index}>
              <div className="hover-bg">
                <div
                  className="hover-text"
                  onClick={() => handleImageClick(index)}
                >
                  <div className="overlay-caption">
                    <div className="overlay-content">{item.title}</div>
                  </div>
                </div>
                <img
                  src={item.src}
                  className="img-responsive"
                  alt={item.title}
                  onClick={() => handleImageClick(index)}
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
          {portfolioItems.slice(4, 8).map((item, index) => (
            <div className="portfolio-item" key={index}>
              <div className="hover-bg">
                <div
                  className="hover-text"
                  onClick={() => handleImageClick(index + 4)}
                >
                  <div className="overlay-caption">
                    <div className="overlay-content">{item.title}</div>
                  </div>
                </div>
                <img
                  src={item.src}
                  className="img-responsive"
                  alt={item.title}
                  onClick={() => handleImageClick(index + 4)}
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
          {portfolioItems.slice(8, 12).map((item, index) => (
            <div className="portfolio-item" key={index}>
              <div className="hover-bg">
                <div
                  className="hover-text"
                  onClick={() => handleImageClick(index + 8)}
                >
                  <div className="overlay-caption">
                    <div className="overlay-content">{item.title}</div>
                  </div>
                </div>
                <img
                  src={item.src}
                  className="img-responsive"
                  alt={item.title}
                  onClick={() => handleImageClick(index + 8)}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
