import React from "react";

export default function Input(props) {
    const {type, id, placeholder, classname} = props

  return (
    <input
      type={type}
      id={id}
      placeholder={placeholder}
      className={`px-2 py-1 border shadow rounded w-full block placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-sky-500 focus:border-sky-500 ${classname}`}></input>
  );
}
