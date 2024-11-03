import React, { useState, useEffect } from "react";
import Card from "../../Fragments/Card";
import { getDataDrinks } from "../../../utils/dataDrinks";

export default function VariousDrinks() {
  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    const data = getDataDrinks;
    setDrinks(data); 
  }, []);

  return (
    <>
      <section className="mt-5 grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:gap-8">
        {drinks.map((drink) => (
          <div
            key={drink.id}
            className="text-slate-600 bg-white rounded-lg shadow-lg">
            <Card
              title={drink.nama}
              rating={drink.rating}
              reviewer={drink.reviewer}
              harga={drink.harga}
            />
          </div>
        ))}
      </section>
    </>
  );
}
