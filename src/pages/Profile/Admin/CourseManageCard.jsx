import React from "react";
import { BookOpen, Tag, Play, Trash2, Edit, Eye } from "lucide-react";
import { Link } from "react-router-dom";

const CourseCard = ({
  title = "Course Title",
  image = "/placeholder.jpg",
  description = "Course description goes here",
  category = "General",
  videoUrl = "",
  id = "",
  tags = [],
  onDelete = () => {},
  onEdit = () => {},
  onView = () => {},
}) => {
  const limitWords = (text, maxWords = 20) => {
    const words = text.trim().split(/\s+/);
    if (words.length <= maxWords) return text;
    return words.slice(0, maxWords).join(" ") + "...";
  };
  return (
    <React.Fragment>
      <div className="flex flex-col rounded-lg overflow-hidden bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
        {/* Course Image */}
        <div className="relative w-full h-48 overflow-hidden bg-gray-100">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.src =
                "https://via.placeholder.com/400x200?text=Course+Image";
            }}
          />
          <div className="absolute top-0 right-0 m-3">
            <span className="px-3 py-1 bg-[#343131]/80 text-white text-xs font-medium rounded-full">
              {category}
            </span>
          </div>
        </div>

        {/* Course Content */}
        <div className="flex-1 flex flex-col p-4">
          {/* Title and Category */}
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-lg font-semibold text-[#343131] line-clamp-1">
              {title}
            </h3>
          </div>

          {/* Description */}
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">
            {limitWords(description)}
          </p>

          {/* Tags and Video Button */}
          <div className="flex justify-between items-center mb-4">
            <div className="flex flex-wrap gap-1">
              {tags &&
                tags.length > 0 &&
                tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-[#D8A25E]/10 text-[#343131] text-xs rounded-md flex items-center"
                  >
                    <Tag size={12} className="mr-1 text-[#D8A25E]" />
                    {tag}
                  </span>
                ))}
            </div>

            {videoUrl && (
              <div className="ml-2 flex-shrink-0">
                <Link
                  to={`/card/${id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-[#D8A25E] rounded-full text-white hover:bg-[#D8A25E]/90 transition-colors flex items-center gap-1"
                  title="Watch Video"
                >
                  <Play size={14} />
                  <span className="text-xs hidden sm:inline">Watch</span>
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="border-t border-gray-100 p-3 bg-gray-50 flex justify-between items-center">
          <div className="flex items-center text-xs text-gray-500">
            <BookOpen size={14} className="mr-1" />
            <span>{category}</span>
          </div>

          <div className="flex gap-2">
            <button
              onClick={onView}
              className="p-1.5 rounded-md bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors"
              title="View Course"
            >
              <Eye size={16} />
            </button>
            <button
              onClick={onEdit}
              className="p-1.5 rounded-md bg-[#D8A25E]/10 text-[#343131] hover:bg-[#D8A25E]/20 transition-colors"
              title="Edit Course"
            >
              <Edit size={16} />
            </button>
            <button
              onClick={onDelete}
              className="p-1.5 rounded-md bg-red-50 text-red-600 hover:bg-red-100 transition-colors"
              title="Delete Course"
            >
              <Trash2 size={16} />
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CourseCard;
