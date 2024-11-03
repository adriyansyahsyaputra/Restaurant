import React, { useState } from "react";
import FormLogin from "../../Fragments/FormLogin";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <>
      <div className="w-full h-screen flex justify-center items-center bg-gray-100">
        <LeftLayout />
        <div className="w-full md:w-1/2 h-full flex flex-col justify-center px-4 items-center bg-slate-100">
          <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
            <h1 className="text-3xl font-semibold mb-4">Login</h1>
            <p className="mb-6 text-sm">
              Welcome back, please login to your account!
            </p>
            <FormLogin />
            <DividerWithText />
            <SocialLogin /> 
          </div>
        </div>
      </div>
    </>
  );
}

function LeftLayout() {
  return (
    <div className="w-1/2 hidden h-full md:flex flex-col justify-center items-center bg-red-500 text-white">
      <h1 className="text-4xl font-bold mb-4">Welcome Back</h1>
      <p className="text-lg text-center px-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
        error eum provident impedit consequatur suscipit?
      </p>
    </div>
  );
}

function DividerWithText() {
  return (
    <div className="flex items-center my-4 font-inter">
      <hr className="flex-1 border-gray-300" />
      <span className="mx-2 text-gray-600">Or continue with</span>
      <hr className="flex-1 border-gray-300" />
    </div>
  );
}

function SocialLogin() {
  return (
    <>
      {/*Social Login Options */}
      <div className="mt-4 flex flex-col-2 gap-2 font-inter">
        <a
          href="#"
          className="flex items-center justify-center w-full bg-blue-600 text-white font-semibold py-2 rounded hover:bg-blue-700 transition duration-200">
          <img
            src="./public/img/icon/facebook.png"
            width="25px"
            alt="google"
            className="mr-2"></img>
          Facebook
        </a>
        <a
          href="#"
          className="flex items-center justify-center w-full bg-white text-slate-600 font-semibold py-2 rounded border border-slate-500 hover:bg-slate-100 transition duration-200">
          <img
            src="./public/img/icon/google.png"
            width="25px"
            alt="google"
            className="mr-2"></img>{" "}
          Google
        </a>
      </div>

      <p className="mt-4 text-center">
        Dont have an account?{" "}
        <Link to={"/register"} className="text-red-500 hover:underline">
          Register
        </Link>
      </p>
    </>
  );
}