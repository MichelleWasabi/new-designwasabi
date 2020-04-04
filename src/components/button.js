import React from "react";

let Button = ({
  title = "Try",
  children,
  onClick,
  type = "submit",
  dataWait = "Almost sent...",
  className = "bg-gray-900 hover:bg-pink-200 text-white hover:text-black font-bold py-3 px-20 mb-12 rounded"
}) => {
  return (
    <button
      type={type}
      dataWait={dataWait}
      className={className}
      onClick={onClick ? onClick : () => {}}
    >
      {children ? children : title}
    </button>
  );
};

export default Button;
