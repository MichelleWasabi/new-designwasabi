import React from "react";
import BLink from "./BLink";

export default () => (
  <div>
    <section>
      <div className="md:flex text-center md:text-left md:py-48 text-black">
        <div className="md:w-2/5   md:px-20  md:mx-12 md:leading-tight ">
          <h1 className="text-3xl md:text-5xl mx-3 md:mx-0">
            To really know me, embrace a little wabi-sabi
          </h1>
        </div>

        <div className="invisible md:visible md:w-3/5  md:px-40 md:mx-12">
          <h3 className="text-xl md:text-2xl leading-tight ">
            Caribbean-made with global ambitions. <br /> Diverse perspectives
            welcomed.
            <br /> Holistic problem solver.
          </h3>
          <p className="pt-6 pr-40">
            If that sounds interesting to you then let’s collaborate together.{" "}
          </p>
          <div className="pt-12">
            <BLink title="Talk to Me" href="./contact" />
          </div>
        </div>
      </div>
    </section>
  </div>
);
