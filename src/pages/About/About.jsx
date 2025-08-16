import React from "react";
import Layout from "./../../components/Layout";
// import Poster from "../Home/poster";
import InfoSection from "./infoSection";
import InfosectionS from "./infosection2";

function About() {
  return (
    <React.Fragment>
      <Layout>
        <React.Fragment>
          <span  className="flex flex-col h-auto w-full mx-auto my-10 mt-16">
            <InfoSection />
            <InfosectionS />
          </span>
        </React.Fragment>
      </Layout>
    </React.Fragment>
  );
}

export default About;
