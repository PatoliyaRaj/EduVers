// import React from "react";
// import {
//   Card,
//   CardHeader,
//   CardDescription,
//   CardTitle,
//   CardContent,
// } from "../../components/Card";
// import GlassIcons from "../../components/glassIconpack";
// import { Code, Star , MoveRight } from "lucide-react";
// import { Badge } from "../../components/Badge";
// import { Link } from "react-router-dom";


// function CarouselCard() {
//   return (
//     <React.Fragment>
     

//       <React.Fragment>
//         <Card className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
//           <CardHeader className="rounded-t-2xl sm:rounded-t-3xl p-4 sm:p-6">
//             <CardTitle className="">
//               <div className="flex flex-col gap-3">
//                 {/* Top row: Icon + Title */}
//                 <div className="flex items-center gap-3">
//                   <div className="p-2 bg-white/20 rounded-xl backdrop-blur-sm">
//                     <GlassIcons
//                       icon={<Code className="w-4 h-4" />}
//                       color="blue"
//                       size="sm"
//                       showLabel={false}
//                       className=""
//                     />
//                   </div>
//                   <h1 className="text-lg sm:text-xl lg:text-2xl font-bold">
//                     JavaScript
//                   </h1>
//                 </div>

//                 {/* Bottom row: Badge + Rating */}
//                 <div className="flex items-center justify-between">
//                   <Badge className="hover:bg-yellow-400" variant="outline">
//                     Popular
//                   </Badge>
//                   <div className="flex items-center gap-1">
//                     <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
//                     <span className="text-sm font-medium">4.5</span>
//                   </div>
//                 </div>
//               </div>
//             </CardTitle>
//             <CardDescription className="mt-2 text-sm sm:text-base">
//               Programming and Web Development • Beginner Friendly
//             </CardDescription>
//           </CardHeader>

//           <CardContent className="flex flex-shrink-0">
//             <div className="flex flex-col gap-4 w-full">
//               <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
//                 This course dives deep into JavaScript's quirky type system,
//                 coercion rules, and comparison operators. You'll move beyond
//                 syntax memorization and learn to think like the JavaScript
//                 engine
//               </p>
//               <a
//                 href="/javascript"
//                 className="text-sm font-semibold flex items-center gap-1 hover:underline text-blue-600 hover:text-blue-800 transition-colors self-start"
//               >
//                 Learn More <MoveRight className="w-4 h-4" />
//               </a>
//             </div>
//           </CardContent>
//         </Card>
//       </React.Fragment>
//     </React.Fragment>
//   );
// }

// export default CarouselCard;



import React from "react";
import { Code, Database, Paintbrush, Globe, Smartphone, Brain } from "lucide-react";
import ReusableCarousel from './../../components/CarouselComp';

// Sample data structure for the carousel
const courseData = [
  {
    id: 1,
    title: "JavaScript",
    icon: <Code className="w-4 h-4" />,
    iconColor: "blue",
    badge: "Popular",
    rating: "4.5",
    category: "Programming and Web Development",
    level: "Beginner Friendly",
    description: "This course dives deep into JavaScript's quirky type system, coercion rules, and comparison operators. You'll move beyond syntax memorization and learn to think like the JavaScript engine.",
    link: "/cour"
  },
  {
    id: 2,
    title: "React.js",
    icon: <Code className="w-4 h-4" />,
    iconColor: "cyan",
    badge: "Hot",
    rating: "4.8",
    category: "Frontend Development",
    level: "Intermediate",
    description: "Master React hooks, state management, and component lifecycle. Build modern, scalable web applications with the most popular JavaScript library.",
    link: "/cour"
  },
  {
    id: 3,
    title: "Node.js",
    icon: <Database className="w-4 h-4" />,
    iconColor: "green",
    badge: "In-Demand",
    rating: "4.6",
    category: "Backend Development",
    level: "Intermediate",
    description: "Learn server-side JavaScript, API development, database integration, and deployment. Build full-stack applications from scratch.",
    link: "/cour"
  },
  {
    id: 4,
    title: "UI/UX Design",
    icon: <Paintbrush className="w-4 h-4" />,
    iconColor: "purple",
    badge: "Creative",
    rating: "4.7",
    category: "Design",
    level: "Beginner Friendly",
    description: "Master design principles, user research, wireframing, and prototyping. Create beautiful and functional user experiences.",
    link: "/cour"
  },
  {
    id: 5,
    title: "Full Stack",
    icon: <Globe className="w-4 h-4" />,
    iconColor: "orange",
    badge: "Complete",
    rating: "4.9",
    category: "Web Development",
    level: "Advanced",
    description: "Comprehensive full-stack development covering frontend, backend, databases, and deployment. Become a complete web developer.",
    link: "/cour"
  },
  {
    id: 6,
    title: "Mobile Dev",
    icon: <Smartphone className="w-4 h-4" />,
    iconColor: "red",
    badge: "Trending",
    rating: "4.4",
    category: "Mobile Development",
    level: "Intermediate",
    description: "Build native and cross-platform mobile applications using React Native and modern development practices.",
    link: "/cour"
  },
  {
    id: 7,
    title: "Machine Learning",
    icon: <Brain className="w-4 h-4" />,
    iconColor: "indigo",
    badge: "Future",
    rating: "4.3",
    category: "AI & Machine Learning",
    level: "Advanced",
    description: "Dive into algorithms, neural networks, and AI development. Learn to build intelligent applications and systems.",
    link: "/cour"
  }
];

function TempShow() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Featured Courses
          </h1>
          <p className="text-xl text-gray-600">
            Discover our most popular programming and development courses
          </p>
        </div>
        
        <ReusableCarousel 
          items={courseData} 
          cardsPerPage={3} 
        />
      </div>
    </div>
  );
}

export default TempShow;