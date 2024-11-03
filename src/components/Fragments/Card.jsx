import React from "react";
import Button from "../Elements/Button/Button";

export default function Card(props) {
  const { title, rating, reviewer, harga } = props;

  return (
    <>
      <img
        src="./public/img/nasgor.png"
        alt="Menu 1"
        className="w-full h-max"
      />
      <div className="p-4 font-inter">
        <h1 className="text-lg">{title}</h1>
        <p className="text-xs">
          {rating} ({reviewer})
        </p>
        <p className="text-base font-semibold">
          {harga}
        </p>
        <Button
          type="button"
          classname="bg-red-500 px-3 py-2 mt-4 hover:bg-red-600">
          Add to Cart!
        </Button>
      </div>
    </>
  );
}
