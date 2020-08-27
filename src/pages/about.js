import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

function AboutPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="About"
      />
      <main class="flex-1 w-full max-w-4xl px-4 py-8 mx-auto md:px-8 md:py-16">
      <section className="flex flex-col items-center md:flex-row">
        <div className="md:w-2/3 md:mr-8">
          <blockquote className="pl-4 font-serif leading-loose text-justify">
            Without boxing myself in too much, I describe myself as always curious, overly energetic, and a holistically inclined person. By night, I’m a licensed clinical psychologist with a small private practice in Miami and every other waking hour I’m a Product Designer of digital products.  My everyday motivation is to bridge gaps between needs and resources.  I feel inspired by tech and design’s ability to have a positive impact on a grander scale. As of 2020, I’ve invited — with open arms — my first child who’s my EVERYTHING! Yes, I know cliche but a cliche I’m incredibly proud to claim. 
<br/><br/>
P.S. Starting September 2020 I’m available for new opportunities. 
          </blockquote>

          <cite className="block mt-4 text-xs font-bold text-right uppercase">
            – Dr. Michelle Wiltshire
          </cite>
        </div>

        <figure className="w-2/3 md:w-1/3">
          
          <img
            src={require("../assets/images/michelle3.png")}
            alt=""
            // className="h-screen w-full"
          />
        </figure>
      </section>
</main>
    </Layout>
  );
}

export default AboutPage;
