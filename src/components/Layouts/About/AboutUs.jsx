import React from "react";
import {
  MapPin,
  Globe,
  ChefHat,
  Heart,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";
import Hero from "@/components/Fragments/Hero";
import { Link } from "react-router-dom";
import { chefs } from "@/utils/dataChefs";

const AboutUs = () => {
  return (
    <main className="bg-gradient-to-br from-white via-gray-50 to-gray-100">
      {/* Hero Section */}
      <Hero
        title="About Us"
        subtitle="At the heart of our restaurant is a passion for creating memorable dining moments. Join us to continue this journey, celebrating food, culture and togetherness."
        image="/img/aboutUs.jpg"
        className="bg-red-500"
      />

      {/* Story Section */}
      <StorySection />

      {/* Mission & Values */}
      <MissionValuesSection />

      {/* Team Showcase */}
      <TeamShowcase />

      {/* CTA Section */}
      <CtaSection />
    </main>
  );
};

export default AboutUs;

function StorySection() {
  return (
    <>
      <div className="container mx-auto px-4 md:px-12 py-16 grid md:grid-cols-2 gap-12 items-center">
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
            src="/img/chef/chef-cook.jpg"
            alt="Culinary Preparation"
            className="w-full h-64 object-cover rounded-lg shadow-lg"
          />
          <img
            src="/img/chef/chef-cook2.jpg"
            alt="Chef Preparing Dish"
            className="w-full h-64 object-cover rounded-lg shadow-lg self-end"
          />
        </div>
      </div>
    </>
  );
}

function MissionValuesSection() {
  return (
    <>
      <div className="bg-white py-16 px-4 md:px-12">
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
    </>
  );
}

function TeamShowcase() {
  return (
    <>
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Meet Our Culinary Team
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {chefs.map((chef, index) => (
            <div key={index} className="text-center">
              <img
                src={chef.image}
                alt={chef.name}
                className="w-64 h-64 mx-auto object-cover rounded-full shadow-lg mb-6"
              />
              <h3 className="text-xl font-semibold text-gray-800">
                {chef.name}
              </h3>
              <p className="text-gray-600 mb-4">{chef.role}</p>
              <div className="flex justify-center space-x-4">
                <a
                  href={chef.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 transition">
                  <Facebook className="fab fa-facebook-square text-2xl" />
                </a>
                <a
                  href={chef.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-500 hover:text-pink-700 transition">
                  <Instagram className="fab fa-instagram text-2xl" />
                </a>
                <a
                  href={chef.socials.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-600 transition">
                  <Twitter className="fab fa-twitter text-2xl" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

function CtaSection() {
  return (
    <>
      <div className="bg-blue-600 text-white py-16 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-6">
            Experience Culinary Fusion
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Join us on a gastronomic journey that celebrates the diversity of
            world cuisine, right here in the heart of the city.
          </p>
          <Link to="/menu">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors">
              Book a Table
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}