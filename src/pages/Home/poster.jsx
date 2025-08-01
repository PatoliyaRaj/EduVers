import girls from '../../assets/imgs/girls.png'
import BlurText from './../../components/blureText';
import { React } from 'react';
// import '../../../public/global.css'; // Moved or removed: global CSS should be imported from src or referenced in index.html
function Poster() {
    return (
        <>
            <div className="w-full h-60 sm:h-72 md:h-80 lg:h-96 xl:h-[400px] bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 relative overflow-hidden rounded-xl shadow-lg z-index-10">

                <div className="absolute top-1/2 left-4 sm:left-6 md:left-8 lg:left-12 transform -translate-y-1/2 w-1/2 sm:w-2/5 md:w-1/2 lg:w-2/5 z-0">

                    <BlurText
                        text="Give Wings to Your Dreams"
                        delay={150}
                        animateBy="words"
                        direction="top"
                        className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-800 mb-4 sm:mb-6 leading-tight z-index-0"
                        easing="easeInOut"
                    />

                    <p className="text-xs sm:text-sm md:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed hidden sm:block">
                        Transform your aspirations into achievements with our comprehensive programs designed for success.
                    </p>

                    <button className="
            bg-gradient-to-r from-purple-500 to-pink-500 
            hover:from-purple-600 hover:to-pink-600 
            text-white font-semibold 
            px-4 sm:px-6 md:px-8 
            py-2 sm:py-3 
            rounded-full 
            text-xs sm:text-sm md:text-base
            transition-all duration-300 
            transform hover:scale-105 hover:shadow-lg
            focus:outline-none focus:ring-4 focus:ring-purple-300
            active:scale-95
          ">
                        Start Your Journey
                    </button>

                    <p className="text-xs text-gray-500 mt-3 sm:mt-4 hidden md:block">
                        Join thousands of successful learners
                    </p>
                </div>

                <div className="absolute top-4 right-4 w-8 h-8 sm:w-12 sm:h-12 bg-yellow-200 rounded-full opacity-30 animate-pulse"></div>
                <div className="absolute bottom-8 left-8 w-4 h-4 sm:w-6 sm:h-6 bg-blue-300 rounded-full opacity-40 "></div>

                <img
                    src={girls}
                    alt="Student with books and thumbs up gesture"
                    style={{filter:'drop-shadow(6px 4px 8px rgba(210, 51, 51, 0.47))'}}
                    className="
            absolute 
            bottom-0 
            right-2 sm:right-4 md:right-6 lg:right-8
            h-full
            w-auto
            object-contain
            object-bottom
            max-w-[40%] sm:max-w-[35%] md:max-w-[32%] lg:max-w-[28%] xl:max-w-[25%]
            animate-fade-in
            animate-duration-2000
            animate-ease-in-out
            drop-shadow-lg
          "
                />
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-transparent pointer-events-none"></div>
            </div>

        </>
    )
}

export default Poster