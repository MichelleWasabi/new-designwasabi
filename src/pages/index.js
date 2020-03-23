import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Hero from "../components/hero";
import FeatureContent from "../components/featureContent";

function IndexPage() {
  return (
    <Layout>
      <SEO
        keywords={[
          `uxdesign`,
          `wellness`,
          `productdesign`,
          `michelle wiltshire`
        ]}
        title="Home"
      />
      <Hero />
      <div className="landing-body">
        <section className="landing-intro ">
          <div className="container mx-auto my-20 px-24 md:text-center ">
            <h2 className="leading-none ">design</h2>
            <h2 className="font-bold ">wa [bi] sabi</h2>
            <p className="leading-normal">
              - wabi sabi - to see the beauty in imperfection{" "}
            </p>
          </div>
          <div className="flex justify-between  ">
            <img
              src={require("../assets/stacked-rocks.svg")}
              alt="vector rocks stacked on each other"
              className="h-40 md:h-48 lg:h-84"
            />
            <img
              src={require("../assets/wasabi-bowl-pink.svg")}
              alt="vector bowl in pink turned on it's side"
              className="h-24 md:h-32 lg:h-48 self-end"
            />
          </div>
          <div className="color-block h-6 bg-black opacity-90"></div>
        </section>
        <section id="landing-features">
          <div className="feature-title my-20 text-center">
            <h2>Features</h2>
          </div>
          <FeatureContent />
        </section>
      </div>
    </Layout>
  );
}

export default IndexPage;
