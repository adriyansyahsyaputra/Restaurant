import React from "react";

export default function ContactUs() {
  return (
    <>
      {/* Contact Us Start */}
      <div id="contact" className="container px-6 lg:px-24 mt-20">
        <div className="text-center mb-4">
          <h3 className="font-thin text-xl mb-2">Contact Us</h3>
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            alias veniam unde ea iusto quidem!
          </p>
        </div>
        <div className="grid lg:grid-cols-2 md:grid-cols-2 gap-4">
          <div className="lg:mr-3">
            <form action="">
              <label htmlFor="nama">
                <span className="block font-semibold text-slate-700 mb-1">
                  Name
                </span>
              </label>
              <input
                type="text"
                id="nama"
                placeholder="Input your name..."
                className="px-2 py-1 border shadow rounded w-full block placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-sky-500 focus:border-sky-500 mb-3"
              />

              <label htmlFor="email">
                <span className="block font-semibold text-slate-700 mb-1 after:content-['*'] after:text-pink-500 after:ml-0.5">
                  Email
                </span>
              </label>
              <input
                type="email"
                id="email"
                placeholder="Email"
                className="px-2 py-1 border shadow rounded w-full block text-sm placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-sky-500 focus:border-sky-500 invalid:text-pink-700 invalid:focus:ring-pink-700 invalid:focus:border-pink-700 peer"
              />
              <p className="text-sm m-1 text-pink-700 invisible peer-invalid:visible">
                Email tidak valid!
              </p>

              <label htmlFor="phone">
                <span className="block font-semibold text-slate-700 mb-1">
                  Phone
                </span>
              </label>
              <input
                type="number"
                id="phone"
                placeholder="Phone"
                className="px-2 py-1 border shadow rounded w-full block placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-sky-500 focus:border-sky-500 mb-3"
                required
              />

              <label htmlFor="perihal">
                <span className="block font-semibold text-slate-700 mb-1">
                  Subject
                </span>
              </label>
              <input
                type="text"
                id="perihal"
                placeholder="Subject"
                className="px-2 py-1 border shadow rounded w-full block placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-sky-500 focus:border-sky-500 mb-3"
              />

              <label htmlFor="pesan">
                <span className="block font-semibold text-slate-700 mb-1">
                  Message
                </span>
              </label>
              <textarea
                name="pesan"
                id="pesan"
                rows="5"
                placeholder="Type your message here..."
                className="border shadow rounded w-full block placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-sky-500 focus:border-sky-500 mb-3"></textarea>

              <button className="my-2 w-full py-3 bg-blue-600 rounded-lg text-white font-medium hover:bg-blue-700 transition duration-300">
                Send Message!
              </button>
            </form>
          </div>
          <div>
            <img
              src="./public/img/contact.png"
              width="550px"
              height="500px"
              alt="Contact Us"
            />
          </div>
        </div>
      </div>
      {/* Contact Us End */}
    </>
  );
}
