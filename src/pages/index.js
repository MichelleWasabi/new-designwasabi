import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Hero from "../components/hero";
import FeatureContent from "../components/secondFeatures";
import LastCTA from "../components/lastCTA";

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
      <FeatureContent />
      <LastCTA />
    </Layout>
  );
}

export default IndexPage;
