import React from "react";

let LinkOutline = ({
  title = "Learn More",
  children,
  href,
  className = "text-blue-700 hover:text-white font-bold ",
}) => {
  return (
    <div className="bg-transparent hover:bg-blue-500 font-semibold  py-2 px-4 border border-blue-500 hover:border-transparent rounded">
      <a href={href} className={className}>
        {children ? children : title}
      </a>
    </div>
  );
};

export default LinkOutline;
