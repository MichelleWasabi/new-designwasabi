import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Hero from "../components/hero";

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
      <div className="landing-body"></div>
    </Layout>
  );
}

export default IndexPage;
