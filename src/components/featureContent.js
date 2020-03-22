import React from "react";
import "../css/style.css";
import BLink from "./BLink";

export default () => (
  <div>
    <div className="feature-content md:flex md:items-center">
      <div className="md:flex-shrink-0">
        <img
          src={require("../assets/abstract-vector.png")}
          alt=""
          className="rounded-lg md:w-96"
        />
      </div>
      <div className="mt-4 md:mt-0 md:ml-6 text-center md:w-full leading-tight ">
        <h2>design solutions</h2>
        <p className="font-light">problem-solving for human happiness</p>
        <ul className="mt-2 text-green-400">
          <li>design thinking</li>
          <li>wireframes + prototypes</li>
          <li>design to code</li>
        </ul>
        <div className="my-6">
          <BLink title="Let's Problem Solve" />
        </div>
      </div>
    </div>
    <hr className="my-16"></hr>
    <div className="feature-content md:flex md:items-center">
      <div className="md:flex-shrink-0 md:order-2  ">
        <img
          src={require("../assets/wellness-vector.png")}
          alt=""
          className="rounded-lg md:w-96"
        />
      </div>
      <div className="mt-4 md:mt-0 md:ml-6 text-center md:w-full leading-tight ">
        <h2>wellness</h2>
        <p className="font-light mx-2">
          growth through self-discovery and healing
        </p>
        <ul className="mt-2 text-blue-900">
          <li>individual therapy</li>
          <li>couples therapy</li>
          <li>mindfulness</li>
        </ul>
        <div className="my-6">
          <BLink title="Let's Heal" />
        </div>
      </div>
    </div>
    <hr className="my-16"></hr>
    <div className="feature-content md:flex md:items-center">
      <div className="md:flex-shrink-0">
        <img
          src={require("../assets/office-vector.png")}
          alt=""
          className="rounded-lg md:w-96"
        />
      </div>
      <div className="mt-4 md:mt-0 md:ml-6 text-center md:w-full leading-tight ">
        <h2>spaces</h2>
        <p className="font-light">affordable office space for rent</p>
        <ul className="mt-2 text-yellow-500">
          <li>starting at $225</li>
          <li>fully furnished</li>
          <li>miami, fl</li>
        </ul>
        <div className="my-6">
          <BLink title="Start Renting" />
        </div>
      </div>
    </div>
  </div>
);
