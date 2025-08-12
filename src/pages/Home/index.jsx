import React from "react";
import Poster from "./poster";
import Layout from "../../components/Layout";
import CarouselCard from "./carousel/carouselCard";
import TeachersSec from "./Teachers/teachersSec";
import CourseIntro from "./services/courseintro";
import Review from "./Review/index";

function Home() {
  return (
    <React.Fragment>
      <Layout>
        <Poster />
        <CarouselCard />
        <CourseIntro/>
        <TeachersSec />
        <Review />
      </Layout>
    </React.Fragment>
  );
}

export default Home;
