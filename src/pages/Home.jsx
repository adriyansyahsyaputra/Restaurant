import React from "react";
import Navbar from "../components/template/Navbar/Navbar";
import Hero from "../components/Layouts/Home/Hero";
import Slogan from "../components/Layouts/Home/Slogan";
import AboutSec from "../components/Layouts/Home/AboutSec";
import ChooseUs from "../components/Layouts/Home/ChooseUs";
import FavouriteFoods from "../components/Layouts/Home/FavouriteFoods";
import FavouriteDrinks from "../components/Layouts/Home/FavouriteDrinks";
import Reason from "../components/Layouts/Home/ChooseUs";
import Chef from "../components/Layouts/Home/Chef";
import Testimoni from "../components/Layouts/Home/Testimoni";
import ContactUs from "../components/Layouts/Home/ContactUs";
import Footer from "../components/template/footer/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Slogan />
      <main className="container mt-10">
        <AboutSec />
        <ChooseUs />
        <FavouriteFoods />
        <FavouriteDrinks />
        <Reason />
        <Chef />
        <Testimoni />
        <ContactUs />
      </main>
      <Footer />
    </>
  );
}
