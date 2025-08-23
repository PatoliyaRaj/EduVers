import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";

export default function SimpleCarousel({
  elements = [],
  className = "",
  autoPlay = true,
  autoPlayInterval = 3000,
  pauseOnHover = true,
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef(null);
  const autoPlayRef = useRef(null);

  // Animate slide change
  useEffect(() => {
    gsap.fromTo(
      containerRef.current,
      { x: 50, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.6, ease: "power3.out" }
    );
  }, [currentIndex]);

  // Auto play functionality
  useEffect(() => {
    if (autoPlay && !isHovered && elements.length > 1) {
      autoPlayRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % elements.length);
      }, autoPlayInterval);
    } else {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [autoPlay, isHovered, elements.length, autoPlayInterval]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % elements.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + elements.length) % elements.length);
  };

  if (!elements.length) {
    return (
      <div className="text-center text-gray-500">No elements to display</div>
    );
  }

  return (
    <div
      className={`w-full h-full min-h-[400px] flex flex-col ${className}`}
      onMouseEnter={() => pauseOnHover && setIsHovered(true)}
      onMouseLeave={() => pauseOnHover && setIsHovered(false)}
    >
      {/* Carousel Container */}
      <div className="relative w-full h-full flex-1 overflow-hidden">
        {/* Current Element Display */}
        <div
          ref={containerRef}
          className="w-full h-full flex justify-center items-center "
        >
          {elements[currentIndex]}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-0 sm:left-2 top-1/2 transform -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-xl rounded-full p-3 sm:p-4 transition-all duration-300 hover:scale-110 border border-gray-200"
          aria-label="Previous slide"
        >
          <svg
            className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-0 sm:right-2 top-1/2 transform -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-xl rounded-full p-3 sm:p-4 transition-all duration-300 hover:scale-110 border border-gray-200"
          aria-label="Next slide"
        >
          <svg
            className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>

        {/* Pagination Dots */}
        <div className="flex justify-center absolute bottom-4 left-1/2 transform -translate-x-1/2 space-x-3 ">
          {elements.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-all duration-300 hover:scale-125 ${
                currentIndex === index
                  ? "bg-teal-500 shadow-lg scale-110"
                  : "bg-gray-300 hover:bg-teal-300"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
