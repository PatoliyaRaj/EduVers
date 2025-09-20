import React, { useEffect } from "react";
import Poster from "./poster";
import Layout from "../../components/Layout";
import CarouselCard from "./carousel/carouselCard";
import TeachersSec from "./Teachers/teachersSec";
import CourseIntro from "./services/courseintro";
import Review from "./Review/index";
import { InfoToster } from "../../components/toster";

function Home() {
  // const isLogin = JSON.parse(localStorage.getItem("isLogin"));


  // useEffect(() => {
  //   InfoToster("👋 Welcom To The Eduvers");
  // }, [isLogin]);

  return (
    <React.Fragment>
      <Layout>
        <Poster />
        <CarouselCard />
        <CourseIntro />
        <TeachersSec />
        <Review />
      </Layout>
    </React.Fragment>
  );
}

export default Home;
