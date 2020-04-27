import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import ImgTiles from "../components/ImgTiles.js"
import HeroVideo from "../components/hero-video.js";
import LastCTA from "../components/lastCTA";

function DesignPage() {
  return (
    <Layout>
      <SEO
        keywords={[`uxdesign`, `product design`, `portfolio`]}
        title="Product Design Portfolio"
      />
      <HeroVideo />
     <ImgTiles tiles={[
       {
         header: "MediXall: Health App",
         subtext: "an App designed to improve access to better healthcare",
         tagleft: "UX Design",
         tagright: "Front-End"
       },
       { 
         header: "TAPPI: Therapist Directory",
         subtext: "built from the ground up in React with Headless WordPress",
         tagleft: "UI Design",
         tagright: "Research"
        },
       { 
         header: "4",
         subtext: "5",
        },
       { 
         header: "6",
         subtext: "7",
        }
     ]} />

     <LastCTA />
    </Layout>
  );
}

export default DesignPage;
