import React from "react";
import ReusableCarousel from "../../../components/CarouselComp";
import courses from "./data";

const courseData = courses;

function TempShow() {
  return (
    <React.Fragment>
      <div className="min-h-screen/2 bg-gray-50">
        <div className="container mx-auto py-16">
          <ReusableCarousel items={courseData} cardsPerPage={3} />
        </div>
      </div>
    </React.Fragment>
  );
}

export default TempShow;
