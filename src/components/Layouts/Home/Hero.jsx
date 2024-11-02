import React from "react";

export default function Hero() {
  return (
    <>
      {/* HERO Start */}
      <div className="container font-roboto max-w-full h-[550px] md:[500px] mt-20 lg:mt-[80px] bg-slate-200 px-6 shadow-md lg:px-12">
        <div className="text-center lg:flex lg:text-start lg:items-center">
          <div className="py-7 md:py-0">
            <h2 className="text-3xl font-bold mb-2 lg:text-5xl">
              Discover Restaurant & Delicious Food
            </h2>
            <p className="text-base mb-2">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime
              dolor dignissimos fugit quaerat error quae!
            </p>
            <button
              type="button"
              className="bg-red-500 px-3 py-2 rounded-xl shadow-lg text-slate-100 font-medium hover:bg-red-600">
              Order Now!
            </button>
          </div>
          <div>
            <img src="./public/img/burger.png" alt="Hero" />
          </div>
        </div>
      </div>
      {/* HERO End */}
    </>
  );
}
