import React, { useEffect } from "react";
import { gsap } from "gsap";
import NightBkg from "../assets/icons/NightBkg.svg";
// import MoonIcon from "../assets/icons/MoonIcon.svg";
// import MoonBkg from "../assets/icons/MoonBkg.svg";
// import BigStar from "../assets/icons/BigStar.svg";
// import Stars from "../assets/icons/Stars.svg";
// import Mountains from "../assets/icons/Mountains.svg";
import { MotionPathPlugin } from "gsap/MotionPathPlugin.js";

export default () => {
  gsap.registerPlugin(MotionPathPlugin);
  const tween = () => {
    gsap.to("#moon", {
      duration: 10,
      ease: "back.out(1)",
      runBackwards: "yes",
      repeat: 3,
      autoAlpha: 1,
      motionPath: {
        path: "#bottom-circle",
        align: "#bottom-circle",
        // autoRotate: true,
        alignOrigin: [0.5, 0.5],
        start: 0,
        end: .5
      },
    });
    
    gsap.from("#blinks",3,{autoAlpha: 0, ease: "linear)",repeat:-1, yoyo: true});
    // gsap.to("#moon", { delay: 5, duration: 1,  scale: 0.8, autoAlpha: 0 });
    // gsap.to("#moon", { delay: 8, display: "none" });
    
  };
  

  useEffect(() => {
    tween()
  });

  return (
    <div className="container">
      
      <svg width="1035px" height="439px" viewBox="-140 -10 900 500" id="svg" className="w-full md:w-auto">
       <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" strokeDasharray="20,50">
        <path d="M586.917077,555.306304 C555.138907,432.588665 443.653203,341.959828 311,341.959828 C209.27956,341.959828 120.005714,395.250032 69.5736309,475.435273" id="bottom-circle" stroke="#fbfbfb00" strokeWidth="3" strokeDasharray="20,50" transform="translate(328.245354, 448.633066) scale(1, -1) translate(-370.245354, -342.633066) "></path>

    </g>  
    <NightBkg/>
    <g
      id="blinks"
      transform="translate(320.8000, 82.180856)"
      fill="none">
    </g>
  
    <g
      id="moon"
      transform="translate(498.952481, 79.180856)"
      fill="none">
    </g>        
        

      </svg>
    </div>
  );
};
