import React, { useState, useEffect } from "react";
import Card from "../../Fragments/Card";
import { getDataFoods } from "../../../utils/dataFoods";

export default function VariousFoods() {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    setFoods(getDataFoods);
  }, []);

  return (
    <>
      <section className="mt-5 grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:gap-8">
        {foods.map((food) => (
          <div
            key={food.id}
            className="text-slate-600 bg-white rounded-lg shadow-lg">
            <Card
              id={food.id}
              name={food.name}
              rating={food.rating}
              price={food.price.toLocaleString("id-ID", {
                style: "currency",
                currency: "IDR",
              })}
              reviewer={food.reviewer}
              image={food.image}
            />
          </div>
        ))}
      </section>
    </>
  );
}
