import React, { useEffect } from "react";
import { gsap } from "gsap";

import MoonIcon from "../assets/icons/MoonIcon.svg";
import MoonBkg from "../assets/icons/MoonBkg.svg";
import BigStar from "../assets/icons/BigStar.svg";
// import Stars from "../assets/icons/Stars.svg";
// import Mountains from "../assets/icons/Mountains.svg";
import { MotionPathPlugin } from "gsap/MotionPathPlugin.js";

export default () => {
  gsap.registerPlugin(MotionPathPlugin);
  const tween = () => {
    gsap.to(".moon", {
      duration: 8,
      ease: "back.out(1)",
      runBackwards: "yes",
      repeat: 3,
      autoAlpha: 1,
      motionPath: {
        path: "#bottom-circle",
        align: "#bottom-circle",
        alignOrigin: [0.5, 0.5],
        // autoRotate: -50,
      },
    });
    
    gsap.to(".moon", { delay: 1, duration: 1,  scale: 0.8, autoAlpha: 0 });
    gsap.to(".moon", { delay: 2, display: "none" });
    gsap.from(".mountains", { y: 300, scaleY: .1, autoAlpha: 0});
    gsap.to(".mountains", { duration: 3, ease: "bounce.out", y: 10, scaleY: 1, autoAlpha: 1});
    gsap.to(".blinks", {duration: 1, autoAlpha: 1, repeat: 10, ease: "none", yoyo:true, repeatDelay: 1});
  };
  

  useEffect(() => {
    tween()
  });

  return (
    <div className="container">
      <svg width="620px" height="620px" viewBox="-100 0 810 450" id="svg">
       <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" strokeDasharray="20,50">
        <path d="M570,285 C570,127.598846 442.401154,0 285,0 C127.598846,0 0,127.598846 0,285" id="bottom-circle"  stroke="none" strokeWidth="3" transform="translate(285.000000, 142.500000) scale(1, -1) translate(-255.000000, -355.500000) "></path>

    </g>  
    <g
          className="blinks"
           transform="translate(320.8000, 82.180856)"
          fill="none"
        >
          <BigStar />
        </g>
  
        <g
          className="moon"
          transform="translate(498.952481, 79.180856)"
          fill="none"
        >
          <MoonIcon />
        </g>        
        <g
          className="bkg"
          transform="translate(0.952481, 20.180856)"
          fill="none"
        >
          <MoonBkg />
        </g>     
 
      </svg>
    </div>
  );
};
