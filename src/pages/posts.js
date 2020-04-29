import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import FirstFeatures from "../components/firstFeatures";
// import BtnLink from "../components/BtnLink";

import LastCTA from "../components/lastCTA";

function Posts() {
  return (
    <Layout>
      <SEO
        keywords={[`uxdesign`, `product design`, `portfolio`]}
        title="Project Details Page"
      />

      {/* post-hero  */}
      <section>
        <img src={require("../assets/images/healthcare-hero.jpg")} alt="" />
      </section>

      <div className="container mx-auto px-6 md:px-32">
        {/* post-features - enter the role, type of project here   */}
        <FirstFeatures
          header="At a Glance"
          feature={[
            {
              title: "My Role ",
              content: "Lead Designer and Researcher",
            },
            {
              title: "Project Length",
              content: "Six (6) Months",
            },
            {
              title: "# of Iterations",
              content: "Three (3) Iterations",
            },
          ]}
        />

        {/* post-problem  */}
        <section className="post-problem my-12">
          <div className="text-center my-2 md:my-12">
            <h2>We Have a Problem</h2>
          </div>
          <div>
            <p className="max-w-lg mx-auto">
              This problem persists Nationwide amongst over 40+ Americans --
              access to reliable healthcare. Individuals who do have access to
              health coverage are often met with the challenge of navigating
              their way to a doctor that accepts their insurance. Additionally,
              many people share concenrs of high deductibles and out-of-pocket
              cotst.
            </p>
          </div>
        </section>

        {/* post-intro  */}
        <section className="post-intro my-12">
          <div className="text-center my-2 md:my-12">
            <h2>Project Overview</h2>
          </div>
          <div>
            <p className="max-w-lg mx-auto">
              This problem persists Nationwide amongst over 40+ Americans --
              access to reliable healthcare. Individuals who do have access to
              health coverage are often met with the challenge of navigating
              their way to a doctor that accepts their insurance. Additionally,
              many people share concenrs of high deductibles and out-of-pocket
              cotst.
            </p>
          </div>
        </section>

        {/* post-target audience  */}
        <section className="post-intro my-12">
          <div className="text-center my-2 md:my-12">
            <h2>Target Audience</h2>
          </div>
          <div>
            <p className="max-w-lg mx-auto">
              This problem persists Nationwide amongst over 40+ Americans --
              access to reliable healthcare. Individuals who do have access to
              health coverage are often met with the challenge of navigating
              their way to a doctor that accepts their insurance. Additionally,
              many people share concenrs of high deductibles and out-of-pocket
              cotst.
            </p>
          </div>
        </section>

        {/* post-banner that displays the steps taken for this project  */}
        <section className="post-intro my-12">
          <div className="banner bg-blue-300 h-56 md:h-96 full-width">
            <p className="px-20">banner about steps taken in the project </p>
          </div>
        </section>

        {/* research contenr */}
        <section className="post-research my-12">
          <div className="text-center my-2 md:my-12">
            <h2>Research</h2>
          </div>
          <div>
            <p className="max-w-lg mx-auto">
              This problem persists Nationwide amongst over 40+ Americans --
              access to reliable healthcare. Individuals who do have access to
              health coverage are often met with the challenge of navigating
              their way to a doctor that accepts their insurance. Additionally,
              many people share concenrs of high deductibles and out-of-pocket
              cotst.
            </p>
          </div>
        </section>
        <section className="post-prototype my-12">
          <div className="text-center my-2 md:my-12">
            <h2>Early Prototype</h2>
          </div>
          <div>
            <p className="max-w-lg mx-auto">
              This problem persists Nationwide amongst over 40+ Americans --
              access to reliable healthcare. Individuals who do have access to
              health coverage are often met with the challenge of navigating
              their way to a doctor that accepts their insurance. Additionally,
              many people share concenrs of high deductibles and out-of-pocket
              cotst.
            </p>
          </div>
        </section>

        {/* post-banner that displays the steps taken for this project  */}
        <section className="post-intro my-12">
          <div className="banner bg-blue-300 h-56 md:h-96 full-width">
            <p className="px-20">banner about the themes </p>
          </div>
        </section>

        {/* solutions described below in smaller sections */}
        <section className="post-solutions my-12">
          <div className="text-center my-2 md:my-12">
            <h2>Solutions</h2>
          </div>
          <div>
            <p className="max-w-lg mx-auto">
              This problem persists Nationwide amongst over 40+ Americans --
              access to reliable healthcare. Individuals who do have access to
              health coverage are often met with the challenge of navigating
              their way to a doctor that accepts their insurance. Additionally,
              many people share concenrs of high deductibles and out-of-pocket
              cotst.
            </p>
          </div>
        </section>
        <section>
          <div className="feature-content md:flex md:items-center md:h-108">
            <div className="">
              <img
                src={require("../assets/images/michelle1.jpeg")}
                alt=""
                className="md:w-96 xl:w-120"
              />
            </div>
            <div className="mt-4 md:mt-0 md:mx-24 md:pl-16 leading-tight text-center md:text-left px-5">
              <h2 className="text-flower">Graphs</h2>
              <p className="font-light mt-4 md:mt-6">insert graph</p>
            </div>
          </div>
        </section>
        <section>
          <div className="feature-content md:flex md:items-center md:h-108">
            <div className="sm:order-first md:order-2">
              <img
                src={require("../assets/images/michelle1.jpeg")}
                alt=""
                className="md:w-96 xl:w-120"
              />
            </div>
            <div className="mt-4 md:mt-0 md:mr-24   leading-tight text-center md:text-left px-5">
              <h2 className="text-flower md:mr-3">Ins Card</h2>
              <p className="font-light mt-4 md:mt-6">iinsert insurance card</p>
            </div>
          </div>
        </section>
        <section>
          <div className="feature-content md:flex md:items-center md:h-108">
            <div className="">
              <img
                src={require("../assets/images/michelle1.jpeg")}
                alt=""
                className="md:w-96 xl:w-120"
              />
            </div>
            <div className="mt-4 md:mt-0 md:mx-24   md:pl-16 leading-tight text-center md:text-left px-5">
              <h2 className="text-flower ">Search</h2>
              <p className="font-light mt-4 md:mt-6">insert Search</p>
            </div>
          </div>
        </section>
        <section>
          <div className="feature-content md:flex md:items-center  md:h-108">
            <div className="sm:order-first md:order-2">
              <img
                src={require("../assets/images/michelle1.jpeg")}
                alt=""
                className="md:w-96 xl:w-120"
              />
            </div>
            <div className="mt-4 md:mt-0 md:mr-24   leading-tight text-center md:text-left px-5">
              <h2 className="text-flower md:mr-3">Cost Estimator</h2>
              <p className="font-light mt-4 md:mt-6">insert Cost Estimator</p>
            </div>
          </div>
        </section>

       
       
    
        <section className="post-summary my-12">
          <div className="text-center my-2 md:my-12">
            <h2>Summary</h2>
          </div>
         <div>
            <p className="max-w-lg mx-auto">
              This problem persists Nationwide amongst over 40+ Americans --
              access to reliable healthcare. Individuals who do have access to
              health coverage are often met with the challenge of navigating
              their way to a doctor that accepts their insurance. Additionally,
              many people share concenrs of high deductibles and out-of-pocket
              cotst.
            </p>
          </div>
        </section>
        <section className="post-extra my-12">
          <div className="text-center my-2 md:my-12">
            <h2>Personal Roadblock</h2>
          </div>
           <div>
            <p className="max-w-lg mx-auto">
              This problem persists Nationwide amongst over 40+ Americans --
              access to reliable healthcare. Individuals who do have access to
              health coverage are often met with the challenge of navigating
              their way to a doctor that accepts their insurance. Additionally,
              many people share concenrs of high deductibles and out-of-pocket
              cotst.
            </p>
          </div>
        </section>
      </div>

      <LastCTA />
    </Layout>
  );
}

export default Posts;
