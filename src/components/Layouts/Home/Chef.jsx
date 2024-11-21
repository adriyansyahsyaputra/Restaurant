import React from "react";
import { chefs } from "@/utils/dataChefs";
import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Chef() {
  return (
    <>
      {/* Chef Start */}
      <div className="container px-6 font-roboto mt-24 lg:px-12">
        <div className="text-center">
          <h3 className="font-thin text-xl mb-2">Our Chef</h3>
          <h3 className="text-4xl mb-2 font-semibold">Meet Our Chef</h3>
          <p className="text-sm">
            We also have some of our best chefs ready to serve your order
            anytime.
          </p>
        </div>
        <section className="mt-10 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {chefs.map((chef) => (
            <div
              key={chef.id}
              className="flex flex-col items-center text-center mb-3">
              <img
                src={chef.image}
                alt={chef.name}
                className="w-64 h-64 object-cover rounded-full"
              />
              <h4 className="text-xl text-red-500 font-serif mt-3">
                {chef.name}
              </h4>
              <p className="text-base font-serif">{chef.role}</p>
              <span className="border-black border-2 w-10 block my-3"></span>
              <div className="flex space-x-4">
                <a
                  href={chef.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-700 transition">
                  <Facebook size={25} />
                </a>
                <a
                  href={chef.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-500 hover:text-pink-700 transition">
                  <Instagram size={25} />
                </a>
                <a
                  href={chef.socials.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-600 transition">
                  <Twitter size={25} />
                </a>
              </div>
            </div>
          ))}
        </section>
      </div>
      {/* Chef End */}
    </>
  );
}
