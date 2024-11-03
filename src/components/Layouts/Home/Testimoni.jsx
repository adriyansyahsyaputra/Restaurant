import React from "react";

export default function Testimoni() {
  return (
    <>
      {/* Testimoni Start */}
      <div className="container w-full mt-20 bg-red-500 h-auto lg:h-auto flex flex-col items-center justify-center shadow-lg py-10">
        <div className="px-6 lg:px-12">
          <div className="text-center text-white">
            <h3 className="font-thin text-xl mb-2">Testimony</h3>
            <h3 className="text-2xl mb-4 font-semibold lg:text-4xl">
              What Our Customers Say?
            </h3>
            <p className="text-sm max-w-md mx-auto">
              A memorable experience with a unique taste of the world at Sajian
              du Monde. Enjoy a meal that takes you around the world!
            </p>
          </div>
          <section className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "Marisca Stanley",
                image: "./public/img/Testimoni/1.png",
                quote:
                  "Sajian du Monde is truly a unique restaurant. I felt like I was traveling the world with every mouthful. The Indonesian dishes are also amazing!",
              },
              {
                name: "Jack Wider",
                image: "./public/img/Testimoni/2.png",
                quote:
                  "This place is very cozy and classy. The food is amazingly good, and the presentation is very chic. Will definitely be back again!",
              },
              {
                name: "Jason McMany",
                image: "./public/img/Testimoni/3.png",
                quote:
                  "This was an unforgettable culinary experience! I loved the fusion of flavors presented in each dish. Sajian du Monde took me on an enchanting adventure of flavors.",
              },
            ].map(({ name, image, quote }, index) => (
              <div
                key={index}
                className="text-center text-white mb-3 p-4 transition-transform transform hover:scale-105 hover:bg-opacity-50 bg-white bg-opacity-10 rounded-lg shadow-lg">
                <img
                  src={image}
                  alt={`Testimoni ${index + 1}`}
                  width="65"
                  height="60"
                  className="rounded-full border-4 border-teal-500 bg-white mb-2 shadow-xl m-auto"
                />
                <p className="font-light text-sm">{name}</p>
                <blockquote className="text-sm font-thin tracking-wider">
                  <span className="font-bold text-2xl">&quot;</span>
                  {quote}
                  <span className="font-bold text-3xl ml-1">&quot;</span>
                </blockquote>
              </div>
            ))}
          </section>
        </div>
      </div>
      {/* Testimoni End */}
    </>
  );
}
