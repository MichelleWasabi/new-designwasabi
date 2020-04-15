import React from "react";
import "../css/style.css";
import BtnLink from "./BtnLink";
import ByDay from "./byDay";
// import SunBkg from "../assets/icons/SunBkg.svg";

export default () => (
  <div>
    <div className="byDay">
      <ByDay title1="by day" title2="Full Stack Product Designer" />
    </div>

    <section id="landing-features">
      <div className="feature-content md:flex md:items-center  h-108 md:h-auto">
        <div className="md:flex-shrink-0">
          <img
            src={require("../assets/images/michelle1.jpeg")}
            alt=""
            className="md:w-96 xl:w-120"
          />
        </div>
        <div className="mt-4 md:mt-0 md:mx-24 md:pl-16 leading-tight text-center md:text-left px-5">
          <h2 className="text-flower md:mr-3">design to code</h2>
          <p className="font-light mt-4 md:mt-6">
            Me + <span className="font-bold">Socially Conscious Brands</span>{" "}
            collaborate through early-stage ideas and the product growth cycle.
            Together, we craft beautiful products that anticipate your user’s
            journey, end-to-end.
          </p>
          <BtnLink
            title="Schedule FREE Consultation"
            href="https://calendly.com/michellewiltshire/15-minute-consultation"
          />

          <div className="btn-subtext-3">
            <small className="text-flower font-bold uppercase ">
              15-minute Call{" "}
            </small>
          </div>
        </div>
      </div>
      <div className="spacer h-20"></div>
      <div className="feature-content md:flex md:items-center h-108 md:h-auto">
        <div className="md:flex-shrink-0 md:order-2 ">
          <video
            poster={require("../assets/icons/abstract-vector.png")}
            autoPlay
            muted
            loop
            className="md:w-96 xl:w-120"
          >
            <source
              src={require("../assets/videos/website-ver2.mp4")}
              type="video/mp4"
              className=""
            />
          </video>
        </div>

        <div className="mt-4 md:mt-0 md:mx-24 md:pl-16 md:w-full leading-tight text-center md:text-left ">
          <h2 className="text-flower md:mr-3 ">
            product design anchored in psychology and human behavior
          </h2>
          <ul className="mt-2 text-lg mt-4 md:mt-6">
            <li>Anticipatory design thinking</li>
            <li>UX audits, screen-by-screen</li>
            <li>User interviews + surveys + case studies</li>
            <li>Lo-fi to hi-fi wireframes + prototypes</li>
            <li>HTML + CSS + React</li>
          </ul>
        </div>
      </div>
      <div className="bg-dkblue text-white">
        <ByDay title1="by night" title2="Licensed Psychologist" />
      </div>

      <div className="feature-content md:flex md:items-center  h-108 md:h-auto">
        <div className="md:flex-shrink-0">
          <img
            src={require("../assets/images/michelle3.png")}
            alt=""
            className="md:w-96 xl:w-120"
          />
        </div>
        <div className="mt-4 md:mt-0 md:mx-24 md:pl-16 md:w-full leading-tight text-center md:text-left ">
          <h2 className="text-flower">mental and emotional</h2>
          <ul className="mt-2 text-lg mt-4 md:mt-6">
            <li>Individual therapy + self-discovery</li>
            <li>Couples therapy + communication skills </li>
            <li>Clairvoyance through mindfulness practices</li>
          </ul>

          <BtnLink
            title="Email Me"
            href="mailto: contact@wasabisabipsych.com?subject=Wellness%20Inquiry"
          />

          <div className="btn-subtext">
            <small className="text-flower font-bold uppercase ">
              Schedule FREE 15-minute Call{" "}
            </small>
          </div>
        </div>
      </div>
    </section>
  </div>
);
