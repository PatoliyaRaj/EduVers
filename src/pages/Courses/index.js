import React from "react";
import Layout from "../../components/Layout";
import Poster from "./poster";
import CourseIntro from "./introsection";

function Index() {
  return (
    <React.Fragment>
      <Layout>
        <main className=" h-auto pb-8">
          <React.Fragment>
            <Poster />
            <CourseIntro/>
          </React.Fragment>
        </main>
      </Layout>
    </React.Fragment>
  );
}

export default Index;
