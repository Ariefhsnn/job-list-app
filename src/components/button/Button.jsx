import React from "react";

export function Button(props) {
  let { variant, children, disabled } = props;
  const primary =
    "flex items-center bg-sky-700 text-white shadow-md font-bold px-4 py-2 hover:bg-sky-900 focus:outline-none duration-300 transition transform hover:shadow-offset-black focus:shadow-offset-black rounded";
  const outline =
    "flex items-center bg-white shadow-md font-bold text-[10px] px-4 py-2 uppercase hover:bg-white focus:outline-none duration-300 transition transform hover:shadow-offset-black focus:shadow-offset-black border rounded";
  const disableColor =
    "flex items-center text-gray-500 opacity-50 font-bold focus:outline-none rounded";
  return (
    <button
      {...props}
      className={` ${variant === "primary" ? primary : outline} ${disabled && disableColor} ${props.className}`}
    >
      {!children ? "Klik" : children}
    </button>
  );
}
