import React from "react";
import Hero from "@/components/Fragments/Hero";

export default function AboutUs() {
  return (
    <>
      <main className="bg-slate-100">
        <Hero
          title="About Us"
          subtitle="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime dolor dignissimos fugit quaerat error quae!"
          image="/img/aboutUs.jpg"
        />
      </main>
    </>
  );
}
