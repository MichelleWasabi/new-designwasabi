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
              It’s a nationwide problem that persists for millions of people in
              this country, affordable + reliable healthcare coverage.
              Statistics show that many Americans either cannot afford to
              maintain yearly health insurance or they have a plan that is
              confusing to understand. These issues leave over 80 million people
              scratching their heads and ultimately vulnerable to the elements.
            </p>
            <img
              className="mx-auto md:w-96 my-6 md:my-20"
              src={require("../assets/images/xray.jpg")}
              alt=""
            />
          </div>
        </section>

        {/* post-intro  */}
        <section className="post-intro my-12">
          <div className="text-center my-2 md:my-12">
            <h2>Project Overview</h2>
          </div>
          <div>
            <p className="max-w-lg mx-auto">
              Fixing healthcare is a big undertaking for any one company but our
              team was tasked with focusing on making improvements in how people
              navigate their healthcare coverage. The prompt was “How can we
              educate and support people in effectively utilizing their
              healthcare coverage?”
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
              This healthcare app is digital, it relies on knowledge of using a
              smartphone, requires trust in technology, and would provide value
              for people with insurance. Based on my research and limited
              resources, I anticipated our audience would likely resemble the
              following demographic:
            </p>
            <div className=" mx-auto md:w-96 my-6 md:my-12 flex justify-center">
              <iframe
                src="https://giphy.com/embed/3oge7Ve0gmIOhJkhOg"
                width="480"
                height="480"
                frameBorder="0"
                className="giphy-embed"
                allowFullScreen
                samesite="none"
                secure="true"
              ></iframe>
              <p>
                <a href="https://giphy.com/gifs/netflix-film-3oge7Ve0gmIOhJkhOg"></a>
              </p>
            </div>

            <ul className="max-w-96 md:my-12 text-xl list-inside list-disc grid justify-center text-teal-600">
              <li>Ages: 26 - 45</li>
              <li>Technologically inclined</li>
              <li> Low to Mid Income</li>
              <li>Female consumers </li>
              <li> Frequent healthcare consumers</li>
            </ul>

            <p className="max-w-lg mx-auto">
              These types of users are more likely to consider breaking the
              paradigm of booking and completing healthcare services. We know
              from our surveys that people often discover new doctors through
              referrals from family, friends, and current medical professionals.
              Contrary to that trend, Zocdoc’s (a direct competitor) search
              platform has contributed to breaking that paradigm paving the way
              for future healthcare companies that rely on online searches and
              reviews.
            </p>
          </div>
        </section>

        {/* post-banner that displays the steps taken for this project  */}
        <section className="post-intro my-12">
          <div className="banner bg-gray-200 h-56 md:h-120 full-width grid content-center px-12">
            <h2 className="text-center mb-12">Project Steps</h2>
            <img src={require("../assets/icons/steps-taken.png")} alt="" />
          </div>
        </section>

        {/* research content */}
        <section className="post-research my-12">
          <div className="text-center my-2 md:my-12">
            <h2>Research</h2>
          </div>
          <div>
            <p className="max-w-lg mx-auto">
              As a designer-of-1 on this project working for an early startup
              meant being very intentional about the steps I took in this
              product design journey. Time and resources were valuable both for
              me and the company. Therefore, I approached research in the
              following ways.{" "}
            </p>

            <ul className="max-w-96 md:my-12  text-xl list-inside list-disc grid justify-center text-teal-600">
              <li>
                {" "}
                Reading about healthcare, health insurance, and finding
                competitors
              </li>
              <li>Studying health insurance plans </li>
              <li>
                {" "}
                Observing comments from people online about their experiences
              </li>
              <li>
                Using Hotjar to push survey questions and validate what I’ve
                learned{" "}
              </li>
              <li> Analyzing my research and coming up with theories</li>
            </ul>
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

        {/* user testing  */}
        <section className="post-solutions my-12">
          <div className="text-center my-2 md:my-12">
            <h2>User Testing </h2>
          </div>
          <div>
            <p className="max-w-lg mx-auto">
              Using the early prototype I conducted user tests with 10
              participants ranging in age from 24-55, males, and females.
              Interviews were recorded for analysis. Participants were prompted
              to do the following:
            </p>

            <ul className="max-w-96 md:my-12  text-xl list-inside list-disc grid justify-center text-teal-600">
              <li> Enter provided insurance details </li>
              <li> Express their first impression of the visuals. </li>
              <li>
                Observe and report their understanding of health coverage{" "}
              </li>
            </ul>
            <p className="max-w-lg mx-auto">
              The early prototype was a request by the company and was used to
              validate ideas and assess user needs and pain points. Apart from
              testing, I used open-ended questions to understand the lived
              experiences of participants navigating the world of healthcare.{" "}
            </p>
          </div>
        </section>
        {/* post-banner that displays themes  */}
        <section className="post-intro">
          <div className="banner bg-gray-300 h-56 md:h-108 full-width grid content-center">
           
            <FirstFeatures
              header="Pain Points"
              feature={[
                {
                  title: "Costs",
                  content: "Will I have more fees?",
                },

                {
                  title: "Providers",
                  content: "Which provider is best for my insurance plan?",
                },
                {
                  title: "Confusion",
                  content: "What's a deductible?",
                },
              ]}
            />
          </div>
        </section>
        {/* solutions described below in smaller sections */}
        <section className="post-solutions my-12">
          <div className="text-center my-2 md:my-12">
            <h2>Solutions and Features</h2>
          </div>
          <div>
            <p className="max-w-lg mx-auto">
              In the second iteration, the following features were selected to
              solve our user’s challenges (i.e. visual graph, search
              functionality, a digital insurance card, and a cost estimator).
              These solutions will then be tested and data will be analyzed over
              a set amount of time.
            </p>
          </div>
        </section>
        <section>
          <div className="feature-content md:flex md:items-center md:h-108">
            <div className="">
              <img
                src={require("../assets/images/visual-graph.png")}
                alt=""
                className="md:w-96 xl:w-120"
              />
            </div>
            <div className="mt-4 md:mt-0 md:pl-16 md:max-w-xs leading-tight text-center md:text-left px-5">
              <h2 className="text-teal-600">Visual Graph</h2>
              <p className="font-light mt-4 md:mt-6">
                Right away the user can see how much they have spent towards
                their deductible and an explanation of what that means.
              </p>
            </div>
          </div>
        </section>
        <section>
          <div className="feature-content md:flex md:items-center md:h-108">
            <div className="sm:order-first md:order-2">
              <img
                src={require("../assets/images/digital-insurance.png")}
                alt=""
                className="md:w-96 xl:w-120"
              />
            </div>
            <div className="mt-4 md:mt-0 md:mr-12 md:max-w-xs leading-tight text-center md:text-left px-5">
              <h2 className="text-teal-600 md:mr-3">Digital Insurance Card</h2>
              <p className="font-light mt-4 md:mt-6">
                Cellphones hold most of our important information and we tend to
                keep our device close, so why not have access to your digital
                insurance card from your phone? There are 3 views categorized by
                need (i.e., personal details, financials, provider details).
              </p>
            </div>
          </div>
        </section>
        <section>
          <div className="feature-content md:flex md:items-center md:h-108">
            <div className="">
              <img
                src={require("../assets/images/search-func.png")}
                alt=""
                className="md:w-96 xl:w-120"
              />
            </div>
            <div className="mt-4 md:mt-0 md:pl-16 md:max-w-xs leading-tight text-center md:text-left px-5">
              <h2 className="text-teal-600 ">Search</h2>
              <p className="font-light mt-4 md:mt-6">
                The search functionality was designed to be quick by adding a
                drop-down and search bar. Our users can also search by clicking
                a service-specific hot button. The results would sort by
                relevance to location and insurance coverage.
              </p>
            </div>
          </div>
        </section>
        <section>
          <div className="feature-content md:flex md:items-center  md:h-108">
            <div className="sm:order-first md:order-2">
              <img
                src={require("../assets/images/cost-estimator.png")}
                alt=""
                className="md:w-96 xl:w-120"
              />
            </div>
            <div className="mt-4 md:mt-0 md:mr-12 md:max-w-xs leading-tight text-center md:text-left px-5">
              <h2 className="text-teal-600 md:mr-3">Cost Estimator</h2>
              <p className="font-light mt-4 md:mt-6">
                The most prominent feature is the ability to estimate (only an
                estimate) the cost of the doctor visit. This feature speaks to
                the user’s desire to not only know ahead but to plan their
                expenses just as they would in other shopping experiences. r
              </p>
            </div>
          </div>
        </section>

        <section className="post-summary my-12">
          <div className="text-center my-2 md:my-12">
            <h2>Summary</h2>
          </div>
          <div>
            <p className="max-w-lg mx-auto">
              The product reached the stage of development in December 2019.
              It’s built with vue.js on the frontend and PHP on the backend.
              Multiple APIs were required to create the functionality of the
              design. Currently, there are some roadblocks.{" "}
            </p>
            <ul className="max-w-96 md:my-12  text-xl list-inside list-disc grid justify-center text-teal-600">
              <li>
                {" "}
                There are hundreds of insurance carriers with varying plan types and data structures

              </li>
              <li>
                Accurate cost estimates require cost insight from the provider{" "}
              </li>
              <li>
                {" "}
                Booking functionality also requires provider participation
              </li>
            </ul>

            <p className="max-w-lg mx-auto">
              This is an early-stage product built at an early stage startup so
              the room for improvement is great. However, the product’s goals
              and intentions are wholesome and promising. My recommendation
              post-launch was to build a team of designers and developers to
              better match the needs of future product development and to
              continue research and branding.
            </p>
          </div>
        </section>
        <section className="post-extra my-12">
          <div className="text-center my-2 md:my-12">
            <h2>Personal Roadblock</h2>
          </div>
          <div>
            <p className="max-w-lg mx-auto">
              As an empath, healer, and designer of solutions, I am simply not
              satisfied with the current iteration of the product. I’m glad we
              could add features that assist people in their time of need and in
              some cases most vulnerable moments. However, there is more to be
              achieved here. Displaying visual graphs of a user’s health
              expenditures is not the same as Credit Karma showing increased
              credit scores or gaining membership points for free collectibles
              at your favorite department store. An increase in health spending
              often correlates with an increase in health challenges. Where is
              the validation and delightfulness in that? Personally and
              professionally, I believe there’s more value in showing users how
              to “milk” their insurance for all its got. Examples:{" "}
            </p>
             <ol className="max-w-96 md:my-12  text-xl list-inside list-decimal grid justify-center">
              <li>
                {" "}
                Inform users of all the free services that come packaged in
                their coverage
              </li>
              <li>
                Provide maps, suggestions, and referrals to specific locations
                and doctors{" "}
              </li>
              <li>
                Reduce hesitation to act by displaying money lost if they choose
                to not use their coverage.{" "}
              </li>
              <li>
                Include a health profile that estimates the amount of coverage
                they need for next year{" "}
              </li>
              <li>Help users form healthier habits</li>
            </ol>
          </div>
        </section>
      </div>

      <LastCTA />
    </Layout>
  );
}

export default Posts;
