import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll ke posisi atas setiap kali rute berubah
  }, [pathname]);

  return null;
};

export default ScrollToTop;