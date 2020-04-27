import React from "react";
import "../css/style.css";
import BtnLink from "./BtnLink";

export default () => (
  <div>
    <div className="flex relative items-center">
      <div className="overlay dkGradient absolute left-0 h-full w-full"></div>
      <video
        autoPlay
        muted
        loop
        className="h-full w-full "
        // style={{ objectFit: "cover"}}
      >
        <source src={require("../assets/videos/beach2.mp4")} type="video/mp4" />
      </video>
      <section className="md:container hero-content absolute text-white z-20 text-left mx-4 md:mx-10 leading-tight ">
      <header className="text-4xl md:text-6xl tracking-tighter ">
       Hi, I &apos;m Michelle! 
      </header>
      <h3 className="text-lg md:text-2xl mt-3">Product Designer and Developer building beautiful, functional products. </h3>
      <h3 className="text-lg md:text-2xl mt-3">Made in the Caribbean and currently working in Miami.</h3>
      <div className="pt-6">
        <BtnLink title="Browse my work" href="./#landing-features" />
        {/* <a
          href="/#landing-features"
          className="btn bg-gray-900 hover:bg-pink-200 text-white hover:text-black font-bold py-2 px-16 rounded"
        >
          Start Living
        </a> */}
      </div>
    </section>
    </div>
    
 </div>
);
