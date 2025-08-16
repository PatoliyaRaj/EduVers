import React, { useState } from "react";
import { Card } from "../../components/Card";

const BenefitCard = ({ number, title, description, className = "" }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const getWordCount = (text) => text.trim().split(/\s+/).length;

  const getTruncatedText = (text, wordLimit = 20) => {
    const words = text.trim().split(/\s+/);
    return words.length <= wordLimit
      ? text
      : words.slice(0, wordLimit).join(" ");
  };

  const wordCount = getWordCount(description);
  const needsTruncation = wordCount > 20;
  const displayText =
    needsTruncation && !isExpanded
      ? getTruncatedText(description, 20)
      : description;

  return (
    <Card
      className={`text-start p-6 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col gap-4 border border-gray-100 hover:border-blue-200 ${className}`}
    >
      <div className="flex items-center justify-center h-12 w-12 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full text-blue-700 font-bold text-lg shadow-sm">
        {String(number).padStart(2, "0")}
      </div>

      <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 leading-tight">
        {title}
      </h3>

      <div className="text-gray-600 leading-relaxed text-sm sm:text-base md:text-lg">
        <p className="mb-0">
          {displayText}
          {needsTruncation && !isExpanded && (
            <>
              {" "}
              <button
                onClick={() => setIsExpanded(true)}
                className="text-purple-600 hover:text-blue-600 font-medium underline transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50 rounded"
              >
                read more
              </button>
            </>
          )}
          {needsTruncation && isExpanded && (
            <>
              {" "}
              <button
                onClick={() => setIsExpanded(false)}
                className="text-blue-600 hover:text-blue-800 font-medium underline transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50 rounded"
              >
                read less
              </button>
            </>
          )}
        </p>
      </div>
    </Card>
  );
};

const benefitsData = [
  {
    id: 1,
    title: "Expert-Led Courses",
    description:
      "Access high-quality courses taught by industry experts and professionals. Our instructors bring real-world experience and cutting-edge knowledge to help you learn practical skills that are immediately applicable in your career. Each course is carefully curated to ensure you receive the most up-to-date and relevant information in your field of study.",
  },
  {
    id: 2,
    title: "Flexible Learning",
    description:
      "Learn at your own pace with our flexible scheduling system. Whether you're a working professional, student, or busy parent, our platform adapts to your lifestyle. Access courses 24/7 from any device, pause and resume lessons as needed, and create a learning schedule that works perfectly with your personal and professional commitments.",
  },
  {
    id: 3,
    title: "Wide Course Variety",
    description:
      "Explore a diverse range of courses across various subjects and industries. Whether you're interested in technology, business, arts, or personal development, EduVers offers a wide selection of courses to cater to your interests and career goals. Our platform is designed to help you discover new passions and expand your skill set.",
  },
  {
    id: 4,
    title: "Expert Instructors",
    description:
      "Learn from industry experts and experienced educators who are passionate about teaching. Our instructors bring real-world experience and insights to the classroom, ensuring you receive a high-quality education that is both practical and relevant. With personalized support and guidance, you can achieve your learning goals and excel in your chosen field.",
  },
  {
    id: 5,
    title: "Affordable Learning",
    description:
      "EduVers makes quality education affordable and accessible for everyone. With budget-friendly pricing plans and lifetime access to purchased courses, learners can invest in their future without financial stress. Education should empower, not burden — and EduVers is committed to making that possible.",
  },
  {
    id: 6,
    title: "24/7 Support",
    description:
      "EduVers provides round-the-clock support to ensure you have the assistance you need, whenever you need it. Our dedicated support team is available 24/7 to help you with any questions or issues you may encounter on your learning journey. Whether you need technical support, guidance on course selection, or assistance with assignments, we're here to help you succeed.",
  },
];

function BenefCards() {
  return (
    <React.Fragment>
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 sm:gap-6 lg:gap-8 mt-8 px-4 sm:px-6 lg:px-12">
        {benefitsData.map((benefit) => (
          <BenefitCard
            key={benefit.id}
            number={benefit.id}
            title={benefit.title}
            description={benefit.description}
            className="transform hover:scale-105"
          />
        ))}
      </section>
    </React.Fragment>
  );
}

export default BenefCards;
