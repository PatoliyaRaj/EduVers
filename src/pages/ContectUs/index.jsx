import React from "react";
import Layout from "../../components/Layout";
import From from "./from";

function ContactUs() {
  return (
    <React.Fragment>
      <Layout>
        <main className="w-full min-h-screen bg-gradient-to-br from-[#f7f7f5] via-[#e0e7ff] to-[#f7f7f5] pb-16">
          <div className="container mx-auto px-0">
            <From />
          </div>
        </main>
      </Layout>
    </React.Fragment>
  );
}

export default ContactUs;
