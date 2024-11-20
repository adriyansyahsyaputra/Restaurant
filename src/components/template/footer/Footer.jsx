import React from "react";

export default function Footer() {
  return (
    <>
      {/* Footer Start */}
      <footer className="bg-slate-800 mt-20 w-full text-slate-100 px-6 py-10 text-center md:text-left grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-items-center md:place-items-start lg:place-items-start font-inter">
        <div className="font-serif mb-6 md:mb-0">
          <h2 className="text-xl font-semibold mb-2">My Restaurant</h2>
          <p className="text-sm">
            Sajian du Monde is a restaurant that combines the flavors of
            Indonesia with classic cuisines from around the world. Each dish is
            made with carefully selected ingredients and cooking techniques that
            blend the richness of local and global flavors.
          </p>
        </div>

        <div className="font-serif mb-6 lg:ml-16 md:ml-16 lg:mb-0">
          <h2 className="text-xl font-semibold mb-2">Our Social</h2>
          <ul className="grid grid-cols-2 gap-2 lg:grid-cols-1">
            <li className="flex items-center">
              <img
                src="./public/img/icon/facebook.png"
                alt="FB"
                className="inline w-4 mr-2"
              />
              <a
                href="http://www.facebook.com"
                className="text-sm hover:text-red-500">
                My Restaurant
              </a>
            </li>
            <li className="flex items-center">
              <img
                src="./public/img/icon/instagram.png"
                alt="IG"
                className="inline w-4 mr-2"
              />
              <a
                href="http://www.instagram.com"
                className="text-sm hover:text-red-500">
                My Restaurant
              </a>
            </li>
            <li className="flex items-center">
              <img
                src="./public/img/icon/twitter.png"
                alt="Twitter"
                className="inline w-4 mr-2"
              />
              <a
                href="http://www.twitter.com"
                className="text-sm hover:text-red-500">
                My Restaurant
              </a>
            </li>
            <li className="flex items-center">
              <img
                src="./public/img/icon/tiktok.png"
                alt="Tiktok"
                className="inline w-4 mr-2"
              />
              <a
                href="http://www.tiktok.com"
                className="text-sm hover:text-red-500">
                My Restaurant
              </a>
            </li>
          </ul>
        </div>

        <div className="font-serif mb-6 mb:mb-0 md:mt-10 lg:mt-0">
          <h2 className="text-xl font-semibold mb-2">Quick Links</h2>
          <ul className="grid grid-cols-2 gap-2 lg:text-center lg:grid-cols-1">
            <li>
              <a href="/" className="text-sm hover:text-red-500">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="text-sm hover:text-red-500">
                About
              </a>
            </li>
            <li>
              <a href="/menu" className="text-sm hover:text-red-500">
                Menu
              </a>
            </li>
            <li>
              <a href="/contact" className="text-sm hover:text-red-500">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div className="font-serif mb-6 lg:mb-0 md:mt-9 md:ml-12 lg:ml-0 lg:mt-0">
          <h2 className="text-xl font-semibold mb-2">Location</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.9740594303958!2d110.36326270972201!3d-7.792571077304333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a5742a17e8c33%3A0xf92dc9a55003beb0!2sMalioboro%20Yogyakarta!5e0!3m2!1sid!2sid!4v1732020092083!5m2!1sid!2sid"
            width="270"
            height="160"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </footer>
      {/* Footer End */}
    </>
  );
}
