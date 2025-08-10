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

export default function ReusableCarousel({ items, cardsPerPage = 3 }) {
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
    <div className="max-w-full mx-auto px-[5%] py-6">
      {/* Card Container */}
      <div
        ref={containerRef}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
      >
        {visibleCards.map((item, index) => (
          <Card 
            key={item.id}
            className="w-full min-h-[400px] rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            <CardHeader className="rounded-t-2xl sm:rounded-t-3xl p-4 sm:p-6">
              <CardTitle>
                <div className="flex flex-col gap-3">
                  {/* Top row: Icon + Title */}
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-white/20 rounded-xl backdrop-blur-sm">
                      <GlassIcons
                        icon={item.icon}
                        color={item.iconColor || "blue"}
                        size="sm"
                        showLabel={false}
                        className=""
                      />
                    </div>
                    <h1 className="text-lg sm:text-xl lg:text-2xl font-bold">
                      {item.title}
                    </h1>
                  </div>

                  {/* Bottom row: Badge + Rating */}
                  <div className="flex items-center justify-between">
                    <Badge 
                      className="hover:bg-yellow-400" 
                      variant="outline"
                    >
                      {item.badge}
                    </Badge>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{item.rating}</span>
                    </div>
                  </div>
                </div>
              </CardTitle>
              <CardDescription className="mt-2 text-sm sm:text-base">
                {item.category} • {item.level}
              </CardDescription>
            </CardHeader>

            <CardContent className="flex flex-shrink-0">
              <div className="flex flex-col gap-4 w-full">
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  {item.description}
                </p>
                <Link
                  to={item.link || "/courses"}
                  className="text-sm pt-10 font-semibold flex items-center gap-1 hover:underline text-blue-600 hover:text-blue-800 transition-colors self-start absolute bottom-4 right-4"
                >
                  Learn More <MoveRight className="w-4 h-4" />
                </Link>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-5 space-x-2">
        {Array.from({ length: totalPages }).map((_, index) => (
          <span
            key={index}
            onClick={() => goToPage(index)}
            className={`w-3 h-3 rounded-full cursor-pointer transition-colors ${
              page === index ? "bg-teal-500" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}