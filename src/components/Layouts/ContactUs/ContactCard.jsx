import React from "react";

export default function ContactCard({
  icon: Icon,
  title,
  description,
  contact,
}) {

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 hover:shadow-xl transition-shadow duration-300 font-inter">
      <div className="flex items-center space-x-4 mb-4">
        <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-red-500" />
        <h3 className="text-lg sm:text-xl font-semibold">{title}</h3>
      </div>
      <p className="text-slate-600 mb-3 text-sm sm:text-base">{description}</p>
      <p className="text-red-600 font-medium hover:text-red-700 transition-colors">
        {contact}
      </p>  
    </div>
  );
}
