import React, { useState, useEffect } from "react";
import { getDataDrinks } from "../../../utils/dataDrinks";
import { getDataFoods } from "../../../utils/dataFoods";
import Card from "../../Fragments/Card";

export default function Search({ setIsSearching }) {
  const [query, setQuery] = useState("");
  const [combinedData, setCombinedData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  // Menggabungkan data makanan dan minuman
  useEffect(() => {
    const allData = [...getDataFoods, ...getDataDrinks];
    setCombinedData(allData);
    setFilteredData(allData);
  }, []);

  // Implementasi pencarian dengan debouncing
  useEffect(() => {
    const handler = setTimeout(() => {
      const searchResult = combinedData.filter((item) =>
        item.name.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredData(searchResult);

      //  Mengatur status pencarian berdasarkan input query
      setIsSearching(query.trim() !== "");
    }, 300);

    return () => clearTimeout(handler); // Membersihkan timeout jika input berubah
  }, [query, combinedData, setIsSearching]);

  return (
    <div>
      {/* Input Pencarian */}
      <div className="w-full lg:w-1/3 mt-28">
        <input
          type="text"
          placeholder="Search..."
          className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition duration-300"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      {/* Menampilkan Hasil Pencarian Jika Query Tidak Kosong */}
      {query.trim() && (
        <section className="mt-10 grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:gap-8">
          {filteredData.length > 0 ? (
            filteredData.map((item) => (
              <div
                className="text-slate-600 bg-white rounded-lg shadow-lg"
                key={item.id}>
                <Card {...item} />
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500 col-span-full">
              No results found.
            </p>
          )}
        </section>
      )}
    </div>
  );
}
