import React from "react";

const Button = ({ onClick, children }) => {
  return (
    <div
      className="bg-indigo-600 w-100 text-white py-2 px-6 my-10 rounded hover:bg-indigo-700 max-w-xs"
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Button;
