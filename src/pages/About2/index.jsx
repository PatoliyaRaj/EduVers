import React, { useEffect } from "react";
import Layout from "../../components/Layout";
import AboutHero from "./components/AboutHero";
import AboutImpact from "./components/AboutImpact";
import AboutValues from "./components/AboutValues";
import AboutTeam from "./components/AboutTeam";
import AboutCTA from "./components/AboutCTA";

function About() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <Layout>
      <AboutHero />
      <AboutImpact />
      <AboutValues />
      <AboutTeam />
      <AboutCTA />
    </Layout>
  );
}

export default About;
