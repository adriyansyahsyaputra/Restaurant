import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function CartNav(props) {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { classname } = props;

  function toggleCart() {
    setIsCartOpen(!isCartOpen);
  }

  return (
    <>
      {/* Cart untuk Mobile */}
      <li className={`group relative ${classname}`}>
        <button
          id="cartMobile"
          onClick={toggleCart}
          className="text-base text-slate-800 py-2 mx-8 flex items-center group-hover:text-red-500">
          <img
            src="./public/img/icon/bag.png"
            alt="Cart Icon"
            className="w-6 h-6 mr-2"
          />
          {/* Badge untuk jumlah barang */}
          <span className="absolute top-0 right-0 mt-1 mr-7 bg-red-500 text-white text-xs font-semibold rounded-full px-1.5 py-0.5">
            3
          </span>
        </button>
      </li>
      {isCartOpen && <CartDropdown />}
    </>
  );
}

function CartDropdown() {
  return (
    <div className="relative">
      <div className="absolute right-0 top-8 mt-2 w-80 bg-white border border-gray-200 rounded-lg shadow-lg font-inter z-10">
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-800">
            Keranjang Belanja
          </h3>
          <ul className="mt-4 space-y-3">
            <li className="flex items-center justify-between">
              <div className="flex items-center">
                <img
                  src="./public/img/nasgor.png"
                  alt="Item Image"
                  className="w-full h-14 mr-3 rounded-md"
                />
                <span className="text-gray-700">Nasi Goreng</span>
              </div>
              <span className="text-gray-600">Rp 50.000</span>
            </li>
          </ul>
          <div className="mt-8 flex justify-between items-center">
            <span className="text-lg font-semibold text-gray-800">
              Total: Rp 125.000
            </span>
            <Link
              to={'/cart'}
              className="text-white bg-red-500 px-3 py-1 rounded-md hover:bg-red-600">
              Checkout
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
