import React, { useState } from "react";
import Button from "../Elements/Button/Button";
import InputLabel from "../Elements/Input";
import { useNavigate } from "react-router-dom";

export default function FormLogin() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prevState) => !prevState);
  };

  function handleLogin(e) {
    e.preventDefault();

    // Ambil data user dari localStorage
    let users = [];
    try {
      const storedUsers = localStorage.getItem("users");
      users = storedUsers ? JSON.parse(storedUsers) : [];
    } catch (error) {
      console.error("Error parsing users:", error);
      users = [];
    }

    // Cari user dengan username yang sesuai
    const user = users.find((u) => u.username === username && u.password === password);

    if (user) {
      // Login berhasil, arahkan ke halaman utama
      setUsername("");
      setPassword("");

      navigate("/");
    } else {
      // Login gagal, tampilkan pesan error
      setMessage("Login failed. Please check your username and password.");
    }
  }

  return (
    <>
      <form action="" onSubmit={handleLogin}>
        <div className="mb-4">
          <InputLabel
            htmlFor="username"
            label="Username"
            type="text"
            id="username"
            placeholder="Enter your username"
            className="mt-1"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-4 relative">
          <InputLabel
            htmlFor="password"
            label="Password"
            type={isPasswordVisible ? "text" : "password"}
            id="password"
            placeholder="Enter your password"
            className="mt-1"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p>{message}</p>
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
