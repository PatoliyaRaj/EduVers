import React from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import { useGetAllCoursesQuery } from "../../redux";

export default function CardDetail() {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

const formatVideoUrl = (url) => {
  if (!url) return "";
  
  try {
    // Extract video ID from YouTube URL
    let videoId = "";
    
      if (url.includes("youtube.com/watch")) {
      // Regular YouTube URL
      const urlObj = new URL(url);
        videoId = urlObj.searchParams.get("v");
      } else if (url.includes("youtu.be/")) {
      // Shortened YouTube URL
        videoId = url.split("youtu.be/")[1].split("?")[0];
    }
    
    if (videoId) {
      return `https://www.youtube.com/embed/${videoId}`;
    }
    
    return url;
  } catch (error) {
    console.error("Error formatting video URL:", error);
    return url;
  }
};
  // RTK Query hook
  const { data: courses, isLoading, error } = useGetAllCoursesQuery();

  let card = location.state;
  
  if (!card && courses?.data) {
    card = courses.data.find((course) => course.id === id);
  }

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-[#D8A25E] mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading course details...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="text-center max-w-md mx-auto bg-white p-8 rounded-xl shadow-lg">
          <h2 className="text-xl font-bold text-red-600 mb-4">
            Error loading course details
          </h2>
          <p className="text-gray-700 mb-6">{error.message}</p>
          <button
            onClick={() => window.close()}
            className="bg-[#343131] text-white px-4 py-2 rounded-lg hover:bg-opacity-90"
          >
            Go Back to Courses
          </button>
        </div>
      </div>
    );
  }

  if (!card) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="text-center max-w-md mx-auto bg-white p-8 rounded-xl shadow-lg">
          <h2 className="text-xl font-bold text-[#343131] mb-4">
            Course not found
          </h2>
          <p className="text-gray-700 mb-6">
            The course you're looking for doesn't exist or has been removed.
          </p>
          <button
            onClick={() => window.close()}
            className="bg-[#343131] text-white px-4 py-2 rounded-lg hover:bg-opacity-90"
          >
            Go Back to Courses
          </button>
        </div>
      </div>
    );
  }

  const videoUrl = formatVideoUrl(card.videoUrl);

  // Return the course details UI
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4 sm:p-6 lg:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <button
            onClick={() => window.close()}
            className="flex items-center gap-2 text-[#D8A25E] hover:text-[#D8A25E]/80 transition-colors duration-200 mb-4"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Courses
          </button>

          <h1 className="text-3xl sm:text-4xl font-bold text-[#343131] mb-2">
            {card.title}
          </h1>

          {card.tags && card.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {card.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-[#D8A25E]/10 text-[#343131] rounded-full text-sm font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {card.rating && (
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <div className="flex text-[#D8A25E]">
                {"★".repeat(Math.floor(card.rating))}
                {"☆".repeat(5 - Math.floor(card.rating))}
              </div>
              <span>
                {card.rating} ({card.reviewCount || 0} reviews)
              </span>
            </div>
          )}
        </div>

        {/* Video Section */}
        {videoUrl ? (
          <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-6">
            <div className="aspect-video">
              <iframe
                src={videoUrl}
                title={card.title}
                allowFullScreen
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture,web-share"
                sandbox="allow-same-origin allow-scripts"
              ></iframe>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-6 aspect-video flex items-center justify-center">
            <div className="text-center">
              <p className="text-gray-500">
                No video available for this course
              </p>
            </div>
          </div>
        )}

        {/* Description Section */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <h2 className="text-xl font-semibold text-[#343131] mb-4">
            About This Course
          </h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            {card.description || card.content || "No description available."}
          </p>
        </div>
      </div>
    </div>
  );
}
