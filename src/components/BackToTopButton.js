// BackToTopButton.js
import React, { useState, useEffect } from "react";

const BackToTopButton = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    showBackToTop && (
      <button className="back-to-top" onClick={handleScrollToTop}>
        <span role="img" aria-label="Back to Top">
          ↑
        </span>
      </button>
    )
  );
};

export default BackToTopButton;
