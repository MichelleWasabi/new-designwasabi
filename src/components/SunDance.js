import React, { useEffect } from "react";
import { gsap } from "gsap";
import SunIcon from "../assets/icons/SunIcon.svg";
import { MotionPathPlugin } from "gsap/MotionPathPlugin.js";

export default () => {
  gsap.registerPlugin(MotionPathPlugin);
  const tween = () => {
    gsap.from(".sun", {
      duration: 9,
      ease: "circ.in",
      autoAlpha: 1,
      motionPath: {
        path: "#Stroke-88",
        align: "#Stroke-88",
        autoRotate: 10,
        alignOrigin: [0.5, 0.5],
      },
    });

    gsap.to(".sun", { delay: 6, duration: 2, display: "none", scale: 0.7 });
  };

  useEffect(() => {
    tween();
  });

  return (
    <div className="container">
      <svg width="650px" height="650px" viewBox="0 0 700 700" id="svg">
        {/* <path
          id="path"
          d="M578.492965,327.930376 C560.082575,470.55421 438.048671,580.894 290.447,580.894 C130.145,580.894 1.13686838e-13,450.749 1.13686838e-13,290.447 C1.13686838e-13,130.145 130.145,1.13686838e-13 290.447,1.13686838e-13 C437.307183,1.13686838e-13 558.855837,109.233975 578.207672,250.816635"
          fill="none"
          stroke="none"
        /> */}
          <path d="M-6.25277607e-13,246.174 C20.8706,106.853 138.6794,4.40536496e-13 280.6964,4.40536496e-13 C344.5054,4.40536496e-13 403.4274,21.571 450.8654,57.966" id="Stroke-88"/>
        <g
          className="sun"
          transform="translate(498.952481, 79.180856)"
          fill="none"
        >
          <SunIcon />
        </g>
        <g></g>
      </svg>
    </div>
  );
};
