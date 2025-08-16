import React from "react";
import BenefCards from "./benefCards";

function FeaturesSec() {
  return (
    <React.Fragment>
      <section className="flex flex-col text-center justify-center items-center mt-10">
        
        <h2 className="text-3xl font-bold mb-4">Our Benefits</h2>
        <p
          className="text-2xl w-full sm:p-2 md:text-4xl md:w-[60%]  text-gray-600  mt-4 font-semibold "
          style={{ lineHeight: "1.5" }}
        >
          By Joining EduVers Platform, One Can Avail a Lot Of Benefits.
        </p>
        <p className="text-md m-2  md:w-[50%] lg:w-[45%] mt-6 sm:text-sm md:text-base lg:text-lg text-gray-500">
          Install our top-rated dropshipping app to your e-commerce site and get
          access to US Suppliers, AliExpress vendors, and the best.
        </p>
        <BenefCards />
      </section>
    </React.Fragment>
  );
}

export default FeaturesSec;
