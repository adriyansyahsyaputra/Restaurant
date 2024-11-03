import React from "react";

export default function Search() {
  return (
    <>
      {/* Search input */}
      <div className="w-full lg:w-1/3 mt-28">
        <input
          type="text"
          placeholder="Search..."
          className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition duration-300"
        />
      </div>
    </>
  );
}
