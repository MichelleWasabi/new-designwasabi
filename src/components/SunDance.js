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
      scale: 0.8,
      autoAlpha: 1,
      motionPath: {
        path: "#top-circle",
        align: "#top-circle",
        alignOrigin: [0.5, 0.5],
         // autoRotate: -10,
      },
    });
    
    // gsap.to("#sun", { delay: 7, duration: 2,  scale: 0.7 });
    // gsap.to("#sun", { delay: 7,  duration: 8, rotate: 360, repeat: -1, ease:"Linear.easeNone "});
    gsap.fromTo("#sun", {rotation: 0},{ rotation: 360, duration: 20, repeat: -1, ease: "linear"
    },0);
    gsap.from(".mountains", { y: 300, scaleY: .1, autoAlpha: 0});
    gsap.to(".mountains", { duration: 3, ease: "bounce.out", y: 50, scaleY: 1, autoAlpha: 1});
    gsap.to("#cloud1", {duration: 5, x: 220, repeat: -1, yoyo: true, ease: "none"});
    gsap.from("#cloud2", {duration: 10, x: 120, repeat: -1, yoyo: true, ease: "none"});
    
  };
  

  useEffect(() => {
    tween()
  });

  return (
    <div className="container">
      <svg width="1035px" height="439px" viewBox="-70 -10 900 500" id="svg" className="w-full md:w-auto">
        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" strokeDasharray="20,50">
        <path d="M611,285 C611,127.598846 483.401154,0 326,0 C168.598846,0 41,127.598846 41,285" id="top-circle" stroke="none" strokeWidth="3" strokeDasharray="20,50" transform="translate(86, 50)"></path>
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
