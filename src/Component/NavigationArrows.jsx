import React from "react";
import "../assets/NavigationArrows.css";

const NavigationArrows = ({
  onPrevClick,
  onNextClick,
  className = "",
  prevDisabled = false,
  nextDisabled = false,
}) => {
  const handlePrevClick = () => {
    console.log("Previous button clicked");
    onPrevClick?.();
  };

  const handleNextClick = () => {
    console.log("Next button clicked");
    onNextClick?.();
  };

  return (
    <div className={`navigation-arrows ${className}`}>
      <button
        className="nav-arrow prev"
        onClick={handlePrevClick}
        aria-label="Previous"
        disabled={prevDisabled}
      >
        ←
      </button>
      <button
        className="nav-arrow next"
        onClick={handleNextClick}
        aria-label="Next"
        disabled={nextDisabled}
      >
        →
      </button>
    </div>
  );
};

export default NavigationArrows;
