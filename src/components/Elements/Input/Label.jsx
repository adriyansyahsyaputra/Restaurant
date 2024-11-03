import React from "react";

export default function Label(props) {
    const {htmlFor, children, classname} = props

    return (
      <>
        <label
          htmlFor={htmlFor}
          className={`block text-sm font-medium text-slate-700 ${classname}`}>
          {children}
        </label>
      </>
    );
}