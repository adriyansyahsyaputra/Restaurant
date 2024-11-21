import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../contexts/cartContext";
import Button from "../Elements/Button/Button";

export default function CartNav(props) {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { classname } = props;
  const { cart } = useCart();

  function toggleCart() {
    setIsCartOpen(!isCartOpen);
  }

  return (
    <>
      <li className={`group relative ${classname}`}>
        <button
          id="cartMobile"
          onClick={toggleCart}
          className="text-base text-slate-800 py-2 mx-8 flex items-center group-hover:text-red-500">
          <img
            src="/img/icon/bag.png"
            alt="Cart Icon"
            className="w-6 h-6 mr-2"
          />
          {/* Badge untuk jumlah barang */}
          {cart.length > 0 && (
            <span className="absolute top-0 right-0 mt-1 mr-7 bg-red-500 text-white text-xs font-semibold rounded-full px-1.5 py-0.5">
              {cart.length}
            </span>
          )}
        </button>
      </li>
      {isCartOpen && <CartDropdown />}
    </>
  );
}

function CartDropdown() {
  const { cart, removeFromCart, clearCart } = useCart();

  return (
    <div className="relative">
      <div className="absolute right-0 top-8 mt-2 w-80 bg-white border border-gray-200 rounded-lg shadow-lg font-inter z-10">
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-800">
            Keranjang Belanja
          </h3>
          {/* Wrapper untuk daftar barang */}
          <div
            className={`mt-4 space-y-3 ${
              cart.length > 3 ? "overflow-y-auto max-h-60" : ""
            }`}>
            {cart.length > 0 ? (
              cart.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between">
                  <div className="flex items-center">
                    <img
                      src={`/img/${item.image}`}
                      alt={item.name}
                      className="w-14 h-14 mr-3 rounded-md"
                    />
                    <div>
                      <span className="text-gray-700">{item.name}</span>
                      <p className="text-xs text-gray-500">x{item.quantity}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:text-red-600">
                    Remove
                  </button>
                </div>
              ))
            ) : (
              <p className="text-gray-500">Keranjang kosong.</p>
            )}
          </div>
          <div className="mt-8 flex justify-between items-center">
            <Button
              classname="bg-red-500 px-3 py-1 rounded-md"
              onClick={clearCart}>
              Clear All
            </Button>
            <Link
              to={"/cart"}
              className="text-white bg-red-500 px-3 py-1 rounded-md hover:bg-red-600">
              Checkout
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
