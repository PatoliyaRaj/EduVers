


import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "../../../components/Card";
import { TwitterIcon, InstagramIcon, Facebook, Github } from "lucide-react";

// Individual Teacher Card Component
export function TeacherCard({ teacher }) {
  const { name, role, description, image, socialLinks } = teacher;

  return (
    <React.Fragment>
    <Card className="hover:shadow-lg transition-shadow duration-300 p-4">
      <CardHeader className="flex flex-col items-center pb-3">
        <img
          src={image}
          alt={name}
          className="hover:scale-110 transition-all duration-200 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full object-cover border-2 border-gray-300 mb-2"
        />
        <CardTitle className="text-base sm:text-lg md:text-xl text-center">
          {name}
        </CardTitle>
        <CardDescription className="text-center text-sm sm:text-base max-w-xs">
          {role}
        </CardDescription>
      </CardHeader>
      <CardContent className="py-2">
        <CardDescription className="text-center font-semibold font-serif text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed">
          {description}
        </CardDescription>
      </CardContent>
      <CardFooter className="pt-2">
        <div className="flex justify-center space-x-3 sm:space-x-4 w-full">
          {socialLinks?.twitter && (
            <button 
              type="button" 
              aria-label="Twitter" 
              className="focus:outline-none focus:ring-2 focus:ring-indigo-300 rounded"
              onClick={() => window.open(socialLinks.twitter, '_blank')}
            >
              <TwitterIcon className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 hover:text-indigo-500 hover:scale-110 transition-all duration-200 cursor-pointer" />
            </button>
          )}
          {socialLinks?.instagram && (
            <button 
              type="button" 
              aria-label="Instagram" 
              className="focus:outline-none focus:ring-2 focus:ring-red-300 rounded"
              onClick={() => window.open(socialLinks.instagram, '_blank')}
            >
              <InstagramIcon className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 hover:text-red-500 hover:scale-110 transition-all duration-200 cursor-pointer" />
            </button>
          )}
          {socialLinks?.facebook && (
            <button 
              type="button" 
              aria-label="Facebook" 
              className="focus:outline-none focus:ring-2 focus:ring-indigo-300 rounded"
              onClick={() => window.open(socialLinks.facebook, '_blank')}
            >
              <Facebook className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 hover:text-indigo-500 hover:scale-110 transition-all duration-200 cursor-pointer" />
            </button>
          )}
          {socialLinks?.github && (
            <button 
              type="button" 
              aria-label="Github" 
              className="focus:outline-none focus:ring-2 focus:ring-gray-300 rounded"
              onClick={() => window.open(socialLinks.github, '_blank')}
            >
              <Github className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 hover:text-black hover:scale-110 transition-all duration-200 cursor-pointer" />
            </button>
          )}
        </div>
      </CardFooter>
    </Card>
    </React.Fragment>
  );
}

// Main Teachers Component using map
function TeacherCards({ teachers = [] }) {
  return (
    <div className="w-full min-h-[320px] md:h-auto mt-8 sm:mt-10 md:mt-11 rounded-xl">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 p-4 sm:p-6">
        {teachers.map((teacher, index) => (
          <TeacherCard key={teacher.id || index} teacher={teacher} />
        ))}
      </div>
    </div>
  );
}
export default TeacherCards;