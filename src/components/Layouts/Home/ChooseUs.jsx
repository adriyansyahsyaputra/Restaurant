import React from "react";

export default function Reason() {
  return (
    <>
      {/*  Why Choose Us Start  */}
      <div className="container px-6 mt-20 lg:px-12">
        <div className="text-center">
          <h3 className="font-thin text-xl mb-2">Why Choose Us?</h3>
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            alias veniam unde ea iusto quidem!
          </p>
        </div>
        <section className="grid gap-3 mt-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="p-4 text-center">
            <img
              src="./public/img/icon/discount.png"
              alt=""
              className="w-20 mx-auto mb-2"
            />
            <h5 className="font-normal text-xl font-serif">Best Over</h5>
            <p className="tracking-wider text-sm">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum nam
              quod assumenda nostrum repellendus quis.
            </p>
          </div>
          <div className="p-4 text-center">
            <img
              src="./public/img/icon/vegetables.png"
              alt=""
              className="w-20 mx-auto mb-2"
            />
            <h5 className="font-normal text-xl font-serif">Fresh</h5>
            <p className="tracking-wider text-sm">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum nam
              quod assumenda nostrum repellendus quis.
            </p>
          </div>
          <div className="p-4 text-center">
            <img
              src="./public/img/icon/food.png"
              alt=""
              className="w-20 mx-auto mb-2"
            />
            <h5 className="font-normal text-xl font-serif">Delicious</h5>
            <p className="tracking-wider text-sm">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum nam
              quod assumenda nostrum repellendus quis.
            </p>
          </div>
          <div className="p-4 text-center">
            <img
              src="./public/img/icon/fast-time.png"
              alt=""
              className="w-20 mx-auto mb-2"
            />
            <h5 className="font-normal text-xl font-serif">Fast serving</h5>
            <p className="tracking-wider text-sm">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum nam
              quod assumenda nostrum repellendus quis.
            </p>
          </div>
        </section>
      </div>
      {/* Why Choose Us End  */}
    </>
  );
}
