import React from "react";
import Button from "../Elements/Button/Button";
import { useCart } from "../../contexts/cartContext";
import { Link } from "react-router-dom";

export default function Card(props) {
  const { name, rating, reviewer, price, image, id, quantity, description } = props;
  const { addToCart } = useCart();

  return (
    <>
      <Link
        to="/details"
        state={{ id, name, rating, reviewer, price, image, quantity, description }}>
        <img
          src={`/public/img/${image}`}
          alt={name}
          className="w-full h-48 md:h-52 object-center object-cover rounded-t-lg"
        />
      </Link>

      <div className="p-4 font-inter">
        <Link
          to={"/details"}
          state={{ id, name, rating, reviewer, price, image, quantity, description }}>
          <h1 className="text-lg">{name}</h1>
        </Link>
        <p className="text-xs">
          {rating} ({reviewer})
        </p>
        <p className="text-base font-semibold">
          {parseInt(price).toLocaleString("id-ID", {
            style: "currency",
            currency: "IDR",
          })}
        </p>
        <Button
          type="button"
          classname="bg-red-500 px-3 py-2 mt-4 hover:bg-red-600"
          onClick={() => addToCart({ id, name, price, image })}>
          Add to Cart!
        </Button>
      </div>
    </>
  );
}
