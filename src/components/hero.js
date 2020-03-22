import React from "react";
import "../css/style.css";
// import Button from "../components/button";

export default () => (
  <div className="hero flex relative items-center">
    <div className="hero-video">
      <div className="overlay bg-gray-800 absolute top-0 left-0 h-full w-full opacity-50 z-10"></div>
      <video
        autoPlay
        muted
        loop
        className="h-full relative object-cover"
        // style={{ objectFit: "cover"}}
      >
        <source src={require("../assets/free-videos.mp4")} type="video/mp4" />
      </video>
    </div>
    <section className="hero-content absolute text-white z-20 text-left mx-4 md:mx-10 leading-tight ">
      <h1 className="text-4xl md:text-6xl  ">
        Design Beautifully <br /> Live Imperfectly <br /> Heal Thoroughly
      </h1>
      <p className="text-lg md:text-2xl mt-3">Services made for human needs</p>
      <div className="pt-6">
        <a
          href="/#landing-features"
          className="btn bg-gray-900 hover:bg-pink-200 text-white hover:text-black font-bold py-2 px-16 rounded"
        >
          Start Living
        </a>
      </div>
    </section>
  </div>
);
