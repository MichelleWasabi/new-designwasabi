import React from "react";
import "../css/style.css";
import BLink from "./BLink";

export default () => (
  <div className="hero flex relative items-center">
    <div className="hero-img">
      {/* <div className="overlay bg-gray-800 absolute top-0 left-0 h-full w-full opacity-50 z-10"></div> */}
      <img
        src={require("../assets/images/gradientSky-edit.jpeg")}
        alt=""
        className="h-96 md:h-auto"
      />
    </div>
    <section className="hero-content absolute text-white z-20 text-left mx-4 md:mx-32 leading-none md:leading-tight ">
      <h1 className="text-3xl md:text-6xl tracking-tighter ">
        Full Stack Product Designer
      </h1>
      <h1 className="text-3xl md:text-6xl tracking-tighter ">
        Licensed Psychologist
      </h1>
      <p className="text-lg md:text-2xl mt-3">
        I turn human problems into beautiful solutions.
      </p>
      <div className="pt-6">
        <BLink href="./#landing-features" />
      </div>
    </section>
  </div>
);
