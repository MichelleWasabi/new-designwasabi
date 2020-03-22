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
      <div className="landing-body">
        <section className="landing-intro ">
          <div className="container mx-auto my-20 px-24 md:text-center ">
            <h2 className="leading-none ">design</h2>
            <h2 className="font-bold ">wa [bi] sabi</h2>
            <p className="leading-snug">
              - wabi sabi - to see the beauty in imperfection{" "}
            </p>
          </div>
          <div className="flex justify-between border-b border-gray-300 ">
            <img
              src={require("../assets/stacked-rocks.svg")}
              alt="vector rocks stacked on each other"
              className="h-40 md:h-48"
            />
            <img
              src={require("../assets/wasabi-bowl-pink.svg")}
              alt="vector bowl in pink turned on it's side"
              className="h-24 md:h-32 self-end"
            />
          </div>
        </section>
        <section className="landing-features">
          <div className="my-20 text-center">
            <h2>Features</h2>
          </div>
          <div className="md:flex">
            <div className="md:flex-shrink-0">
              <img
                src={require("../assets/abstract-vector.png")}
                alt=""
                className="rounded-lg md:w-96"
              />
            </div>
            <div className="mt-4 md:mt-0 md:ml-6">
              <div className="uppercase tracking-wide text-sm text-indigo-600 font-bold">
                Marketing
              </div>
              <a
                href="#"
                className="block mt-1 text-lg leading-tight font-semibold text-gray-900 hover:underline"
              >
                Finding customers for your new business
              </a>
              <p className="mt-2 text-gray-600">
                Getting a new business off the ground is a lot of hard work.
                Here are five ideas you can use to find your first customers.
              </p>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}

export default IndexPage;
