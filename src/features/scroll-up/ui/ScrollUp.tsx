import { memo, useEffect, useState } from "react";
import { BiArrowToTop } from "react-icons/bi";

export const ScrollUp = memo(() => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="z-20 bottom-10 right-10 p-3 rounded-full text-2xl bg-red-600 text-white shadow-lg 
                 hover:bg-red-700 hover:scale-110 transition-all duration-300"
    >
      <BiArrowToTop />
    </button>
  );
});
