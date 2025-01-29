import { useEffect } from "react";

const MobileParallax = () => {
  useEffect(() => {
    let ticking = false; // Prevent excessive scroll event calls

    const handleScroll = () => {
      if (ticking) return; // Skip if already updating

      ticking = true;
      requestAnimationFrame(() => {
        const isMobile = window.innerWidth <= 768;
        if (!isMobile) return;

        const sidebar = document.querySelector(".sidebar-wrapper");
        const portfolio = document.querySelector(".page-content-wrapper");

        if (sidebar && portfolio) {
          const scrollY = window.scrollY;

          // Apply smooth parallax effect
          sidebar.style.transform = `translate3d(0, ${scrollY * 0.2}px, 0)`;
          portfolio.style.transform = `translate3d(0, ${scrollY * 0.6}px, 0)`;
        }

        ticking = false; // Allow next update
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return null; // This component is only for effects, no UI
};

export default MobileParallax;
