import React from "react";

export default function Footer() {
  return (
    <>
      {/* Footer Start */}
      <footer className="bg-slate-800 mt-20 w-full h-[680px] text-slate-100 px-6 text-center grid md:grid-cols-2 lg:grid-cols-4 place-items-center lg:h-72 font-inter">
        <div className="lg:text-start font-serif">
          <h2 className="text-xl font-semibold mb-2">My Restaurant</h2>
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
            soluta tenetur perferendis. Labore alias numquam optio at nostrum
            ipsa ducimus nam id, commodi quis adipisci!
          </p>
        </div>
        <div className="font-serif">
          <h2 className="text-xl font-semibold mb-2">Our Social</h2>
          <ul className="grid grid-cols-2 gap-2 lg:grid-cols-none">
            <li className="inline">
              <img
                src="./public/img/icon/facebook.png"
                alt="FB"
                className="inline w-4"
              />
              <a href="http://www.facebook.com" className="text-sm">
                My Restaurant
              </a>
            </li>
            <li className="inline">
              <img
                src="./public/img/icon/instagram.png"
                alt="IG"
                className="inline w-4"
              />
              <a href="http://www.instagram.com" className="text-sm">
                My Restaurant
              </a>
            </li>
            <li className="inline">
              <img
                src="./public/img/icon/twitter.png"
                alt="Twitter"
                className="inline w-4"
              />
              <a href="http://www.twitter.com" className="text-sm">
                My Restaurant
              </a>
            </li>
            <li className="inline">
              <img
                src="./public/img/icon/tiktok.png"
                alt="Tiktok"
                className="inline w-4"
              />
              <a href="http://www.tiktok.com" className="text-sm">
                My Restaurant
              </a>
            </li>
          </ul>
        </div>
        <div className="font-serif">
          <h2 className="text-xl font-semibold mb-2">Quick Links</h2>
          <ul className="grid grid-cols-2 gap-2 lg:grid-cols-none">
            <li>
              <a href="#" className="text-sm hover:text-red-500">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="text-sm hover:text-red-500">
                About
              </a>
            </li>
            <li>
              <a href="#menu" className="text-sm hover:text-red-500">
                Menu
              </a>
            </li>
            <li>
              <a href="#" className="text-sm hover:text-red-500">
                Gallery
              </a>
            </li>
            <li>
              <a href="#contact" className="text-sm hover:text-red-500">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="font-serif">
          <h2 className="text-xl font-semibold mb-2 lg:text-start">Location</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1990.509305351088!2d102.2763523930264!3d-3.806055306065295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e36b00c80e634df%3A0x99d9d1ad07a8faab!2sNusa%20Indah%2C%20Kec.%20Ratu%20Agung%2C%20Kota%20Bengkulu%2C%20Bengkulu!5e0!3m2!1sid!2sid!4v1727091062899!5m2!1sid!2sid"
            width="270"
            height="140"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </footer>
      {/* Footer End  */}
    </>
  );
}
