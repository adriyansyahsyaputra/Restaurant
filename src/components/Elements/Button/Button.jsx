import React from "react";

export default function Button(props) {
    const { children, classname, onClick = () => {}, type = "button" } = props

    return (
      <button
        className={`font-inter font-medium text-slate-100 rounded-xl shadow-lg ${classname} `} onClick={onClick} type={type}>
        {children}
      </button>
    );

}