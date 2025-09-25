import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../../components/Card";
import { ArrowRight } from "lucide-react";

const defaultProps = {
  title: "Card Title",
  content: "Discover amazing features and benefits.",
  rating: 4.9,
  reviewCount: 127,
  price: "₹299",
  buttonText: "Learn More",
  tags: ["Feature 1", "Feature 2", "Feature 3"],
  videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  showButton: true,
  showRating: true,
  showPrice: false,
  showTags: true,
  showVideo: true,
  className: "",
};

function ReusableCard({
  image,
  title = defaultProps.title,
  content = defaultProps.content,
  rating = defaultProps.rating,
  reviewCount = defaultProps.reviewCount,
  price = defaultProps.price,
  buttonText = defaultProps.buttonText,
  tags = defaultProps.tags,
  videoUrl = defaultProps.videoUrl,
  showButton = defaultProps.showButton,
  showRating = defaultProps.showRating,
  showPrice = defaultProps.showPrice,
  showTags = defaultProps.showTags,
  showVideo = defaultProps.showVideo,
  className = defaultProps.className,
  onButtonClick,
  onCardClick,
}) {
  const handleButtonClick = (e) => {
    e.stopPropagation();
    if (onButtonClick) {
      onButtonClick();
    }
  };

  const handleCardClick = () => {
    if (onCardClick) {
      onCardClick();
    }
  };

  const tagColors = [
    "bg-blue-100 text-blue-700 hover:bg-blue-200",
    "bg-green-100 text-green-700 hover:bg-green-200",
    "bg-purple-100 text-purple-700 hover:bg-purple-200",
    "bg-orange-100 text-orange-700 hover:bg-orange-200",
    "bg-pink-100 text-pink-700 hover:bg-pink-200",
    "bg-indigo-100 text-indigo-700 hover:bg-indigo-200",
  ];

  const limitWords = (text, maxWords = 25) => {
    const words = text.trim().split(/\s+/);
    if (words.length <= maxWords) return text;
    return words.slice(0, maxWords).join(" ") + "...";
  };

  return (
    <React.Fragment>
      <div className={`w-full p-3 sm:p-4 md:p-6 ${className}`}>
        <Card
          className="group overflow-hidden bg-white rounded-lg sm:rounded-xl md:rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-[1.02] cursor-pointer relative flex flex-col h-full"
          onClick={handleCardClick}
        >
          {/* Image Header */}
          <CardHeader className="relative h-40 sm:h-48 md:h-56 lg:h-64 xl:h-72 flex items-center justify-center text-white p-0 overflow-hidden">
            <div className="image-container absolute inset-0">
              <div
                className="w-full h-full bg-cover bg-center bg-no-repeat transition-transform duration-700 group-hover:scale-110"
                style={{
                  backgroundImage: `url(${image})`,
                }}
              />

              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-all duration-300" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 h-20 sm:h-24 md:h-28 bg-gradient-to-t from-black/90 via-black/60 to-transparent" />
            </div>

            <div className="content-overlay relative z-20 flex flex-col items-center justify-center w-full h-full px-4 sm:px-6 md:px-8">
              <CardTitle className="absolute bottom-3 sm:bottom-4 md:bottom-6 right-3 sm:right-4 md:right-6 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold drop-shadow-2xl text-white transform group-hover:scale-105 transition-transform duration-300">
                {title}
              </CardTitle>
            </div>
          </CardHeader>

          {/* Card Content - Using flex-grow to push footer to bottom */}
          <CardContent className="content-section p-4 sm:p-5 md:p-6 lg:p-8 bg-gradient-to-b from-white to-gray-50/50 group-hover:from-blue-50/30 group-hover:to-purple-50/30 transition-all duration-300 flex flex-col flex-grow">
            {/* Main content */}
            <div className="flex-grow">
              <div className="content-text mb-4 sm:mb-5 md:mb-6">
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base md:text-lg group-hover:text-gray-800 transition-colors duration-300">
                  {limitWords(content)}
                </p>
              </div>

              {showTags && tags && tags.length > 0 && (
                <div className="features-section mb-4 sm:mb-5 md:mb-6">
                  <div className="flex flex-wrap gap-2 sm:gap-3">
                    {tags.map((tag, index) => (
                      <span
                        key={index}
                        className={`px-2 py-1 sm:px-3 sm:py-1.5 rounded-full text-xs sm:text-sm font-medium hover:scale-105 transition-all duration-200 cursor-pointer ${
                          tagColors[index % tagColors.length]
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Footer Section - Now uses flex and margin instead of absolute positioning */}
            <div className="mt-auto pt-4">
              {/* Button Section */}
              {showButton && (
                <div className="button-section mb-4 flex justify-end">
                  <button
                    className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors duration-300"
                    onClick={handleButtonClick}
                  >
                    <span className="font-medium">
                      {buttonText || "Learn More"}
                    </span>
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              )}

              {/* Stats Section */}
              {(showRating || showPrice) && (
                <div className="stats-section">
                  <div className="flex items-center justify-between pt-3 sm:pt-4 border-t border-gray-200 group-hover:border-gray-300 transition-colors duration-300">
                    {showRating && (
                      <div className="rating flex items-center gap-1 sm:gap-2">
                        <div className="stars text-yellow-400 group-hover:text-yellow-500 transition-colors duration-300 text-sm sm:text-base">
                          {"★".repeat(Math.floor(rating))}
                          {"☆".repeat(5 - Math.floor(rating))}
                        </div>
                        <span className="text-gray-600 text-xs sm:text-sm group-hover:text-gray-700 transition-colors duration-300">
                          {rating} ({reviewCount} reviews)
                        </span>
                      </div>
                    )}

                    {showPrice && (
                      <div className="price">
                        <span className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                          {price}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </React.Fragment>
  );
}

export default ReusableCard;
