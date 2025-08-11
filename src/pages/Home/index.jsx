import React from "react";
import Poster from "./poster";
import Layout from "../../components/Layout";
import CarouselCard from "./carousel/carouselCard";
import Coursecards from "./services/coursecards";



function Home() {
  return (
    <React.Fragment>
      <Layout>
        <Poster />
        <CarouselCard />
       <Coursecards />
      </Layout>
    </React.Fragment>
  );
}

export default Home;
