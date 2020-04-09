import React from "react";
import "../css/style.css";
import BtnLink from "./BtnLink";

export default () => (
  <div className="hero flex relative items-center">
    <section className="hero-content md:w-2/5 z-20 text-left mx-4 md:mx-10 leading-tight">
      <h1 className="text-4xl md:text-6xl tracking-tighter ">
        Design Beautifully
      </h1>
      <h1 className="text-4xl md:text-6xl tracking-tighter ">
        Live Imperfectly
      </h1>
      <p className="text-lg md:text-2xl mt-3">Services made for human needs</p>
      <div className="pt-6">
        <BtnLink title="Start Living" href="./#landing-features" />
      </div>
    </section>
    <section className="hero-image md:w-3/5">
      {/* <div className="overlay bg-gray-800 absolute top-0 left-0 h-full w-full opacity-50 z-10"></div> */}
      <img src={require("../images/gradientSky.jpg")} alt="" />
    </section>
  </div>
);
