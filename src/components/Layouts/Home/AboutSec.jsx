import React from "react";

export default function AboutSec() {
  return (
    <>
      {/* About Section Start */}
      <div className="px-6 lg:flex lg:px-12">
        <div className="lg:w-1/2 mb-2">
          <h2 className="text-3xl text-center font-bold font-serif mb-2 lg:text-start">
            About Restaurant
          </h2>
          <p className="font-light text-base text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio,
            voluptatibus architecto! Atque placeat, omnis reprehenderit iste vel
            animi repellendus fugiat consequatur vitae totam architecto vero
            veniam corporis eum eius possimus nobis. Deleniti, veniam unde,
            repellat quae laudantium fugiat quo exercitationem, aut atque neque
            porro. Minus asperiores esse a id doloribus!
          </p>
        </div>
        <div className="lg:w-1/2">
          <img
            src="./public/img/about.png"
            alt="About"
            width="300px"
            height="300px"
            className="m-auto"
          />
        </div>
      </div>
      {/* About Section End */}
    </>
  );
}
