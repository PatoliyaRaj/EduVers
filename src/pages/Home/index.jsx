import React from "react";
import Poster from "./poster";
import Layout from "../../components/Layout";
import CarouselCard from "./carousel/carouselCard";
import Cards from "./cards";
// import CardScroll from "./Scrolltrig";


function Home() {
  return (
    <React.Fragment>
      <Layout>
        <Poster />
        <CarouselCard />
        <Cards />
      </Layout>
    </React.Fragment>
  );
}

export default Home;
