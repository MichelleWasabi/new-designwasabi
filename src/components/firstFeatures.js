import React from "react";
import "../css/style.css";

export default () => (
  <section className="featureWrapper text-center my-48 ">
    <h2 className="text-xl md:text-4xl">Our Features</h2>
    <div className="contentWrapper flex mt-24">
      <div className="feature-one w-1/3 px-16 ">
        <div className="feature-icon flex justify-center  ">
          <img
            className="h-24 "
            src={require("../images/icon-booking-works.png")}
            alt=""
          />
        </div>
        <div className="feature-content my-6 ">
          <div className="title">
            <h2 className="text-xl md:text-2xl tracking-tighter">
              Feature Title
            </h2>
          </div>
          <div className="subtext">
            <p>
              Some additional information about this feature to explain further.{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="feature-two w-1/3 px-16">
        <div className="feature-icon flex justify-center">
          <img
            className="h-24 "
            src={require("../images/icon-booking-works.png")}
            alt=""
          />
        </div>
        <div className="feature-content my-6 ">
          <div className="title">
            <h2 className="text-xl md:text-2xl tracking-tighter">
              Feature Title
            </h2>
          </div>
          <div className="subtext">
            <p>
              Some additional information about this feature to explain further.{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="feature-three w-1/3 px-16">
        <div className="feature-icon flex justify-center">
          <img
            className="h-24 "
            src={require("../images/icon-booking-works.png")}
            alt=""
          />
        </div>
        <div className="feature-content my-6 ">
          <div className="title">
            <h2 className="text-xl md:text-2xl tracking-tighter">
              Feature Title
            </h2>
          </div>
          <div className="subtext">
            <p>
              Some additional information about this feature to explain further.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);
