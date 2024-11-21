import React from "react";
import Button from "../../Elements/Button/Button";
import Label from "../../Elements/Input/Label";
import Input from "../../Elements/Input/Input";
import InputLabel from "../../Elements/Input";

export default function ContactUs() {
  return (
    <>
      {/* Contact Us Start */}
      <div id="contact" className="container px-6 lg:px-24 mt-20">
        <HeaderContact />
        <div className="grid lg:grid-cols-2 md:grid-cols-2 gap-4">
          <div className="lg:mr-3">
            <form action="">
              <Label htmlFor="nama" className="mb-1">
                Nama
              </Label>
              <Input
                type="text"
                id="nama"
                placeholder="Input your name..."
                className="mb-3"></Input>

              <Label
                htmlFor="email"
                className="font-semibold mb-1 after:content-['*'] after:text-pink-500 after:ml-0.5">
                Email
              </Label>
              <Input
                type="email"
                id="email"
                placeholder="JohnDoe@gmail.com"
                className="text-sm invalid:text-pink-700 invalid:focus:ring-pink-700 invalid:focus:border-pink-700 peer"></Input>
              <p className="text-xs m-1 text-pink-700 invisible peer-invalid:visible">
                Email tidak valid!
              </p>

              <Label htmlFor="phone" className="mb-1">
                Phone
              </Label>
              <Input
                type="number"
                id="phone"
                className="mb-3"
                placeholder="+628123456789"></Input>

              <Label htmlFor="perihal" className="mb-1">
                Subject
              </Label>
              <Input
                type="text"
                id="perihal"
                placeholder="Input your subject..."
                className="mb-3"></Input>

              <Label htmlFor="pesan" className="mb-1">
                Message
              </Label>
              <textarea
                name="pesan"
                id="pesan"
                rows="5"
                placeholder="Type your message here..."
                className="border shadow rounded w-full block placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-sky-500 focus:border-sky-500 mb-3"></textarea>

              <Button classname="my-2 w-full py-3 bg-blue-600 hover:bg-blue-700 transition duration-300">
                Send Message
              </Button>
            </form>
          </div>
          <div>
            <img
              src="/img/contact.png"
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

function HeaderContact() {
  return (
    <div className="text-center mb-4">
      <h3 className="font-thin text-xl mb-2">Contact Us</h3>
      <p className="text-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis alias
        veniam unde ea iusto quidem!
      </p>
    </div>
  );
}
