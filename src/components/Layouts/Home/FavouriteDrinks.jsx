import React, { useState, useEffect } from "react";
import { getDataDrinks } from "../../../utils/dataDrinks";
import { Link } from "react-router-dom";

export default function FavouriteDrinks() {
  const [drinks, setFavouriteDrinks] = useState([]);

  useEffect(() => {
    const favouriteDrinks = getDataDrinks
      .filter((drink) => drink.rating > 4.5)
      .slice(0, 4);
    setFavouriteDrinks(favouriteDrinks);
  }, []);

  return (
    <>
      {/*  Favourite Drink Start  */}
      <div id="menu" className="container px-6 mt-20 lg:px-12 font-inter">
        <div className="text-center">
          <h3 className="font-thin text-xl mb-2">Favourite Drinks</h3>
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            alias veniam unde ea iusto quidem!
          </p>
        </div>
        <section className="mt-5 grid gap-4 grid-cols-2 md:grid-cols-2 lg:grid-cols-4 lg:gap-2">
          {drinks.map((drink) => (
            <div className="text-center" key={drink.id}>
              <Link to={`/details`} state={drink}>
                <img
                  src={`/public/img/${drink.image}`}
                  alt="Produk 1"
                  className="rounded-full mx-auto mb-2 w-32 h-32 md:w-48 md:h-48 object-cover"
                />
                <h5 className="text-lg font-serif font-normal">{drink.name}</h5>
              </Link>
              <p className="text-red-500 text-base tracking-wide font-semibold font-sans">
                {parseInt(drink.price).toLocaleString("id-ID", {
                  style: "currency",
                  currency: "IDR",
                })}
              </p>
            </div>
          ))}
        </section>
      </div>
      {/* Favourite Drinks End  */}
    </>
  );
}
