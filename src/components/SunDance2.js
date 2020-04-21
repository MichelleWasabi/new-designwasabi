import React, { useEffect } from "react";
import { gsap } from "gsap";
// import Cloud1 from "../assets/icons/Cloud1.svg";
import DayBkg from "../assets/icons/DayBkg.svg";
import { MotionPathPlugin } from "gsap/MotionPathPlugin.js";

export default () => {
  gsap.registerPlugin(MotionPathPlugin);
  const tween = () => {
    gsap.to("#sun", {
      duration: 18,
      ease: "back.out(1)",
      autoAlpha: 1,
      motionPath: {
        path: "#top-circle",
        align: "#top-circle",
        autoRotate: 20,
        alignOrigin: [0.5, 0.5],
      },
    });
    
    gsap.to("#sun", { delay: 6, duration: 2,  scale: 0.7, autoAlpha: 0 });
    gsap.to("#sun", { delay: 7, display: "none" });
    gsap.from(".mountains", { y: 300, scaleY: .1, autoAlpha: 0});
    gsap.to(".mountains", { duration: 3, ease: "bounce.out", y: 50, scaleY: 1, autoAlpha: 1});
    gsap.to("#cloud1", {duration: 5, x: 220, repeat: 5, yoyo: true, ease: "none"});
    gsap.from("#cloud2", {duration: 8, x: 120, repeat: 5, yoyo: true, ease: "none"});
    
  };
  

  useEffect(() => {
    tween()
  });

  return (
    <div className="container">
      <svg width="600px" height="600px" viewBox="-100 0 770 450" id="svg">
        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" strokeDasharray="20,50">
        <path d="M611,285 C611,127.598846 483.401154,0 326,0 C168.598846,0 41,127.598846 41,285" id="top-circle" stroke="none" strokeWidth="3" strokeDasharray="20,50" transform="translate(0, 50)"></path>
    </g>  



     <DayBkg/>
       <g
          id="sun"
          // transform="translate(180.8000, 200.180856)"
          fill="none"
        > 
      </g>
       <g
          id="cloud1"
          // transform="translate(180.8000, 200.180856)"
          fill="none"
        > 
      </g>
       <g
          id="cloud2"
          // transform="translate(180.8000, 200.180856)"
          fill="none"
        > 
      </g>
      </svg>
    </div>
  );
};
