import React from "react";
import Button from "../../Elements/Button/Button";

export default function CartResult() {
  return (
    <>
      <Header />
      <div className="mt-10">
        <table className="w-full border border-gray-200 font-inter text-sm text-left text-gray-700">
          <thead className="bg-gray-200 text-gray-800 font-semibold">
            <tr>
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
            <tr className="hover:bg-gray-100">
              <td className="px-4 py-3 border-b border-gray-300">
                Nasi Goreng
              </td>
              <td className="px-4 py-3 border-b border-gray-300">Rp 50.000</td>
              <td className="px-4 py-3 border-b border-gray-300">1</td>
              <td className="px-4 py-3 border-b border-gray-300">Rp 50.000</td>
              <td className="px-4 py-3 border-b border-gray-300">
                <button className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600">
                  Hapus
                </button>
              </td>
            </tr>
            <tr className="hover:bg-gray-100">
              <td className="px-4 py-3 border-b border-gray-300">Mie Goreng</td>
              <td className="px-4 py-3 border-b border-gray-300">Rp 40.000</td>
              <td className="px-4 py-3 border-b border-gray-300">2</td>
              <td className="px-4 py-3 border-b border-gray-300">Rp 80.000</td>
              <td className="px-4 py-3 border-b border-gray-300">
                <button className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600">
                  Hapus
                </button>
              </td>
            </tr>
          </tbody>
          <tfoot className="bg-gray-200 text-gray-800 font-semibold">
            <tr>
              <td
                colSpan="3"
                className="px-4 py-3 text-right border-t border-gray-300">
                Total Keseluruhan
              </td>
              <td className="px-4 py-3 border-t border-gray-300">Rp 130.000</td>
              <td className="px-4 py-3 border-t border-gray-300">
                <Button classname="bg-green-500 px-3 py-2 hover:bg-green-600">
                  Checkout
                </Button>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </>
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
