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
      <div className="body-content">
        <h2>Hey</h2>
        <h2>Hey</h2>
        <h2 className="mb-12">Hey</h2>
      </div>
      <br />
      <br />
      <div id="body-features" className="body-content">
        <h2 className="mt-12">Hey</h2>
        <h2>Hey</h2>
        <h2>Hey</h2>
      </div>
    </Layout>
  );
}

export default IndexPage;
