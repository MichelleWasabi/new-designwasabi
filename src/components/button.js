import React from "react";

let Button = ({
  title = "Try",
  children,
  onClick,
  className = "bg-gray-900 hover:bg-pink-200 text-white hover:text-black font-bold py-2 px-24 rounded"
}) => {
  return (
    <button className={className} onClick={onClick ? onClick : () => {}}>
      {children ? children : title}
    </button>
  );
};

export default Button;
