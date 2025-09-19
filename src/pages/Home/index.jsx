import React, {  useEffect } from "react";
import Poster from "./poster";
import Layout from "../../components/Layout";
import CarouselCard from "./carousel/carouselCard";
import TeachersSec from "./Teachers/teachersSec";
import CourseIntro from "./services/courseintro";
import Review from "./Review/index";
import toast from "react-hot-toast";

function Home() {
  const isLogin = JSON.parse(localStorage.getItem("isLogin"));

  useEffect(() => {
    let temp = isLogin
      ? toast("👋 Welcome to EduVers", {
          duration: 2000,
          position: "top-right",
          className:
            "bg-green-500 text-white font-bold px-6 py-4 rounded shadow-md",
          style: {
            border: "2px solid #4ADE80",
          },
        })
      : toast("❌ Please Login Or Sign-up ", {
          duration: 2000,
          position: "top-right",
          className:
            "bg-red-500 text-white font-bold px-6 py-4 rounded shadow-md",
          style: {
            border: "2px solid red",
          },
        });
  }, [isLogin]);

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
