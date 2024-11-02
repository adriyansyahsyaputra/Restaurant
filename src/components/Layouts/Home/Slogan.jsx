import React from "react";

export default function Slogan() {
  return (
    <>
      <div className="container px-6 mt-10 text-center lg:text-start lg:px-32 lg:flex">
        <div className="h-14 bg-red-500 w-2 mr-2 hidden lg:block"></div>
        <div className="lg:w-1/2 lg:mr-7">
          <h3 className="text-xl text-wrap font-bold font-inter text-slate-800 mb-1">
            The best restaurant with a varied menu suitable for eating in or
            taking away
          </h3>
        </div>
        <div className="lg:w-1/2">
          <p className="text-base font-light text-slate-800">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Perspiciatis saepe omnis, error molestiae quidem quas quo vitae.
            Corporis accusantium expedita at aperiam officia dolor enim.
          </p>
        </div>
      </div>
    </>
  );
}
