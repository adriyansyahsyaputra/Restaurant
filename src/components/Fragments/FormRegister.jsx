import React, { useState } from "react";
import Label from "../Elements/Input/Label";
import Input from "../Elements/Input/Input";
import Button from "../Elements/Button/Button";

export default function FormRegister() {
  const [isPassword, setIsPassword] = useState(false);
  const [isConfirmPassword, setIsConfirmPassword] = useState(false);

  const togglePassword = () => {
    setIsPassword((prevState) => !prevState);
  };

  const toggleConfirmPassword = () => {
    setIsConfirmPassword((prevState) => !prevState);
  };

  return (
    <>
      <form action="">
        <div className="mb-4">
          <Label htmlFor="username">Username</Label>
          <Input
            type="text"
            id="username"
            placeholder="Enter your name"
            classname="mt-1"
          />
        </div>
        <div>
          <Label
            htmlFor="email"
            classname="font-semibold mb-1 after:content-['*'] after:text-pink-500 after:ml-0.5">
            Email
          </Label>
          <Input
            type="email"
            id="email"
            placeholder="JohnDoe@gmail.com"
            classname="text-sm invalid:text-pink-700 invalid:focus:ring-pink-700 invalid:focus:border-pink-700 peer"></Input>
          <p className="text-xs mt-1 text-pink-700 invisible peer-invalid:visible">
            Email tidak valid!
          </p>
        </div>
        <div className="mb-4 relative">
          <Label htmlFor="password">Password</Label>
          <Input
            type={isPassword ? "text" : "password"}
            id="password"
            placeholder="Enter your password"
            classname="mt-1"
          />
          <button
            type="button"
            onClick={togglePassword}
            className="absolute inset-y-0 right-3 top-6 flex items-center text-gray-500">
            <img
              src={
                isPassword
                  ? "/public/img/icon/eye-on.png"
                  : "/public/img/icon/eye-hide.png"
              }
              className="w-6 h-6"
              alt="Toggle Password Visibility"
            />
          </button>
        </div>

        <div className="mb-4 relative">
          <Label htmlFor="password">Confirm Password</Label>
          <Input
            type={isConfirmPassword ? "text" : "password"}
            id="password"
            placeholder="Enter your password"
            classname="mt-1"
          />
          <button
            type="button"
            onClick={toggleConfirmPassword}
            className="absolute inset-y-0 right-3 top-6 flex items-center text-gray-500">
            <img
              src={
                isConfirmPassword
                  ? "/public/img/icon/eye-on.png"
                  : "/public/img/icon/eye-hide.png"
              }
              className="w-6 h-6"
              alt="Toggle Password Visibility"
            />
          </button>
        </div>
        <Button
          type="submit"
          classname="w-full bg-red-500 font-bold py-2 hover:bg-red-600 transition duration-200">
          Register
        </Button>
      </form>
    </>
  );
}
