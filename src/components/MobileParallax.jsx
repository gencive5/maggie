import { useEffect } from "react";
import Lenis from "lenis";

const MobileParallax = () => {
  useEffect(() => {
    const isMobile = window.innerWidth <= 768;
    if (!isMobile) return; // Run only on mobile

    const lenis = new Lenis({
      duration: 1.5, // Adjust for smoothness
      easing: (t) => 1 - Math.pow(1 - t, 3), // Smooth easing curve
      smooth: true,
      smoothTouch: true,
      lerp: 0.08, // Fine-tuned smooth scrolling
    });

    // Apply Lenis scrolling
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Ensure Lenis affects only the sidebar
    const sidebar = document.querySelector(".sidebar-wrapper");
    if (sidebar) {
      lenis.on("scroll", ({ scroll }) => {
        sidebar.style.transform = `translate3d(0, ${scroll * 0.3}px, 0)`;
      });
    }

    return () => {
      lenis.destroy(); // Cleanup on unmount
    };
  }, []);

  return null;
};

export default MobileParallax;
