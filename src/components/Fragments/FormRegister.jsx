import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Untuk navigasi
import Label from "../Elements/Input/Label";
import Input from "../Elements/Input/Input";
import Button from "../Elements/Button/Button";
import InputLabel from "../Elements/Input";

export default function FormRegister() {
  const [isPassword, setIsPassword] = useState(false);
  const [isConfirmPassword, setIsConfirmPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const togglePassword = () => {
    setIsPassword((prevState) => !prevState);
  };

  const toggleConfirmPassword = () => {
    setIsConfirmPassword((prevState) => !prevState);
  };

  function handleRegister(e) {
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

    // Validasi jika username sudah ada
    const isUserExist = users.some((user) => user.username === username || user.email === email);
    if (isUserExist) {
      setMessage("Username or email already exists!");
      return;
    }

    // Validasi jika password dan confirm password tidak cocok
    if (password !== confirmPassword) {
      setMessage("Passwords do not match!");
      return;
    }

    // Simpan user baru
    const newUser = { username, email, password };
    localStorage.setItem("users", JSON.stringify([...users, newUser]));

    // Tampilkan pesan sukses dan reset input
    setMessage("Registration successful!");
    setUsername("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");

    // Pindahkan user ke halaman login setelah delay untuk melihat pesan
    setTimeout(() => {
      navigate("/login");
    }, 1500);
  }

  return (
    <>
      <form action="" onSubmit={handleRegister}>
        <div className="mb-4">
          <InputLabel 
          htmlFor="username"
          label="Username"
          type="text"
          id="username"
          placeholder="Enter your name"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="mt-1"
          />
        </div>
        <div>
          <Label
            htmlFor="email"
            className="font-semibold mb-1 after:content-['*'] after:text-pink-500 after:ml-0.5">
            Email
          </Label>
          <Input
            type="email"
            id="email"
            placeholder="JohnDoe@gmail.com"
            className="text-sm invalid:text-pink-700 invalid:focus:ring-pink-700 invalid:focus:border-pink-700 peer"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <p className="text-xs mt-1 text-pink-700 invisible peer-invalid:visible">
            Email tidak valid!
          </p>
        </div>
        <div className="mb-4 relative">
          <InputLabel 
          htmlFor="password"
          label="Password"
          type={isPassword ? "text" : "password"}
          id="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mt-1"
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
          <InputLabel 
          htmlFor="confirmPassword"
          label="Confirm Password"
          type={isConfirmPassword ? "text" : "password"}
          id="confirmPassword"
          placeholder="Confirm your password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="mt-1"
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
        <p className="text-red-500 text-sm mb-4">{message}</p>
        <Button
          type="submit"
          classname="w-full bg-red-500 font-bold py-2 hover:bg-red-600 transition duration-200">
          Register
        </Button>
      </form>
    </>
  );
}
