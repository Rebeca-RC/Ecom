import React, { useState, useEffect } from "react";

const HomePageSlider = () => {
  const slides = [
    { id: 1, image: "/images/2.png" },
    { id: 2, image: "/images/second.png" },
    { id: 3, image: "/images/third.png" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-100vh">
      <img
        src={slides[currentIndex].image}
        alt={`Slide ${currentIndex + 1}`}
        className="h-full w-full object-cover"
      />

      {/* Dots Navigation */}
      <div className="absolute bottom-5 w-full flex justify-center">
        {slides.map((_, index) => (
          <div
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 mx-1 rounded-full cursor-pointer ${
              currentIndex === index ? "bg-blue-500" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePageSlider;
