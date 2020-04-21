import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

function DesignPage() {
  return (
    <Layout>
      <SEO
        keywords={[`uxdesign`, `product design`, `portfolio`]}
        title="Product Design Portfolio"
      />
      <section>
        <div className="md:container md:items-center mx-auto">
          <div className="section-header flex flex-col h-56 md:h-96 justify-center text-center">
            <h2 className="text-xl md:text-4xl ">Featured Projects</h2>
            <p className="text-base md:text-xl">my main picks</p>
          </div>
          <div className="section-body md:flex justify-center">
            <div className="project-thumbnail max-w-lg md:rounded overflow-hidden shadow-lg mx-0 my-6 md:mx-6 md:my-6 ">
              <img src={require("../assets/images/michelle1.jpeg")} alt="" className="w-full" />
            </div>
            <div className="project-thumbnail max-w-lg md:rounded overflow-hidden shadow-lg  mx-0 my-6 md:mx-6 md:my-6">
              <img src={require("../assets/images/michelle1.jpeg")} alt="" className="w-full" />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default DesignPage;
