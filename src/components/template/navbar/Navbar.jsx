import React, { useState, useEffect, useRef } from "react";
import MenuNavbar from "../../Elements/Menu/Menu";
import CartNav from "../../Fragments/CartNav";

export default function Navbar() {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const headerRef = useRef(null);
  const [isFixed, setIsFixed] = useState(false);

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

  function toggleHamburger() {
    setIsHamburgerOpen(!isHamburgerOpen);
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
              <a href="#" className="font-bold text-xl text-red-500 block py-6">
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

              {/* <!-- Cart for mobile & hidden on desktop --> */}
              <CartNav classname="block mr-5 lg:hidden" />

              {/* <!-- Nav Menu --> */}
              <nav
                id="nav-menu"
                className={`${
                  isHamburgerOpen ? "block" : "hidden"
                } absolute py-5 bg-white shadow-lg rounded-lg max-w-64 w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none`}>
                <ul className="block lg:flex">
                  <li className="group">
                    <MenuNavbar title="Home" link="/" />
                  </li>
                  <li className="group">
                    <MenuNavbar title="Menu" link="/menu" />
                  </li>
                  <li className="group">
                    <MenuNavbar title="About" link="/about" />
                  </li>
                  <li className="group">
                    <MenuNavbar title="Contact" link="/contact" />
                  </li>

                  {/* <!-- Cart for desktop --> */}
                  <CartNav classname="hidden lg:block" />
                  <li className="group">
                    <MenuNavbar title="Login" link="/login" />
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
