import React, { useEffect} from "react";
import Poster from "./poster";
import Layout from "../../components/Layout";
import CarouselCard from "./carousel/carouselCard";
import TeachersSec from "./Teachers/teachersSec";
import CourseIntro from "./services/courseintro";
import Review from "./Review/index";
import toast from "react-hot-toast";

function Home() {

  const welcome = () =>{
    toast("👋 Welcome to CLGpro!", {
      duration:2000,
      position: "top-right",
      className: "bg-green-500 text-white font-bold px-6 py-4 rounded shadow-md",
      style: {
        border: "2px solid #4ADE80",
      },
    })
  }

   useEffect(() => {
    welcome();
   }, []);

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
