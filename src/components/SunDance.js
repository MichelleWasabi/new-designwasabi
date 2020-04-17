import React, { useEffect } from "react";
import { gsap } from "gsap";
import SunIcon from "../assets/icons/SunIcon.svg";
import Mountains from "../assets/icons/Mountains.svg";
import { MotionPathPlugin } from "gsap/MotionPathPlugin.js";

export default () => {
  gsap.registerPlugin(MotionPathPlugin);
  const tween = () => {
    gsap.to(".sun", {
      duration: 10,
      ease: "back.out(1)",
      autoAlpha: 1,
      motionPath: {
        path: "#top-circle",
        align: "#top-circle",
        autoRotate: 10,
        alignOrigin: [0.5, 0.5],
      },
    });
    gsap.to(".sun", { delay: 1, duration: 3,  scale: 0.7 });
    gsap.from(".mountains", {delay: 3, y: 300, scaleY: .1, autoAlpha: 0,});
    gsap.to(".mountains", { duration: 4, ease: "bounce.out", y: 10, scaleY: 1.3,autoAlpha: 1});

    // display: "none",
    // gsap.to("mountains", {duration: 6, })
  };
  

  useEffect(() => {
    tween()
  });

  return (
    <div className="container">
      <svg width="650px" height="650px" viewBox="0 0 650 650" id="svg">
       <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-dasharray="20,50">
        <path d="M570,287 C570,129.598846 442.401154,2 285,2 C127.598846,2 0,129.598846 0,287" id="top-circle" stroke="#000000" stroke-width="3"></path>
    </g>  
        <g
          className="sun"
          transform="translate(498.952481, 79.180856)"
          fill="none"
        >
          <SunIcon />
        </g>
        <g
          className="mountains"
          transform="translate(-50.8000, -160.180856)"
          fill="none"
        >
          <Mountains />
        </g>
       


      </svg>
    </div>
  );
};
