import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import ImgTiles from "../components/ImgTiles.js"

function DesignPage() {
  return (
    <Layout>
      <SEO
        keywords={[`uxdesign`, `product design`, `portfolio`]}
        title="Product Design Portfolio"
      />
     <ImgTiles tiles={[
       {
         header: "MediXall: Health App",
         subtext: "an App designed to improve access to better healthcare",
       },
       { 
         header: "TAPPI: Therapist Directory",
         subtext: "built from the ground up in React with Headless WordPress",},
       { 
         header: "4",
         subtext: "5",
        },
       { 
         header: "6",
         subtext: "7",
        }
     ]} />
    </Layout>
  );
}

export default DesignPage;
