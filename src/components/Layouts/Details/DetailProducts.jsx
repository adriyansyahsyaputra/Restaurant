import React from "react";
import Button from "../../Elements/Button/Button";
import { useLocation, useNavigate } from "react-router-dom";
import { useCart } from "../../../contexts/cartContext";

export default function DetailProducts() {
    const location = useLocation();
    const navigate = useNavigate();
    const data = location.state;
    const { addToCart } = useCart();

    const { id, name, rating, reviewer, price, image, quantity } = data;

  return (
    <>
      <div className="w-full mx-auto p-6 bg-red-100 rounded-lg shadow-md flex flex-col md:flex-row font-inter">
        <img
          src={`./public/img/${image}`}
          alt={name}
          className="w-full md:w-60 h-60 object-cover rounded-lg"
        />
        <div className="mt-4 md:mt-0 md:ml-6 flex flex-col justify-between">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
            {name}
          </h2>
          <p className="text-sm md:text-base text-gray-700 mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas quia
            minima adipisci ea facere architecto itaque ipsa ex amet ipsum?
          </p>
          <div className="mt-3 text-gray-700 text-sm md:text-base">
            <p>
              {rating} ({reviewer})
            </p>
            <p className="mt-1 font-semibold md:text-lg">
              {parseInt(price).toLocaleString("id-ID", {
                style: "currency",
                currency: "IDR",
              })}
            </p>
            <p className="mt-1 font-semibold">Sisa barang: {quantity}</p>
          </div>
          <Button
            classname="bg-red-500 px-4 py-2 mt-4 hover:bg-red-600"
            onClick={() => addToCart({ id, name, price, image })}>
            Add to Cart!
          </Button>
        </div>
      </div>
    </>
  );
}
