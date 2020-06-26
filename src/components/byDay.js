import React from "react";

let ByDay = ({
  title1 = "Learn More",
  children1,
  className1 = "text-base md:text-xl",
  title2 = "Learn More",
  children2,
  className2 = "text-xl md:text-4xl ",
  sun,
  moon,
  
}) => {
  return (
    <div className="md:flex md:items-center">
      {/* <div className="flex flex-col h-56 md:h-96 justify-center text-center md:text-left md:ml-40">
        <h2 className={className2}>{children2 ? children2 : title2}</h2>
        <p className={className1}>{children1 ? children1 : title1}</p>
      </div>
      <div>
        {sun}
        {moon}
      </div> */}
      <div className="flex flex-col h-108 md:h-120 justify-center text-center md:ml-40">
        <h2 className={className2}>{children2 ? children2 : title2}</h2>
        <p className={className1}>{children1 ? children1 : title1}</p>
         {sun}
        {moon}
      </div>
      
    </div>
  );
};

export default ByDay;
