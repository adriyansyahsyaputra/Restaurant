import React from "react";

export default function Reason() {
  return (
    <>
      {/*  Why Choose Us Start  */}
      <div className="container px-6 mt-20 lg:px-12">
        <div className="text-center">
          <h3 className="font-thin text-xl mb-2">Why Choose Us?</h3>
          <p className="text-sm">
            Discover an exceptional dining experience with fresh ingredients,
            delicious flavors, and outstanding service tailored just for you.
          </p>
        </div>
        <section className="grid gap-3 mt-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="p-4 text-center">
            <img
              src="/img/icon/discount.png"
              alt="Best Offer"
              className="w-20 mx-auto mb-2"
            />
            <h5 className="font-normal text-xl font-serif">Best Offer</h5>
            <p className="tracking-wider text-sm">
              Enjoy the best deals and exclusive promotions that bring
              exceptional value to your dining experience.
            </p>
          </div>
          <div className="p-4 text-center">
            <img
              src="/img/icon/vegetables.png"
              alt="Fresh Ingredients"
              className="w-20 mx-auto mb-2"
            />
            <h5 className="font-normal text-xl font-serif">Fresh</h5>
            <p className="tracking-wider text-sm">
              We use only the freshest ingredients to ensure every dish bursts
              with natural flavors and quality.
            </p>
          </div>
          <div className="p-4 text-center">
            <img
              src="/img/icon/food.png"
              alt="Delicious Food"
              className="w-20 mx-auto mb-2"
            />
            <h5 className="font-normal text-xl font-serif">Delicious</h5>
            <p className="tracking-wider text-sm">
              Indulge in our carefully crafted menu featuring dishes that
              delight your taste buds with every bite.
            </p>
          </div>
          <div className="p-4 text-center">
            <img
              src="/img/icon/fast-time.png"
              alt="Fast Serving"
              className="w-20 mx-auto mb-2"
            />
            <h5 className="font-normal text-xl font-serif">Fast Serving</h5>
            <p className="tracking-wider text-sm">
              Experience swift and efficient service, ensuring your meals are
              served hot and fresh without delay.
            </p>
          </div>
        </section>
      </div>
      {/* Why Choose Us End  */}
    </>
  );
}
