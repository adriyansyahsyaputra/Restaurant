import React, { useState, useEffect, useRef } from "react";
import MenuNavbar from "../../Elements/Menu/Menu";
import CartNav from "../../Fragments/CartNav";
import Alert from "@/components/Fragments/Alert";

export default function Navbar() {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const headerRef = useRef(null);
  const [isFixed, setIsFixed] = useState(false);
  const [user, setUser] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [alert, setAlert] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const header = headerRef.current;
      const fixedNav = header.offsetTop;

      if (window.pageYOffset > fixedNav) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Mengambil data user jika token ada
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const storedUsers = localStorage.getItem("users");
      if (storedUsers) {
        const users = JSON.parse(storedUsers);
        // Asumsi user pertama adalah user yang login
        setUser(users[0]);
      }
    } else {
      setUser(null);
    }
  }, []);

  function toggleHamburger() {
    setIsHamburgerOpen(!isHamburgerOpen);
  }

  function toggleDropdown() {
    setIsDropdownOpen(!isDropdownOpen);
  }

  function handleLogout() {
    setAlert(true);

    setTimeout(() => {
      setAlert(false);
      window.location.href = "/";
    }, 2000);

    localStorage.removeItem("token");
    setUser(null);
  }

  return (
    <>
      <header
        ref={headerRef}
        className={`bg-transparent font-inter absolute top-0 left-0 w-full flex items-center z-10 lg:px-12 ${
          isFixed ? "navbar-fixed" : ""
        }`}>
        <div className="container">
          <div className="flex items-center justify-between relative">
            <div className="px-4">
              <a href="/" className="font-bold text-xl text-red-500 block py-6">
                Sajian du Monde
              </a>
            </div>
            <div className="flex items-center px-4">
              <button
                id="hamburger"
                name="hamburger"
                type="button"
                onClick={toggleHamburger}
                className={`block absolute right-4 lg:hidden ${
                  isHamburgerOpen ? "hamburger-active" : ""
                }`}>
                <span className="hamburger-line transition duration-300 ease-in-out origin-top-left"></span>
                <span className="hamburger-line transition duration-300 ease-in-out"></span>
                <span className="hamburger-line transition duration-300 ease-in-out origin-bottom-left"></span>
              </button>

              {/* Cart for mobile & hidden on desktop */}
              <CartNav classname="block mr-5 lg:hidden" />

              {/* Nav Menu */}
              <nav
                id="nav-menu"
                className={`${
                  isHamburgerOpen ? "block" : "hidden"
                } absolute py-5 bg-white shadow-lg rounded-lg max-w-64 w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none`}>
                <ul className="block lg:flex lg:items-center">
                  <li className="group lg:inline-block">
                    <MenuNavbar title="Home" link="/" />
                  </li>
                  <li className="group lg:inline-block">
                    <MenuNavbar title="Menu" link="/menu" />
                  </li>
                  <li className="group lg:inline-block">
                    <MenuNavbar title="About" link="/about" />
                  </li>
                  <li className="group lg:inline-block">
                    <MenuNavbar title="Contact" link="/contact" />
                  </li>

                  {/* Cart for desktop */}
                  <CartNav classname="hidden lg:block" />

                  {user ? (
                    <div className="relative ml-7 lg:ml-0">
                      <div
                        onClick={toggleDropdown}
                        className="flex items-center space-x-2 cursor-pointer hover:bg-gray-100 p-2 rounded-lg transition-all duration-300">
                        <img
                          src="/public/img/default.jpg"
                          alt="Profile"
                          className="w-10 h-10 rounded-full object-cover border-2 border-gray-300 group-hover:border-blue-500"
                        />
                        <div>
                          <p className="text-sm font-semibold text-gray-800">
                            {user.username || "User"}
                          </p>
                          <p className="text-xs text-gray-500">Online</p>
                        </div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className={`w-4 h-4 ml-2 transform transition-transform ${
                            isDropdownOpen ? "rotate-180" : ""
                          }`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </div>

                      {isDropdownOpen && (
                        <div className="absolute right-0 mt-2 w-56 bg-white shadow-xl rounded-lg border border-gray-100 z-50 overflow-hidden">
                          <div className="px-4 py-3 border-b border-gray-200">
                            <p className="text-sm font-medium text-gray-900">
                              {user.username}
                            </p>
                            <p className="text-xs text-gray-500 truncate">
                              {user.email}
                            </p>
                          </div>
                          <ul className="py-1">
                            <li>
                              <a
                                href="/profile"
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors">
                                Profile
                              </a>
                            </li>
                            <li>
                              <a
                                href="/settings"
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors">
                                Settings
                              </a>
                            </li>
                            <li>
                              <hr className="my-1 border-gray-200" />
                            </li>
                            <li>
                              <button
                                onClick={handleLogout}
                                className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors">
                                Logout
                              </button>
                            </li>
                          </ul>
                        </div>
                      )}
                    </div>
                  ) : (
                    <li className="group lg:inline-block">
                      <MenuNavbar title="Login" link="/login" />
                    </li>
                  )}
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
      <Alert
        isOpen={alert}
        title="Logout Berhasil"
        description="Terimakasih telah menggunakan layanan kami"
      />
    </>
  );
}
