import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Scrollmount = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]); // Jab bhi pathname change ho, scroll top par chala jaye

  return null;
};

export default Scrollmount;
