import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";

export default function SimpleCarousel({ elements = [] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);

  // Animate slide change
  useEffect(() => {
    gsap.fromTo(
      containerRef.current,
      { x: 50, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.6, ease: "power3.out" }
    );
  }, [currentIndex]);

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
    return <div className="text-center text-gray-500">No elements to display</div>;
  }

  return (
    <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
      {/* Carousel Container */}
      <div className="relative w-full">
        {/* Current Element Display */}
        <div ref={containerRef} className="w-full flex justify-center items-center min-h-[200px]">
          {elements[currentIndex]}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white shadow-lg rounded-full p-2 sm:p-3 transition-all duration-200 hover:scale-110"
          aria-label="Previous slide"
        >
          <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white shadow-lg rounded-full p-2 sm:p-3 transition-all duration-200 hover:scale-110"
          aria-label="Next slide"
        >
          <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center mt-4 sm:mt-6 space-x-2">
        {elements.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-200 hover:scale-110 ${
              currentIndex === index 
                ? "bg-teal-500 shadow-md" 
                : "bg-gray-300 hover:bg-gray-400"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center items-center mt-4 space-x-4">
        <button
          onClick={prevSlide}
          disabled={currentIndex === 0}
          className={`px-3 py-1 sm:px-4 sm:py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
            currentIndex === 0
              ? "bg-gray-200 text-gray-400 cursor-not-allowed"
              : "bg-teal-500 text-white hover:bg-teal-600 hover:scale-105"
          }`}
        >
          Previous
        </button>

        <div className="flex space-x-1">
          {Array.from({ length: Math.min(5, elements.length) }, (_, i) => {
            let pageIndex;
            if (elements.length <= 5) {
              pageIndex = i;
            } else if (currentIndex < 3) {
              pageIndex = i;
            } else if (currentIndex >= elements.length - 3) {
              pageIndex = elements.length - 5 + i;
            } else {
              pageIndex = currentIndex - 2 + i;
            }

            return (
              <button
                key={pageIndex}
                onClick={() => goToSlide(pageIndex)}
                className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg text-sm font-medium transition-all duration-200 ${
                  currentIndex === pageIndex
                    ? "bg-teal-500 text-white shadow-md"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300 hover:scale-105"
                }`}
              >
                {pageIndex + 1}
              </button>
            );
          })}
        </div>

        <button
          onClick={nextSlide}
          disabled={currentIndex === elements.length - 1}
          className={`px-3 py-1 sm:px-4 sm:py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
            currentIndex === elements.length - 1
              ? "bg-gray-200 text-gray-400 cursor-not-allowed"
              : "bg-teal-500 text-white hover:bg-teal-600 hover:scale-105"
          }`}
        >
          Next
        </button>
      </div>

      {/* Slide Counter */}
      <div className="text-center mt-3 text-sm text-gray-500">
        {currentIndex + 1} / {elements.length}
      </div>
    </div>
  );
}