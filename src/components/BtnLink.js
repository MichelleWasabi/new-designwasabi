import React from "react";

let BtnLink = ({
  title = "Learn More",
  children,
  href,
  className = "text-white hover:text-black font-bold ",
}) => {
  return (
    <div className="contact-link width-fit bg-gray-900 hover:bg-flowerLight py-2 md:py-3 px-8 md:px-20 mt-2 md:mt-3 mx-auto md:mx-0 rounded">
      <a href={href} className={className}>
        {children ? children : title}
      </a>
    </div>
  );
};

export default BtnLink;
