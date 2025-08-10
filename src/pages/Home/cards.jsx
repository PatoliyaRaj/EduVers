
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/Card';
import computerImg from '../../assets/imgs/comp.png';
// import teacherImg from '../../assets/imgs/boypng.PNG';
import { ArrowRight } from 'lucide-react';

function Cards() {
  return (
    <div className="w-full min-w-[300px] flex flex-shrink-0 flex-row gap-10  sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-2xl  2xl:max-w-2xl justify-between item-center p-3 sm:p-4 md:p-6">
      <Card className="group overflow-hidden bg-white rounded-lg sm:rounded-xl md:rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-[1.02]">
        
        {/* Card Header with Background Image */}
        <CardHeader className="relative h-40 sm:h-48 md:h-56 lg:h-64 xl:h-72 flex items-center justify-center text-white p-0 overflow-hidden">
          
          {/* Background Image Container */}
          <div className="image-container absolute inset-0">
            <div 
              className="w-full h-full bg-cover bg-center bg-no-repeat transition-transform duration-700 group-hover:scale-110"
              style={{
                backgroundImage: `url(${computerImg})`
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
              Tech Innovation
            </CardTitle>
            
            {/* Card Description - Center */}
            <CardDescription className="text-center text-gray-100 text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed drop-shadow-lg max-w-[80%] mb-4 sm:mb-6 md:mb-8 opacity-90 group-hover:opacity-100 transition-opacity duration-300">
              Cutting-edge technology solutions for modern digital transformation
            </CardDescription>
            
          </div>
        </CardHeader>
        
        {/* Card Content */}
        <CardContent className="content-section p-4 sm:p-5 md:p-6 lg:p-8 bg-gradient-to-b from-white to-gray-50/50 group-hover:from-blue-50/30 group-hover:to-purple-50/30 transition-all duration-300">
          
          {/* Content Description */}
          <div className="content-text mb-4 sm:mb-5 md:mb-6">
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base md:text-lg group-hover:text-gray-800 transition-colors duration-300">
              Discover innovative solutions that drive business growth and digital excellence. 
            </p>
          </div>
          
          {/* Features Tags */}
      
          
          {/* Action Button */}
          <div className="button-section mb-4 sm:mb-5 md:mb-6 relative my-2 py-5">
              <span className="flex items-center justify-center gap-2 absolute  right-0  bottom-0">
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
          </div>
          
          {/* Stats Section */}
          <div className="stats-section">
            <div className="flex items-center justify-between pt-3 sm:pt-4 border-t border-gray-200 group-hover:border-gray-300 transition-colors duration-300">
              
              {/* Rating */}
              <div className="rating flex items-center gap-1 sm:gap-2">
                <div className="stars text-yellow-400 group-hover:text-yellow-500 transition-colors duration-300 text-sm sm:text-base">
                  ★★★★★
                </div>
                <span className="text-gray-600 text-xs sm:text-sm group-hover:text-gray-700 transition-colors duration-300">
                  4.9 (127 reviews)
                </span>
              </div>
              
              {/* Price */}
              <div className="price">
                <span className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                  $299
                </span>
              </div>
              
            </div>
          </div>
          
        </CardContent>
        
      </Card>
    </div>
  );
}

export default Cards;