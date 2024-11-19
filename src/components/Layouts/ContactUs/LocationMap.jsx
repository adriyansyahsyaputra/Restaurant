import React from "react";
import { MapPin, Clock } from "lucide-react";

export default function LocationMap() {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 order-1 lg:order-2">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6">Our Location</h2>
      <div className="w-full h-[300px] sm:h-[350px] md:h-[400px] rounded-lg overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.9740594303958!2d110.36326270972201!3d-7.792571077304333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a5742a17e8c33%3A0xf92dc9a55003beb0!2sMalioboro%20Yogyakarta!5e0!3m2!1sid!2sid!4v1732020092083!5m2!1sid!2sid"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      <div className="mt-6 space-y-4 font-roboto">
        <div className="flex items-start space-x-3 text-slate-600">
          <MapPin className="w-5 h-5 mt-1" />
          <span className="text-sm sm:text-base">
            Jl. Malioboro, Sosromenduran, Gedong Tengen, Kota Yogyakarta, Daerah
            Istimewa Yogyakarta
          </span>
        </div>
        <div className="flex items-start space-x-3 text-slate-600">
          <Clock className="w-5 h-5 mt-1" />
          <div className="text-sm sm:text-base">
            <p>Monday - Friday: 9:00 AM - 10:00 PM</p>
            <p>Saturday: 9:00 AM - 12:00 PM</p>
            <p>Sunday: 9: 00 AM - 11:00 PM</p>
          </div>
        </div>
      </div>
    </div>
  );
}
