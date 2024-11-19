import React from "react";
import { Phone, Mail, MapPin} from "lucide-react";
import Hero from "@/components/Fragments/Hero";
import ContactCard from "./ContactCard";
import LocationMap from "./LocationMap";
import FormContact from "./FormContact";

// Contact Form Component
function ContactForm() {

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 order-2 lg:order-1">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6">Send us a message</h2>
        <FormContact />
    </div>
  );
};


// Main Contact Page Component
function ContactPage() {
  const contactCards = [
    {
      icon: Phone,
      title: "Call Us",
      description: "Everyday from 9:00 AM to 5:00 PM",
      contact: "+62 892 3354 675",
    },
    {
      icon: Mail,
      title: "Email Us",
      description: "We'll respond within 24 hours",
      contact: "dumonde@gmail..com",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      description: "Come say hello at our office",
      contact:
        "Jl. Malioboro, Sosromenduran, Gedong Tengen, Kota Yogyakarta, Daerah Istimewa Yogyakarta",
    },
  ];

  return (
    <main className="bg-slate-100">
      <Hero
        title="Get in Touch"
        subtitle="We'd love to hear from you. Whether you have a question about
              our services, pricing, or anything else, our team is ready to
              answer all your questions."
        image="/img/contact.jpg"
      />

      {/* Contact Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 sm:-mt-12 md:-mt-16 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {contactCards.map((card, index) => (
            <ContactCard key={index} {...card} />
          ))}
        </div>
      </div>

      {/* Form and Map Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          <ContactForm />
          <LocationMap />
        </div>
      </div>
    </main>
  );
};

export default ContactPage;
