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
            Sajian du Monde was founded with the aim of bringing Indonesian and
            European delicacies together in one meal. We serve the best dishes
            from various countries with a touch of Indonesian spices, making
            each dish a memorable, warm and adventurous taste. From refreshing
            appetizers, to mouth-watering main courses and desserts, Sajian du
            Monde invites you to experience the uniqueness of world cuisine
            without leaving the city.
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
