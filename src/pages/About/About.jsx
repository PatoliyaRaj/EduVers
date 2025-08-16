import React from "react";
import Layout from "./../../components/Layout";
// import Poster from "../Home/poster";
import InfoSection from "./infoSection";
import InfosectionS from "./infosection2";
import FeaturesSec from "./fetuersSec";

function About() {
  return (
    <React.Fragment>
      <Layout>
        <React.Fragment>
          <span className="flex flex-col h-auto w-full mx-auto my-10 mt-16">
            <InfoSection />
            <InfosectionS />
            <div className="mt-3 sm:mt-4 flex justify-center">
              <span className="block w-16 sm:w-20 md:w-24 h-0.5 sm:h-0.5 md:h-1 bg-indigo-400 rounded-full animate-pulse"></span>
            </div>
            <FeaturesSec />
          </span>
        </React.Fragment>
      </Layout>
    </React.Fragment>
  );
}

export default About;
