import React from "react";
import Button from "../../Elements/Button/Button";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <>
      {/* HERO Start */}
      <div className="container font-roboto max-w-full h-[550px] md:[500px] mt-20 lg:mt-20 bg-slate-200 px-6 shadow-md lg:px-12">
        <div className="text-center lg:flex lg:text-start lg:items-center">
          <div className="py-7 md:py-0">
            <h2 className="text-3xl font-bold mb-4 lg:text-5xl">
              Discover Restaurant & Delicious Food
            </h2>
            <p className="text-base mb-4 max-w-lg mx-auto lg:mx-0">
              Indulge in a culinary journey where every dish is crafted with
              passion, combining the rich flavors of Indonesian and European
              cuisine to create an unforgettable dining experience.
            </p>
            <Link to="/menu">
              <Button classname="bg-red-500 px-3 py-2 mt-4 hover:bg-red-600">
                Order Now
              </Button>
            </Link>
          </div>
          <div className="md:flex md:justify-center">
            <img src="./public/img/burger.png" alt="Hero" />
          </div>
        </div>
      </div>
      {/* HERO End */}
    </>
  );
}
