  import React from "react";
  import Button from "../../Elements/Button/Button";
  import { useCart } from "../../../contexts/cartContext"

  export default function CartResult() {
  const { cart, removeFromCart } = useCart();

  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );


  return (
    <div>
      <Header />
      <div className="mt-10">
        <table className="w-full border border-gray-200 font-inter text-sm text-left text-gray-700">
          <thead className="bg-gray-200 text-gray-800 font-semibold">
            <tr>
              <th className="px-4 py-3 border-b border-gray-300">No</th>
              <th className="px-4 py-3 border-b border-gray-300">Product</th>
              <th className="px-4 py-3 border-b border-gray-300">Harga</th>
              <th className="px-4 py-3 border-b border-gray-300">Jumlah</th>
              <th className="px-4 py-3 border-b border-gray-300">
                Total Harga
              </th>
              <th className="px-4 py-3 border-b border-gray-300">Action</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, index) => (
              <tr key={item.id} className="hover:bg-gray-100">
                <td className="px-4 py-3 border-b border-gray-300">
                  {index + 1}
                </td>
                <td className="px-4 py-3 border-b border-gray-300">
                  {item.name}
                </td>
                <td className="px-4 py-3 border-b border-gray-300">
                  {item.price.toLocaleString("id-ID", {
                    style: "currency",
                    currency: "IDR",
                  })}
                </td>
                <td className="px-4 py-3 border-b border-gray-300">
                  {item.quantity}
                </td>
                <td className="px-4 py-3 border-b border-gray-300">
                  {(item.price * item.quantity).toLocaleString("id-ID", {
                    style: "currency",
                    currency: "IDR",
                  })}
                </td>
                <td className="px-4 py-3 border-b border-gray-300">
                  <Button
                    classname="bg-red-500 px-3 py-1 hover:bg-red-600"
                    onClick={() => removeFromCart(item.id)}>
                    Hapus
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot className="bg-gray-200 text-gray-800 font-semibold">
            <tr>
              <td
                colSpan="3"
                className="px-4 py-3 text-right border-t border-gray-300">
                Total Keseluruhan
              </td>
              <td className="px-4 py-3 border-t border-gray-300">
                {totalPrice.toLocaleString("id-ID", {
                  style: "currency",
                  currency: "IDR",
                })}
              </td>
              <td className="px-4 py-3 border-t border-gray-300">
                <Button classname="bg-green-500 px-3 py-1 hover:bg-green-600">
                  Checkout
                </Button>
              </td>
            </tr>
          </tfoot>
        </table>
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
