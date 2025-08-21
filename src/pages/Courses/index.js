import React from "react";
import Layout from "../../components/Layout";
import Poster from "./poster";
import InfoSection from "./introsection";
import CoursesGrids from "./CoursesGrids";

function Index() {
  return (
    <React.Fragment>
      <Layout>
        <main className=" h-auto pb-8">
          <React.Fragment>
            <Poster />
            <InfoSection />
            <CoursesGrids />
          </React.Fragment>
        </main>
      </Layout>
    </React.Fragment>
  );
}

export default Index;
