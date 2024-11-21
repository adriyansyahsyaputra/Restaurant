import React, { useEffect, useState } from "react";
import { getDataFoods } from "../../../utils/dataFoods";
import { Link } from "react-router-dom";

export default function FavouriteFoods() {
  const [foods, setFavouriteFoods] = useState([]);

  useEffect(() => {
    const favouriteFoods = getDataFoods
      .filter((food) => food.rating > 4.5)
      .slice(0, 4);
    setFavouriteFoods(favouriteFoods);
  }, []);

  return (
    <>
      {/*  Favourite Food Start  */}
      <div id="menu" className="container px-6 mt-20 lg:px-12 font-inter">
        <div className="text-center">
          <h3 className="font-thin text-xl mb-2">Favourite Foods</h3>
          <p className="text-sm">
            Here we show you some of our customers favorite dishes at our
            restaurant
          </p>
        </div>
        <section className="mt-5 grid gap-4 grid-cols-2 md:grid-cols-2 lg:grid-cols-4 lg:gap-2">
          {foods.map((food) => (
            <div className="text-center" key={food.id}>
              <Link to={`/details`} state={food}>
                <img
                  src={`/img/${food.image}`}
                  alt="Produk 1"
                  className="rounded-full mx-auto mb-2 w-32 h-32 md:w-48 md:h-48 object-cover"
                />
                <h5 className="text-lg font-serif font-normal">{food.name}</h5>
              </Link>
              <p className="text-red-500 text-base tracking-wide font-semibold font-sans">
                {parseInt(food.price).toLocaleString("id-ID", {
                  style: "currency",
                  currency: "IDR",
                })}
              </p>
            </div>
          ))}
        </section>
      </div>
      {/*  Favourite Food End  */}
    </>
  );
}
