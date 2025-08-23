import { useLocation, useParams, useNavigate } from "react-router-dom";
import DataOfCourse from "./DataOfCourses";

export default function CardDetail() {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  // Get card from state or find it in DataOfCourse by ID
  let card = location.state;

  if (!card) {
    card = DataOfCourse.find((course) => course.id === parseInt(id));
  }

  if (!card) {
    return (
      <div className="p-6">
        <h2 className="text-xl font-bold">Course not found</h2>
        <button
          onClick={() => navigate("/courses")}
          className="mt-3 bg-gray-700 text-white px-4 py-2 rounded"
        >
          Go Back to Courses
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4 sm:p-6 lg:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <button
            onClick={() => navigate("/courses")}
            className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors duration-200 mb-4"
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

          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-2">
            {card.title}
          </h1>

          {card.tags && card.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {card.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {card.rating && (
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <div className="flex text-yellow-400">
                {"★".repeat(Math.floor(card.rating))}
                {"☆".repeat(5 - Math.floor(card.rating))}
              </div>
              <span>
                {card.rating} ({card.reviewCount} reviews)
              </span>
            </div>
          )}
        </div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-6">
          <div className="aspect-video">
            <iframe
              width="100%"
              height="100%"
              src={card.videoUrl}
              title={card.title}
              allowFullScreen
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            />
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            About This Course
          </h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            {card.content}
          </p>
        </div>
      </div>
    </div>
  );
}
