import React from "react";

export default function Reason() {
  return (
    <>
      {/*  Reason Start  */}
      <div className="container px-6 mt-20 font-inter lg:flex lg:px-12">
        <div className="lg:w-1/2 text-center lg:text-start lg:my-auto lg:items-center">
          <h3 className="text-4xl font-semibold">Discover the</h3>
          <h3 className="text-4xl font-semibold">True Meaning of</h3>
          <h3 className="text-4xl font-semibold mb-3">Taste.</h3>
          <p className="text-sm font-serif mb-2">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est
            voluptatum soluta assumenda tempore fugit, provident voluptatibus.
            Corrupti deleniti incidunt distinctio debitis non, earum voluptates
            et hic? Necessitatibus sapiente ullam quam veniam sit tenetur fugiat
            dolores!
          </p>
          <button
            type="button"
            className="bg-red-500 px-4 py-3 rounded-lg shadow-lg text-slate-100 font-medium hover:bg-red-600 mb-6">
            Book A Table
          </button>
        </div>
        <div className="lg:w-1/2">
          <img
            src="./public/img/room.jpg"
            alt="Room"
            width="300px"
            height="200px"
            className="m-auto rounded-sm"
          />
        </div>
      </div>
      {/*  Reason End */}
    </>
  );
}
