import React from "react";

export default function Hero({ title, subtitle, image }) {
  return (
    <div className="relative bg-red-500 text-white mt-20 h-80 md:h-[450px]">
      <div className="absolute inset-0">
        <img
          src={image}
          alt="Contact Hero"
          className="w-full h-full object-cover opacity-30"
        />
      </div>
      <div className="relative max-w-7xl mx-auto py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
            {title}
          </h1>
          <p className="text-base sm:text-lg md:text-xl max-w-xl sm:max-w-2xl md:max-w-3xl mx-auto text-slate-100 px-4">
            {subtitle}
          </p>
        </div>
      </div>
    </div>
  );
}
