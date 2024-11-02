import React from "react";

export default function Chef() {
  return (
    <>
      {/*  Chef Start  */}
      <div className="container px-6 font-roboto mt-20 lg:px-12">
        <div className="text-center">
          <h3 className="font-thin text-xl mb-2">Our Chef</h3>
          <h3 className="text-4xl mb-2 font-semibold">Meet Our Chef</h3>
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            alias veniam unde ea iusto quidem!
          </p>
        </div>
        <section className="mt-10 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col items-center text-center mb-3">
            <img
              src="./public/img/chef/1.jpg"
              alt="Chef 1"
              width="250px"
              height="250px"
            />
            <h4 className="text-xl text-red-500 font-serif mt-3">
              Michael Gordon
            </h4>
            <p className="text-base font-serif">Head Chef</p>
            <span className="border-2 border-black w-10 block my-3"></span>
            <div className="flex">
              <li className="list-none mx-1 bg-amber-500 w-8 h-8 flex rounded-md cursor-pointer">
                <img
                  src="./public/img/icon/facebook.png"
                  width="25px"
                  alt="facebook"
                  className="m-auto"
                />
              </li>
              <li className="list-none mx-1 bg-amber-500 w-8 h-8 flex rounded-md cursor-pointer">
                <img
                  src="./public/img/icon/instagram.png"
                  width="25px"
                  alt="instagram"
                  className="m-auto"
                />
              </li>
              <li className="list-none mx-1 bg-amber-500 w-8 h-8 flex rounded-md cursor-pointer">
                <img
                  src="./public/img/icon/twitter.png"
                  width="25px"
                  alt="twitter"
                  className="m-auto"
                />
              </li>
            </div>
          </div>
          <div className="flex flex-col items-center text-center mb-3">
            <img
              src="./public/img/chef/2.jpg"
              alt="Chef 1"
              width="250px"
              height="250px"
            />
            <h4 className="text-xl text-red-500 font-serif mt-3">
              Francisca Veronika
            </h4>
            <p className="text-base font-serif">Head Chef</p>
            <span className="border-black border-2 w-10 block my-3"></span>
            <div className="flex">
              <li className="list-none mx-1 bg-amber-500 w-8 h-8 flex rounded-md cursor-pointer">
                <img
                  src="./public/img/icon/facebook.png"
                  width="25px"
                  alt="facebook"
                  className="m-auto"
                />
              </li>
              <li className="list-none mx-1 bg-amber-500 w-8 h-8 flex rounded-md cursor-pointer">
                <img
                  src="./public/img/icon/instagram.png"
                  width="25px"
                  alt="instagram"
                  className="m-auto"
                />
              </li>
              <li className="list-none mx-1 bg-amber-500 w-8 h-8 flex rounded-md cursor-pointer">
                <img
                  src="./public/img/icon/twitter.png"
                  width="25px"
                  alt="twitter"
                  className="m-auto"
                />
              </li>
            </div>
          </div>
          <div className="flex flex-col items-center text-center">
            <img
              src="./public/img/chef/3.jpg"
              alt="Chef 1"
              width="250px"
              height="250px"
            />
            <h4 className="text-xl text-red-500 font-serif mt-3">
              Joseph Calvin
            </h4>
            <p className="text-base font-serif">Head Chef</p>
            <span className="border-black border-2 w-10 block my-3"></span>
            <div className="flex">
              <li className="list-none mx-1 bg-amber-500 w-8 h-8 flex rounded-md cursor-pointer">
                <img
                  src="./public/img/icon/facebook.png"
                  width="25px"
                  alt="facebook"
                  className="m-auto"
                />
              </li>
              <li className="list-none mx-1 bg-amber-500 w-8 h-8 flex rounded-md cursor-pointer">
                <img
                  src="./public/img/icon/instagram.png"
                  width="25px"
                  alt="instagram"
                  className="m-auto"
                />
              </li>
              <li className="list-none mx-1 bg-amber-500 w-8 h-8 flex rounded-md cursor-pointer">
                <img
                  src="./public/img/icon/twitter.png"
                  width="25px"
                  alt="twitter"
                  className="m-auto"
                />
              </li>
            </div>
          </div>
        </section>
      </div>
      {/*  Chef End  */}
    </>
  );
}
