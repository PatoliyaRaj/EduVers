import React, { useEffect } from "react";
import Layout from "../../components/Layout";
import HeroSection from "./components/HeroSection";
import SocialProofBar from "./components/SocialProofBar";
import FeaturesSection from "./components/FeaturesSection";
import CourseCategoriesSection from "./components/CourseCategoriesSection";
import InstructorsSection from "./components/InstructorsSection";
import TestimonialsSection from "./components/TestimonialsSection";
import CTASection from "./components/CTASection";

function HomeNew() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <Layout>
      <HeroSection />
      <SocialProofBar />
      <FeaturesSection />
      <CourseCategoriesSection />
      <InstructorsSection />
      <TestimonialsSection />
      <CTASection />
    </Layout>
  );
}

export default HomeNew;
