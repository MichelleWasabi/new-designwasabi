import React from "react";
import BtnLink from "./BtnLink";

export default () => (
  <div>
    <section className="bg-red-500 py-12 md:py-0">
      <div className="md:flex text-center md:text-left md:py-48 text-white">
        <div className="md:w-2/5   md:px-20  md:mx-12 md:leading-tight ">
          <h1 className="text-3xl md:text-5xl mx-3 md:mx-0">
            To really know me, embrace a little wabi-sabi
          </h1>
        </div>

        <div className="md:w-3/5 md:mx-12 md:px-40 ">
          <div className="hidden md:block ">
            <h3 className="text-xl md:text-2xl leading-tight ">
              Caribbean-made with global ambitions. <br /> Diverse perspectives
              welcomed.
              <br /> Holistic problem solver.
            </h3>
            <p className="pt-6 pr-40">
              Sound interests? Then let’s collaborate!{" "}
            </p>
          </div>
          <div className="pt-12">
            <BtnLink title="Talk to Me" href="./contact" />
          </div>
        </div>
      </div>
    </section>
  </div>
);
