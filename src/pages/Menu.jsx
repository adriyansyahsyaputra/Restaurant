import React, { useState } from "react";
import Search from "../components/Layouts/Menu/Search";
import VariousDrinks from "../components/Layouts/Menu/VariousDrinks";
import VariousFoods from "../components/Layouts/Menu/VariousFoods";
import Footer from "../components/template/footer/Footer";
import Navbar from "../components/template/Navbar/Navbar";
import Hero from "@/components/Fragments/Hero";

export default function Menu() {
  const [isSearching, setIsSearching] = useState(false);

  return (
    <>
      <Navbar />
      <Hero
        title="Our Menu"
        subtitle="Explore our diverse menu crafted with the finest ingredients, blending traditional recipes with modern culinary techniques. From hearty meals to delightful desserts."
        image="/img/menu2.jpg"
      />
      <main className="container mt-16 px-6 md:px-12">
        {/* Komponen Search */}
        <Search setIsSearching={setIsSearching} />

        {/* Tampilkan Various Foods & Drinks hanya jika tidak sedang mencari */}
        {!isSearching && (
          <>
            <h1 className="text-xl font-inter font-semibold mt-6 md:mt-8">
              Various Foods
            </h1>
            <VariousFoods />
            <h1 className="text-xl font-inter font-semibold mt-14 md:mt-14 md:text-2xl">
              Various Drinks
            </h1>
            <VariousDrinks />
          </>
        )}
      </main>
      <Footer />
    </>
  );
}
