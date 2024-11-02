import React from "react";

export default function Testimoni() {
  return (
    <>
      {/* Testimoni Start */}
      <div className="container w-full mt-20 bg-red-500 h-[800px] lg:h-[500px] flex flex-col items-center justify-center shadow-lg">
        <div className="px-6 lg:px-12">
          <div className="text-center text-white">
            <h3 className="font-thin text-xl mb-2">Testimony</h3>
            <h3 className="text-2xl mb-2 font-semibold lg:text-4xl">
              What Our Customer Say?
            </h3>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
              alias veniam unde ea iusto quidem!
            </p>
          </div>
          <section className="mt-10 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            <div className="text-center text-white mb-3">
              <img
                src="./public/img/Testimoni/1.png"
                alt="Testimoni 1"
                width="65px"
                height="60px"
                className="rounded-full border-4 border-teal-500 bg-white  bg-cover mb-1 shadow-xl m-auto"
              />
              <p className="font-light text-sm">Marisca Stanley</p>
              <blockquote className="text-sm font-thin tracking-wider">
                <span className="font-bold text-2xl">&quot;</span>Lorem ipsum
                dolor sit amet, consectetur adipisicing elit. Dolorem numquam
                enim illo totam aliquid saepe eligendi similique nulla.{" "}
                <span className="font-bold text-3xl ml-1">&quot;</span>
              </blockquote>
            </div>
            <div className="text-center text-white mb-3">
              <img
                src="./public/img/Testimoni/2.png"
                alt="Testimoni 1"
                width="65px"
                height="60px"
                className="rounded-full border-4 border-teal-500 bg-white  bg-cover mb-1 shadow-xl m-auto"
              />
              <p className="font-light text-sm">Jack Wider</p>
              <blockquote className="text-sm font-thin tracking-wider">
                <span className="font-bold text-2xl">&quot;</span>Lorem ipsum
                dolor sit amet, consectetur adipisicing elit. Dolorem numquam
                enim illo totam aliquid saepe eligendi similique nulla.{" "}
                <span className="font-bold text-3xl ml-1">&quot;</span>
              </blockquote>
            </div>
            <div className="text-center text-white mb-3">
              <img
                src="./public/img/Testimoni/3.png"
                alt="Testimoni 1"
                width="65px"
                height="60px"
                className="rounded-full border-4 border-teal-500 bg-white  bg-cover mb-1 shadow-xl m-auto"
              />
              <p className="font-light text-sm">Jason McMany</p>
              <blockquote className="text-sm font-thin tracking-wider">
                <span className="font-bold text-2xl">&quot;</span>Lorem ipsum
                dolor sit amet, consectetur adipisicing elit. Dolorem numquam
                enim illo totam aliquid saepe eligendi similique nulla.{" "}
                <span className="font-bold text-3xl ml-1">&quot;</span>
              </blockquote>
            </div>
          </section>
        </div>
      </div>
      {/* Testimoni End */}
    </>
  );
}
