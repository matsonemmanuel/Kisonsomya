
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { ArrowUp } from "lucide-react";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  const [showButton, setShowButton] = useState(false);

  // Automatically scroll to the top whenever the page changes
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [pathname]);

  // Show the button after scrolling down
  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 350);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      title="Back to top"
      className={`fixed bottom-6 right-6 z-[100] flex h-12 w-12 items-center justify-center rounded-full bg-[#086329] text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#064d20] hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-green-200 cursor-pointer ${
        showButton
          ? "visible translate-y-0 opacity-100"
          : "invisible translate-y-4 opacity-0"
      }`}
    >
      <ArrowUp size={23} strokeWidth={2.5} />
    </button>
  );
};

export default ScrollToTop;
