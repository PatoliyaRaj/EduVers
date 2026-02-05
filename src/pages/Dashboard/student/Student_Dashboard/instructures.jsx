import InstructorCard from "./InstructorCard";
import { instructorsData } from "./instructorsData";

function Instructures() {
  return (
    <section className="pt-8 md:pt-12 lg:pt-16 pb-3 md:pb-6 lg:pb-12">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-extrabold flex items-center gap-2 text-slate-900 dark:text-white">
          <span className="w-1.5 h-8 bg-studprimary dark:bg-premium-gold rounded-full shadow-[0_0_10px_#B08D57]"></span>
          Top Instructors
        </h3>
        {/* <a className="text-sm font-bold text-[#b48c4c] hover:underline" href="#">
          View All
        </a> */}
      </div>
      <div className="flex gap-6 overflow-x-auto pb-4 hide-scrollbar">
        {instructorsData.map((instructor) => (
          <InstructorCard
            key={instructor.id}
            name={instructor.name}
            specialty={instructor.specialty}
            image={instructor.image}
            icon={instructor.icon}
          />
        ))}
      </div>
    </section>
  );
}

export default Instructures;
