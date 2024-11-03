import React from "react";
import Button from "../../Elements/Button/Button";

export default function Reason() {
  return (
    <>
      {/*  Reason Start  */}
      <div className="container px-6 mt-24 font-inter lg:flex lg:px-12">
        <div className="lg:w-1/2 text-center lg:text-start lg:my-auto lg:items-center">
          <h3 className="text-4xl font-semibold">Discover the</h3>
          <h3 className="text-4xl font-semibold">True Meaning of</h3>
          <h3 className="text-4xl font-semibold mb-3">Taste.</h3>
          <p className="text-sm font-serif mb-2">
            At Sajian du Monde, we don{"'"}t just serve food, we bring experiences.
            Each dish is a perfect blend of flavor, presentation and tradition.
            We present dishes that not only delight the palate, but also enrich
            the soul.
          </p>
          <Button
            classname="bg-red-500 mt-3 px-4 py-3 hover:bg-red-600 mb-6">
            Book A Table
          </Button>
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
