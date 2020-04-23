import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
// import { mapRange } from "gsap";

function DesignPage() {
  return (
    <Layout>
      <SEO
        keywords={[`uxdesign`, `product design`, `portfolio`]}
        title="Product Design Portfolio"
      />
{/* <section>
      <div className="container-hover">
        <h3 className="title">Text fadeIn bottom</h3>
        <div className="content">
          <a href="#" target="_blank" className="block relative" rel="noopener noreferrer">
            <div className="content-overlay"></div>
            <img className="content-image" src="https://images.unsplash.com/photo-1433360405326-e50f909805b3?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1080&fit=max&s=359e8e12304ffa04a38627a157fc3362"/>
            <div className="content-details fadeIn-bottom">
              <h3 className="content-title">This is a title</h3>
              <p className="content-text">This is a short description</p>
            </div>
          </a>
        </div>
      </div>
</section> */}

<section>
  <div className="container md:items-center mx-auto px-4">
    <div className="grid grid-cols-2 gap-8">
      {[0,1].map((i) => (
        <a key={i} className="relative mx-auto block">
          <div className="content z-30 opacity-0 absolute text-white h-full w-full text-center items-center flex  justify-center flex-col ">
            <div className="details absolute w-full fadeIn-bottom opacity-0">
              <h3 className="title uppercase">Title of the Project Here</h3>
              <p className="text">Brief description of the project</p>
            </div>
          </div>
          <img className="w-full max-w-lg" src={require("../assets/images/michelle1.jpeg")} alt="" />
        </a>
      ))}
    </div>
  </div>
</section>

      {/* <section>
        <div classNameName="container md:items-center mx-auto px-4">
          <div classNameName="section-header flex flex-col h-56 md:h-96 justify-center text-center ">
            <h2 classNameName="text-xl md:text-4xl ">Featured Projects</h2>
            <p classNameName="text-base md:text-xl">my main picks</p>
          </div>

          <div classNameName="section-body md:flex relative justify-center">
            <div classNameName="project-thumbnail max-w-lg md:rounded overflow-hidden shadow-lg mx-0 my-6 md:mx-6 md:my-6 flex relative items-center">
              <img src={require("../assets/images/michelle1.jpeg")} alt="" classNameName="w-full hover:opacity-75" />
              <p classNameName="absolute">Words</p>
            </div>
            <div classNameName="project-thumbnail max-w-lg md:rounded overflow-hidden shadow-lg mx-0 my-6 md:mx-6 md:my-6">
              <img src={require("../assets/images/michelle1.jpeg")} alt="" classNameName="w-full" />
            </div>
          </div>
        </div>
      </section> */}
    
    </Layout>
  );
}

export default DesignPage;
