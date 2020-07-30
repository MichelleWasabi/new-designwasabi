import React from "react";

let BLink = ({
  title = "Learn More",
  children,
  href,
  className = "bg-gray-900 hover:bg-flowerLight text-white hover:text-black font-bold py-2 px-8 md:py-3 md:px-20 rounded"
}) => {
  return (
    <a href={href} className={className}>
      {children ? children : title}
    </a>
  );
};

export default BLink;
