import React, { useEffect } from "react";

const Portfolio = () => {
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
    { src: "images/creamsoda2.jpg", title: "NosImprudences-MadaniClockwise" },
    { src: "images/randy.jpg", title: "FangDong-Knas" },
    { src: "images/raisa.jpg", title: "Knas" },
    { src: "images/raisa2.jpg", title: "TonyZhou" },
    { src: "images/sasha.jpg", title: "Knas" },
    { src: "images/creamsoda2.jpg", title: "WuJiamin" },
    { src: "images/creamsoda2.jpg", title: "BaherKhairy" },
    { src: "images/creamsoda2.jpg", title: "RayonFrais" },
  ];

  return (
    <div className="container">
      <div className="row">
        {/* Column One */}
        <div data-rate="-3" data-direction="vertical" className="scroll col-xs-12 col-sm-6 col-md-4">
          {portfolioItems.slice(0, 4).map((item, index) => (
            <div className="lorem" key={index}>
              <div className="portfolio-item">
                <div className="hover-bg">
                  <a href={item.src} title={item.title} data-lightbox-gallery="gallery1">
                    <div className="hover-text">
                      <div className="overlay-caption">
                        <div className="overlay-content"></div>
                      </div>
                    </div>
                    <img src={item.src} className="img-responsive" alt={item.title} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Column Two */}
        <div data-rate="-2" data-direction="vertical" className="scroll col-xs-12 col-sm-6 col-md-4">
          {portfolioItems.slice(4, 8).map((item, index) => (
            <div className="adipiscing" key={index}>
              <div className="portfolio-item">
                <div className="hover-bg">
                  <a href={item.src} title={item.title} data-lightbox-gallery="gallery1">
                    <div className="hover-text">
                      <div className="overlay-caption">
                        <div className="overlay-content"></div>
                      </div>
                    </div>
                    <img src={item.src} className="img-responsive" alt={item.title} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Column Three */}
        <div data-rate="-1" data-direction="vertical" className="scroll col-xs-12 col-sm-6 col-md-4">
          {portfolioItems.map((item, index) => (
            <div className="dolor" key={index}>
              <div className="portfolio-item">
                <div className="hover-bg">
                  <a href={item.src} title={item.title} data-lightbox-gallery="gallery1">
                    <div className="hover-text">
                      <div className="overlay-caption">
                        <div className="overlay-content"></div>
                      </div>
                    </div>
                    <img src={item.src} className="img-responsive" alt={item.title} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
