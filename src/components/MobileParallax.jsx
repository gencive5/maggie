import { useEffect } from "react";

const MobileParallax = () => {
  useEffect(() => {
    let lastScrollY = window.scrollY; // Store last scroll position
    let ticking = false; // Prevent redundant updates

    const handleScroll = () => {
      if (ticking) return; // Skip if already updating

      ticking = true;
      requestAnimationFrame(() => {
        const isMobile = window.innerWidth <= 768;
        if (!isMobile) return;

        const sidebar = document.querySelector(".sidebar-wrapper");

        if (sidebar) {
          const scrollY = window.scrollY;

          // Sidebar moves slower (parallax effect), portfolio is unchanged
          sidebar.style.transform = `translate3d(0, ${scrollY * 0.3}px, 0)`;
        }

        lastScrollY = window.scrollY; // Update last position
        ticking = false; // Allow next update
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return null; // No UI rendering, just effects
};

export default MobileParallax;
