import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../../components/Card";
import { ArrowRight } from "lucide-react";

const defaultProps = {
  title: "Card Title",
  description: "Card description goes here",
  content: "Discover amazing features and benefits.",
  rating: 4.9,
  reviewCount: 127,
  price: "₹299",
  buttonText: "Learn More",
  tags: ["Feature 1", "Feature 2", "Feature 3"],
  showButton: true,
  showRating: true,
  showPrice: true,
  showTags: true,
  className: "",
};

function ReusableCard({
  image,
  title = defaultProps.title,
  description = defaultProps.description,
  content = defaultProps.content,
  rating = defaultProps.rating,
  reviewCount = defaultProps.reviewCount,
  price = defaultProps.price,
  buttonText = defaultProps.buttonText,
  tags = defaultProps.tags,
  showButton = defaultProps.showButton,
  showRating = defaultProps.showRating,
  showPrice = defaultProps.showPrice,
  showTags = defaultProps.showTags,
  className = defaultProps.className,
  onButtonClick,
  onCardClick,
}) {
  // Handle button click
  const handleButtonClick = (e) => {
    e.stopPropagation(); // Prevent card click if both handlers exist
    if (onButtonClick) {
      onButtonClick();
    }
  };

  // Handle card click
  const handleCardClick = () => {
    if (onCardClick) {
      onCardClick();
    }
  };

  // Generate tag colors dynamically
  const tagColors = [
    "bg-blue-100 text-blue-700 hover:bg-blue-200",
    "bg-green-100 text-green-700 hover:bg-green-200",
    "bg-purple-100 text-purple-700 hover:bg-purple-200",
    "bg-orange-100 text-orange-700 hover:bg-orange-200",
    "bg-pink-100 text-pink-700 hover:bg-pink-200",
    "bg-indigo-100 text-indigo-700 hover:bg-indigo-200",
  ];

  return (
    <React.Fragment>
      <div
        className={`w-full min-w-[300px] flex flex-shrink-0 flex-row gap-10 sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-2xl 2xl:max-w-2xl justify-between item-center p-3 sm:p-4 md:p-6 ${className}`}
      >
        <Card
          className="group overflow-hidden bg-white rounded-lg sm:rounded-xl md:rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-[1.02] cursor-pointer"
          onClick={handleCardClick}
        >
          {/* Card Header with Background Image */}
          <CardHeader className="relative h-40 sm:h-48 md:h-56 lg:h-64 xl:h-72 flex items-center justify-center text-white p-0 overflow-hidden">
            {/* Background Image Container */}
            <div className="image-container absolute inset-0">
              <div
                className="w-full h-full bg-cover bg-center bg-no-repeat transition-transform duration-700 group-hover:scale-110"
                style={{
                  backgroundImage: `url(${image})`,
                }}
              />

              {/* Base overlay for image darkness */}
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-all duration-300" />

              {/* Bottom shadow gradient for title visibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Additional shadow specifically for bottom area */}
              <div className="absolute bottom-0 left-0 right-0 h-20 sm:h-24 md:h-28 bg-gradient-to-t from-black/90 via-black/60 to-transparent" />
            </div>

            {/* Content Overlay */}
            <div className="content-overlay relative z-20 flex flex-col items-center justify-center w-full h-full px-4 sm:px-6 md:px-8">
              {/* Card Title - Bottom Right */}
              <CardTitle className="absolute bottom-3 sm:bottom-4 md:bottom-6 right-3 sm:right-4 md:right-6 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold drop-shadow-2xl text-white transform group-hover:scale-105 transition-transform duration-300">
                {title}
              </CardTitle>

              {/* Card Description - Center */}
              {/* <CardDescription className="text-start hidden text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed drop-shadow-lg max-w-[80%] mb-4 sm:mb-6 md:mb-8 opacity-90 group-hover:opacity-100 transition-opacity duration-300 ">
               {description} 
              </CardDescription> */}
            </div>
          </CardHeader>

          {/* Card Content */}
          <CardContent className="content-section p-4 sm:p-5 md:p-6 lg:p-8 bg-gradient-to-b from-white to-gray-50/50 group-hover:from-blue-50/30 group-hover:to-purple-50/30 transition-all duration-300">
            {/* Content Description */}
            <div className="content-text mb-4 sm:mb-5 md:mb-6">
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base md:text-lg group-hover:text-gray-800 transition-colors duration-300">
                {content}
              </p>
            </div>

            {/* Features Tags */}
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

            {/* Action Button */}
            {showButton && (
              <div className="button-section mb-4 sm:mb-5 md:mb-6 relative my-2 py-5">
                <span
                  className="flex items-center justify-center gap-2 absolute right-0 bottom-0 cursor-pointer text-blue-600 hover:text-blue-800 transition-colors duration-300"
                  onClick={handleButtonClick}
                >
                  <span className="font-medium">{buttonText}</span>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </div>
            )}

            {/* Stats Section */}
            {(showRating || showPrice) && (
              <div className="stats-section">
                <div className="flex items-center justify-between pt-3 sm:pt-4 border-t border-gray-200 group-hover:border-gray-300 transition-colors duration-300">
                  {/* Rating */}
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

                  {/* Price */}
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
          </CardContent>
        </Card>
      </div>
    </React.Fragment>
  );
}

export default ReusableCard;

// ============================================================================
// USAGE EXAMPLES AND DOCUMENTATION
// ============================================================================

/* 
// Example 1: Basic Usage
import ReusableCard from './components/ReusableCard';
import computerImg from './assets/imgs/comp.png';

<ReusableCard 
  image={computerImg}
  title="Tech Innovation"
  description="Cutting-edge technology solutions"
  content="Discover innovative solutions that drive business growth."
/>

// Example 2: Full Featured Card
<ReusableCard 
  image={computerImg}
  title="Advanced Course"
  description="Master modern web development"
  content="Learn React, Node.js, and modern development practices with hands-on projects."
  rating={4.8}
  reviewCount={89}
  price="$199"
  buttonText="Enroll Now"
  tags={['React', 'JavaScript', 'Web Dev']}
  onButtonClick={() => console.log('Button clicked!')}
  onCardClick={() => console.log('Card clicked!')}
/>

// Example 3: Minimal Card (No extras)
<ReusableCard 
  image={computerImg}
  title="Simple Card"
  description="Just the basics"
  content="A clean, simple card design."
  showButton={false}
  showRating={false}
  showPrice={false}
  showTags={false}
/>

// Example 4: Custom Styling
<ReusableCard 
  image={computerImg}
  title="Custom Styled"
  description="With custom classes"
  content="This card has custom styling applied."
  className="my-custom-class"
  tags={['Custom', 'Styled', 'Unique', 'Special']}
/>

// Example 5: Event Handling
<ReusableCard 
  image={computerImg}
  title="Interactive Card"
  description="With click handlers"
  content="Click the card or button to see different actions."
  onCardClick={() => {
    // Handle card click - maybe navigate to detail page
    window.location.href = '/details/123';
  }}
  onButtonClick={() => {
    // Handle button click - maybe add to cart
    console.log('Added to cart!');
  }}
/>

// Example 6: Dynamic Data from API
const cardData = {
  image: '/api/images/product1.jpg',
  title: 'Product Name',
  description: 'Product short description',
  content: 'Detailed product information and benefits.',
  rating: 4.5,
  reviewCount: 156,
  price: '$299',
  tags: ['Popular', 'New', 'Premium']
};

<ReusableCard {...cardData} />
*/

// ============================================================================
// PROPS DOCUMENTATION
// ============================================================================

/*
REQUIRED PROPS:
- image (string): Image URL or imported image for the card background

OPTIONAL PROPS:
- title (string): Card title text [default: "Card Title"]
- description (string): Card description text [default: "Card description goes here"]
- content (string): Main content text [default: "Discover amazing features and benefits."]
- rating (number): Star rating (1-5) [default: 4.9]
- reviewCount (number): Number of reviews [default: 127]
- price (string): Price display text [default: "$299"]
- buttonText (string): Button label text [default: "Learn More"]
- tags (array): Array of tag strings [default: ["Feature 1", "Feature 2", "Feature 3"]]

VISIBILITY CONTROLS:
- showButton (boolean): Show/hide action button [default: true]
- showRating (boolean): Show/hide rating section [default: true]
- showPrice (boolean): Show/hide price [default: true]
- showTags (boolean): Show/hide tags section [default: true]

STYLING:
- className (string): Additional CSS classes [default: ""]

EVENT HANDLERS:
- onButtonClick (function): Called when button is clicked
- onCardClick (function): Called when card is clicked

RESPONSIVE BREAKPOINTS:
- Mobile: 300px+ (compact layout)
- Small: 384px+ (sm: prefix)
- Medium: 448px+ (md: prefix)
- Large: 512px+ (lg: prefix)
- Extra Large: 576px+ (xl: prefix)
- 2X Large: 672px+ (2xl: prefix)
*/
