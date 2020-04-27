import React from "react";

let TagOutline = ({
  title = "Learn More",
  children,
  href,
  className = "text-white",
}) => {
  return (
    <div className="bg-transparent py-2 px-12 border border-white opacity-75 rounded">
      <small href={href} className={className}>
        {children ? children : title}
      </small>
    </div>
  );
};

export default TagOutline;
