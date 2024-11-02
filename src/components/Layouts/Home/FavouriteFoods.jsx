import React from "react";

export default function FavouriteFoods() {
  return (
    <>
      {/*  Favourite Food Start  */}
      <div id="menu" className="container px-6 mt-20 lg:px-12 font-inter">
        <div className="text-center">
          <h3 className="font-thin text-xl mb-2">Favourite Foods</h3>
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            alias veniam unde ea iusto quidem!
          </p>
        </div>
        <section className="mt-5 grid gap-4 grid-cols-2 md:grid-cols-2 lg:grid-cols-4 lg:gap-2">
          <div className="text-center">
            <img
              src="./public/img/nasgor.png"
              alt="Produk 1"
              className="rounded-full mx-auto mb-2"
            />
            <h5 className="text-lg font-serif font-normal">Nasi Goreng</h5>
            <p className="text-red-500 text-base tracking-wide font-semibold font-sans">
              Rp. 35.000
            </p>
          </div>
          <div className="text-center">
            <img
              src="./public/img/tteokbokki.png"
              alt="Produk 1"
              className="rounded-full mx-auto mb-2"
            />
            <h5 className="text-lg font-serif font-normal">Tteokbokki</h5>
            <p className="text-red-500 text-base tracking-wide font-semibold font-sans">
              Rp. 45.000
            </p>
          </div>
          <div className="text-center">
            <img
              src="./public/img/nasgor.png"
              alt="Produk 1"
              className="rounded-full mx-auto mb-2"
            />
            <h5 className="text-lg font-serif font-normal">Nasi Goreng</h5>
            <p className="text-red-500 text-base tracking-wide font-semibold font-sans">
              Rp. 35.000
            </p>
          </div>
          <div className="text-center">
            <img
              src="./public/img/tteokbokki.png"
              alt="Produk 1"
              className="rounded-full mx-auto mb-2"
            />
            <h5 className="text-lg font-serif font-normal">Tteokbokki</h5>
            <p className="text-red-500 text-base tracking-wide font-semibold font-sans">
              Rp. 45.000
            </p>
          </div>
        </section>
      </div>
      {/*  Favourite Food End  */}
    </>
  );
}
