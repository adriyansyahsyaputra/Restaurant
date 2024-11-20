import React from "react";
import { MapPin, Globe, ChefHat, Heart } from "lucide-react";
import Hero from "@/components/Fragments/Hero";

const AboutUs = () => {
  return (
    <div className="bg-gradient-to-br from-white via-gray-50 to-gray-100">
      {/* Hero Section */}
      <Hero
        title="About Us"
        subtitle="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime dolor dignissimos fugit quaerat error quae!"
        image="/img/aboutUs.jpg"
      />

      {/* Story Section */}
      <div className="container mx-auto px-4 py-16 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Our Culinary Journey
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Sajian du Monde was founded with a passion to transcend traditional
            culinary boundaries. Our story begins with a simple yet profound
            belief: great food knows no borders. We are culinary explorers,
            combining the rich, bold flavors of Indonesian cuisine with the
            refined techniques of European gastronomy.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Every dish is a narrative, carefully crafted to tell a story of
            cultural fusion, respect for ingredients, and the universal language
            of delicious food.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <img
            src="/img/chef/1.jpg"
            alt="Culinary Preparation"
            className="w-full h-64 object-cover rounded-lg shadow-lg"
          />
          <img
            src="/img/chef/1.jpg"
            alt="Chef Preparing Dish"
            className="w-full h-64 object-cover rounded-lg shadow-lg self-end"
          />
        </div>
      </div>

      {/* Mission & Values */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Our Philosophy
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Globe className="w-12 h-12 text-blue-600" />,
                title: "Global Inspiration",
                description:
                  "Drawing culinary techniques and flavors from around the world.",
              },
              {
                icon: <ChefHat className="w-12 h-12 text-green-600" />,
                title: "Culinary Craftsmanship",
                description:
                  "Meticulous preparation and presentation of each unique dish.",
              },
              {
                icon: <Heart className="w-12 h-12 text-red-600" />,
                title: "Passion-Driven",
                description:
                  "Creating experiences that touch the heart through food.",
              },
              {
                icon: <MapPin className="w-12 h-12 text-purple-600" />,
                title: "Local Roots",
                description:
                  "Honoring Indonesian culinary traditions while exploring global flavors.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="text-center space-y-4 p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-all">
                <div className="flex justify-center">{item.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Showcase */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Meet Our Culinary Team
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              name: "Chef Maria Santos",
              role: "Executive Chef",
              image: "/img/chef/1.jpg",
            },
            {
              name: "Chef Rudi Hartono",
              role: "Sous Chef",
              image: "/img/chef/2.jpg",
            },
            {
              name: "Chef Elena Rodriguez",
              role: "Pastry Chef",
              image: "/img/chef/3.jpg",
            },
          ].map((chef, index) => (
            <div key={index} className="text-center">
              <img
                src={chef.image}
                alt={chef.name}
                className="w-64 h-64 mx-auto object-cover rounded-full shadow-lg mb-6"
              />
              <h3 className="text-xl font-semibold text-gray-800">
                {chef.name}
              </h3>
              <p className="text-gray-600">{chef.role}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600 text-white py-16 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-6">
            Experience Culinary Fusion
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join us on a gastronomic journey that celebrates the diversity of
            world cuisine, right here in the heart of the city.
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors">
            Book a Table
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
