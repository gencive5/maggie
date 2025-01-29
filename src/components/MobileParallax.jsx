import { useEffect } from "react";

const MobileParallax = () => {
  useEffect(() => {
    const handleScroll = () => {
      const isMobile = window.innerWidth <= 768;
      if (!isMobile) return; // Only run this on mobile

      const sidebar = document.querySelector(".sidebar-wrapper");
      const portfolio = document.querySelector(".page-content-wrapper");

      if (sidebar && portfolio) {
        const scrollY = window.scrollY;

        // Sidebar moves slower (parallax effect)
        sidebar.style.transform = `translate3d(0, ${scrollY * 0.3}px, 0)`;

        // Portfolio moves at normal speed (or slightly faster)
        portfolio.style.transform = `translate3d(0, ${scrollY * 0.7}px, 0)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return null; // This component doesn't render anything, just applies effects
};

export default MobileParallax;
