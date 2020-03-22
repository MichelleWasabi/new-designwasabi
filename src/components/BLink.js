import React from "react";

let BLink = ({
  title = "Learn More",
  children,
  href,
  className = "bg-gray-900 hover:bg-red-200 text-white hover:text-black font-bold py-2 px-24 rounded"
}) => {
  return (
    <a href={href} className={className}>
      {children ? children : title}
    </a>
  );
};

export default BLink;
