import React from "react";
import Button from "../../Elements/Button/Button";
import { useCart } from "../../../contexts/cartContext";
import { Link } from "react-router-dom";

export default function CartResult() {
  const { cart, removeFromCart, updateQuantity } = useCart();

  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div>
      <Header />
      <div className="container mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {cart.map((item) => (
            <div
              key={item.id}
              className="border border-gray-200 rounded-lg shadow-sm p-4 flex flex-col items-start bg-white">
              <div className="flex items">
                {/* Gambar Produk */}
                <img
                  src={`/img/${item.image}`}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded-md mb-4"
                />
                {/* Detail Produk */}
                <div className="flex-1 w-full ml-4">
                  <h2 className="text-sm font-semibold text-gray-800">
                    {item.name}
                  </h2>
                  <p className="text-xs text-gray-500">
                    Harga:{" "}
                    {item.price.toLocaleString("id-ID", {
                      style: "currency",
                      currency: "IDR",
                    })}
                  </p>
                  <p className="text-xs text-gray-500">
                    Jumlah: {item.quantity}
                  </p>
                  {/* Button plus & minus */}
                  <div className="flex items-center right-0 mt-2 space-x-2">
                    {/* Tombol Plus dan Minus */}
                    <button
                      className="px-2 bg-gray-300 text-gray-700 hover:bg-gray-400"
                      onClick={() =>
                        updateQuantity(item.id, item.quantity - 1)
                      }>
                      -
                    </button>
                    <span className="px-4 bg-gray-100 text-gray-700 border border-gray-300">
                      {item.quantity}
                    </span>
                    <button
                      className="px-2 bg-gray-300 text-gray-700 hover:bg-gray-400"
                      onClick={() =>
                        updateQuantity(item.id, item.quantity + 1)
                      }>
                      +
                    </button>
                  </div>
                  <p className="text-sm font-semibold text-red-500 mt-2">
                    Total:{" "}
                    {(item.price * item.quantity).toLocaleString("id-ID", {
                      style: "currency",
                      currency: "IDR",
                    })}
                  </p>
                </div>
              </div>

              {/* Tombol Aksi */}
              <div className="flex items-center mt-2 w-full space-x-2">
                <Button
                  classname="flex-1 bg-red-500 text-white text-sm px-3 py-1 rounded-lg hover:bg-red-600"
                  onClick={() => removeFromCart(item.id)}>
                  Hapus
                </Button>
              </div>
            </div>
          ))}
        </div>
        {/* Total Keseluruhan */}
        <div className="mt-6 border-t pt-4">
          <div className="flex justify-between items-center">
            <p className="text-gray-700 font-semibold text-lg">
              Total Keseluruhan
            </p>
            <p className="text-red-500 font-semibold text-xl">
              {totalPrice.toLocaleString("id-ID", {
                style: "currency",
                currency: "IDR",
              })}
            </p>
          </div>
          {/* Tombol Checkout */}
          <Link to="/invoice">
            <Button classname="mt-4 bg-orange-500 text-white text-lg px-6 py-2 rounded-lg hover:bg-orange-600 w-full md:w-auto">
              Checkout
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="container flex justify-between items-center font-inter mt-28">
      <div>
        <h1 className="text-xl md:text-2xl font-semibold">Keranjang Belanja</h1>
      </div>
      <div>
        <input
          type="text"
          placeholder="Search..."
          className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition duration-300"
        />
      </div>
    </div>
  );
}
