import React from "react";
import { Link } from "react-router-dom";

export default function MenuNavbar(props) {
    const { title, link } = props
  return (
    <>
        <Link
          to={link}
          className="text-base text-slate-800 py-2 mx-8 px-2 flex relative group-hover:bg-red-500 group-hover:text-white rounded-lg transition-all duration-300">
          {title}
          {/* Background kecil di hover --> */}
          <span className="absolute inset-0 w-full h-full bg-red-500 rounded-lg scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100 -z-10"></span>
        </Link>
    </>
  );
}
