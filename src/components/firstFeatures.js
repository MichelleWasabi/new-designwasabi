import React from "react";
import "../css/style.css";

let FirstFeatures = ({
header, 
children,
feature,
}) => {
  return(
<section className="featureWrapper text-center my-12 md:my-48 ">
    <h2 className="header-text">{children ? children : header}</h2>
    <div  className=" md:flex md:mt-24 text-center">
      {feature.map(({title, content, src, imgClass}) => (
    <div key={title} className="feature-one md:w-1/3 my-6 md:my-0">
      <div  className="feature-icon flex justify-center ">
          <img
            className={imgClass}
            src={src}
            alt=""
          />
        </div>
        <div  className="feature-content my-6 ">
          <div className="title">
            <h2 className="text-xl md:text-2xl tracking-tighter">
             {title}
            </h2>
          </div>
          <div className="subtext">
            <p>
              {content}
            </p>
          </div>
        </div>
      </div>
        ))}  
      </div>

  </section>
  );
};

export default FirstFeatures;