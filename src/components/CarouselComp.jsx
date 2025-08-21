import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { Link } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardDescription,
  CardTitle,
  CardContent,
} from "./Card";
import { Star, MoveRight } from "lucide-react";

import GlassIcons from './glassIconpack';
import { Badge } from './Badge';

export default function ReusableCarousel({ items, cardsPerPage = 4 }) {
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(items.length / cardsPerPage);
  const containerRef = useRef(null);

  // Animate slide change
  useEffect(() => {
    gsap.fromTo(
      containerRef.current,
      { x: 50, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.6, ease: "power3.out" }
    );
  }, [page]);

  const goToPage = (index) => {
    setPage(index);
  };

  const visibleCards = items.slice(
    page * cardsPerPage,
    page * cardsPerPage + cardsPerPage
  );

  return (
    <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-[5%] py-4 sm:py-6">
      {/* Card Container */}
      <div
        ref={containerRef}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-3 sm:gap-6"
      >
        {visibleCards.map((item, index) => (
          <Card 
            key={item.id}
            className="w-full min-h-[300px] sm:min-h-[350px] lg:min-h-[400px] rounded-xl sm:rounded-2xl lg:rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 relative"
          >
            <CardHeader className="rounded-t-xl sm:rounded-t-2xl lg:rounded-t-3xl p-3 sm:p-4 lg:p-6">
              <CardTitle>
                <div className="flex flex-col gap-2 sm:gap-3">
                  {/* Top row: Icon + Title */}
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="p-1.5 sm:p-2 bg-white/20 rounded-none backdrop-blur-sm">
                      <GlassIcons
                        icon={item.icon}
                        color={item.iconColor || "blue"}
                        size="sm"
                        showLabel={false}
                        className=""
                      />
                    </div>
                    <h1 className="text-sm sm:text-lg md:text-xl lg:text-2xl font-bold leading-tight">
                      {item.title}
                    </h1>
                  </div>

                  {/* Bottom row: Badges + Rating */}
                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-1 sm:gap-2">
                      {/* Primary Badge */}
                      {item.badge && (
                        <Badge 
                          className="hover:bg-yellow-400 text-xs sm:text-sm px-2 py-1" 
                          variant="outline"
                        >
                          {item.badge}
                        </Badge>
                      )}
                      
                      {item.badges && item.badges.map((badge, index) => (
                        <Badge 
                          key={index}
                          className={`text-xs sm:text-sm px-2 py-1 ${
                            badge.variant === 'popular' ? 'hover:bg-yellow-400 bg-yellow-100 text-yellow-800' :
                            badge.variant === 'new' ? 'hover:bg-green-400 bg-green-100 text-green-800' :
                            badge.variant === 'bestseller' ? 'hover:bg-red-400 bg-red-100 text-red-800' :
                            badge.variant === 'featured' ? 'hover:bg-purple-400 bg-purple-100 text-purple-800' :
                            badge.variant === 'premium' ? 'hover:bg-blue-400 bg-blue-100 text-blue-800' :
                            'hover:bg-gray-400 bg-gray-100 text-gray-800'
                          }`}
                          variant={badge.variant || "outline"}
                        >
                          {badge.text || badge}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-3 h-3 sm:w-4 sm:h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-xs sm:text-sm font-medium">{item.rating}</span>
                    </div>
                  </div>
                </div>
              </CardTitle>
              <CardDescription className="mt-1 sm:mt-2 text-xs sm:text-sm lg:text-base">
                {item.category} • {item.level}
              </CardDescription>
            </CardHeader>

            <CardContent className="flex flex-shrink-0 p-3 sm:p-4 lg:p-6 pb-12 sm:pb-16">
              <div className="flex flex-col gap-2 sm:gap-4 w-full">
                <p className="text-xs sm:text-sm lg:text-base text-gray-700 leading-relaxed line-clamp-3 sm:line-clamp-4">
                  {item.description}
                </p>
                <Link
                  to={item.link || "/courses"}
                  className="text-xs sm:text-sm font-semibold flex items-center gap-1 hover:underline text-blue-600 hover:text-blue-800 transition-colors self-start absolute bottom-2 sm:bottom-4 right-3 sm:right-4"
                >
                  Learn More <MoveRight className="w-3 h-3 sm:w-4 sm:h-4" />
                </Link>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-4 sm:mt-6 space-x-1 sm:space-x-2">
        {Array.from({ length: totalPages }).map((_, index) => (
          <span
            key={index}
            onClick={() => goToPage(index)}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full cursor-pointer transition-all duration-200 hover:scale-110 ${
              page === index ? "bg-blue-400 shadow-md" : "bg-gray-300 hover:bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}