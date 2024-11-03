import React, { useState } from "react";
import Label from "../Elements/Input/Label";
import Input from "../Elements/Input/Input";
import Button from "../Elements/Button/Button";

export default function FormLogin() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prevState) => !prevState);
  };

  return (
    <>
      <form action="">
        <div className="mb-4">
          <Label htmlFor="username">Username</Label>
          <Input
            type="text"
            id="username"
            placeholder="Enter your username"
            classname="mt-1"
          />
        </div>
        <div className="mb-4 relative">
          <Label htmlFor="password">Password</Label>
          <Input
            type={isPasswordVisible ? "text" : "password"}
            id="password"
            placeholder="Enter your password"
            classname="mt-1"
          />
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute inset-y-0 right-3 top-6 flex items-center text-gray-500">
            <img
              src={
                isPasswordVisible
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
          Login
        </Button>
      </form>
    </>
  );
}
