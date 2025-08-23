import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import courses from "./dataof_course";
import ReusableCard from "./cards";

function Coursecards() {
  const sectionRef = useRef(null);
  const cardsContainerRef = useRef(null);
  

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const isDesktop = window.innerWidth >= 1024;

    if (isDesktop && cardsContainerRef.current && sectionRef.current) {
      let ctx = gsap.context(() => {
        // Get container and calculate scroll distance
        const container = cardsContainerRef.current;
        const containerWidth = container.scrollWidth;
        const viewportWidth = window.innerWidth;
        const scrollDistance = -(containerWidth - viewportWidth + 50); 

        gsap.to(container, {
          x: scrollDistance,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: () => `+=${containerWidth}`,
            scrub: 1,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            onUpdate: (self) => {},
          },
        });
      }, sectionRef);

      return () => ctx.revert();
    }

    // Refresh ScrollTrigger on window resize
    const handleResize = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <section
        ref={sectionRef}
        className="hidden lg:block h-screen bg-gray-900 overflow-hidden"
      >
        <div className="h-full flex items-center ">
          <div
            ref={cardsContainerRef}
            className="flex gap-8 px-8"
            style={{
              width: "max-content",
            }}
          >
            {courses.map((course, index) => (
              <div key={index} className="flex-shrink-0  ">
                <ReusableCard
                  image={course.image}
                  title={course.title}
                  description={course.description}
                  content={course.content}
                  rating={course.rating}
                  reviewCount={course.reviewCount}
                  price={false}
                  buttonText={course.buttonText}
                  tags={course.tags}
                  onButtonClick={course.onButtonClick}
                  onCardClick={course.onCardClick}
                
                />
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70 text-sm flex items-center gap-2 lg:bottom-3">
          <div className="w-6 h-1 bg-white/30 rounded">
            <div className="w-2 h-1 bg-white rounded animate-pulse"></div>
          </div>
          <span>Scroll to explore courses</span>
        </div>
      </section>

      <section className="hidden md:block lg:hidden min-h-screen bg-gray-900 py-16">
        <div className="container mx-auto px-6">
          <div className="flex gap-6 overflow-x-auto pb-6 scrollbar-hide">
            {courses.slice(0, 3).map((course, index) => (
              <div key={index} className="flex-shrink-0 w-34">
                <ReusableCard
                  image={course.image}
                  title={course.title}
                  description={course.description}
                  content={course.content}
                  rating={course.rating}
                  reviewCount={course.reviewCount}
                  price={false}
                  buttonText={course.buttonText}
                  tags={course.tags}
                  onButtonClick={course.onButtonClick}
                  onCardClick={course.onCardClick}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="md:hidden min-h-screen bg-gray-900 py-8">
        <div className="container mx-auto px-4">
          <div className="grid gap-6">
            {courses.slice(0, 3).map((course, index) => (
              <div key={index} className="w-full">
                <ReusableCard
                  image={course.image}
                  title={course.title}
                  description={course.description}
                  content={course.content}
                  rating={course.rating}
                  reviewCount={course.reviewCount}
                  price={false}
                  buttonText={course.buttonText}
                  tags={course.tags}
                  onButtonClick={course.onButtonClick}
                  onCardClick={course.onCardClick}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Coursecards;
