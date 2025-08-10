import React from "react";
import Poster from "./poster";
import Layout from "../../components/Layout";
import CarouselCard from "./carouselCard";


function Home() {
  return (
    <React.Fragment>
      <Layout>
        <Poster />
        <CarouselCard />
      </Layout>
    </React.Fragment>
  );
}

export default Home;
