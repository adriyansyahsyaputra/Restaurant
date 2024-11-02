import React, { useState, useEffect, useRef } from "react";
import MenuNavbar from "../../Elements/Menu/Menu";

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
                My Restaurant
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
              <ul className="block mr-5 lg:hidden">
                <li className="group relative">
                  <a
                    href="#cart"
                    className="text-base text-slate-800 py-2 mx-8 flex items-center group-hover:text-red-500">
                    <img
                      src="./public/img/icon/bag.png"
                      alt=""
                      className="w-6 h-6 mr-2"
                    />
                    {/* <!-- Badge untuk jumlah barang --> */}
                    <span className="absolute top-0 right-0 mt-1 mr-7 bg-red-500 text-white text-xs font-semibold rounded-full px-1.5 py-0.5">
                      3
                    </span>
                  </a>
                </li>
              </ul>

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
                  <li className="group relative hidden lg:block">
                    <a
                      href="#cart"
                      className="text-base text-slate-800 py-2 mx-8 flex items-center group-hover:text-red-500">
                      <img
                        src="./public/img/icon/bag.png"
                        alt=""
                        className="w-6 h-6 mr-2"
                      />
                      {/* <!-- Badge untuk jumlah barang --> */}
                      <span className="absolute top-0 right-0 mt-1 mr-7 bg-red-500 text-white text-xs font-semibold rounded-full px-1.5 py-0.5">
                        3
                      </span>
                    </a>
                  </li>
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
