import { useEffect } from "react";

const MobileParallax = () => {
  useEffect(() => {
    const handleScroll = () => {
      const isMobile = window.innerWidth <= 768;
      if (!isMobile) return; // Run only on mobile

      const sidebar = document.querySelector(".sidebar-wrapper");
      if (!sidebar) return;

      // Use data-rate for parallax effect (like desktop portfolio)
      const rate = parseFloat(sidebar.dataset.rate || "0.3"); // Default to 0.3
      const posY = window.scrollY * rate;

      sidebar.style.transform = `translate3d(0px, ${posY}px, 0px)`;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return null; // No UI, just effects
};

export default MobileParallax;
