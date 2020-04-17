import React from "react";
// import "../css/style.css";
// import SunBkg from "../assets/icons/SunBkg.svg";
import SunDance from "../components/SunDance";

let ByDay = ({
  title1 = "Learn More",
  children1,
  className1 = "text-base md:text-xl",
  title2 = "Learn More",
  children2,
  className2 = "text-xl md:text-4xl ",
  // src,
  // alt
}) => {
  return (
    <div className="md:flex md:items-center">
      <div className="flex flex-col h-56 md:h-96 justify-center text-center md:text-left md:mx-24">
        <p className={className1}>{children1 ? children1 : title1}</p>
        <h2 className={className2}>{children2 ? children2 : title2}</h2>
        {/* <img src={src} alt={alt} height="100px" width="100px" /> */}
      </div>
      <div>
        {/* <SunBkg /> */}
        <SunDance />
      </div>
    </div>
  );
};

export default ByDay;
