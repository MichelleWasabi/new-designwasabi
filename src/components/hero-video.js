import React from "react";
import "../css/style.css";
import BtnLink from "./BtnLink";

export default () => (
  <div>
    <div className="design-hero flex relative items-center">
      <div className="overlay dkGradient absolute top-0 left-0 h-screen md:h-full w-full"></div>
      <video
       poster={require("../assets/images/beach3.jpg")}
        autoPlay
        muted
        loop
        className="bgvid-hero hidden"
      >
        <source src={require("../assets/videos/beach2.mp4")} type="video/mp4" />
      </video>
      <section className="md:container hero-content absolute text-white z-20 text-center md:text-left mx-12 md:mx-10  leading-tight ">
      <header className="text-2xl md:text-6xl tracking-tighter ">
       Hi, I &apos;m Michelle! 
      </header>
      <h3 className="text-base md:text-2xl mt-3">Product Designer and Developer building beautiful, functional products. </h3>
      <h3 className="text-base md:text-2xl mt-3">Made in the Caribbean and currently working in Miami.</h3>
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
