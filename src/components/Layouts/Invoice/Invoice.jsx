import React, { useState } from "react";
import { useCart } from "@/contexts/cartContext";
import { X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Alert from "@/components/Fragments/Alert";

const RestaurantInvoice = () => {
  const [selectedPayment, setSelectedPayment] = useState("");
  const { cart } = useCart()
  const [alert, setAlert] = useState(false);
  const navigate = useNavigate()

  function handleButtonPayment() {
    setAlert(true);

    setTimeout(() => {
      setAlert(false);
      navigate("/");
    }, 2500);
  }

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8 mt-24">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg relative">

      {/* Alert */}
      <Alert
        isOpen={alert}
        title="Success"
        description="Pembayaran berhasil, silahkan tunggu pesanan anda."
      />

        {/* Invoice Header */}
        <InvoiceHeader />

        {/* Invoice Body */}
        <InvoiceBody
          selectedPayment={selectedPayment}
          setSelectedPayment={setSelectedPayment}
          cart={cart}
        />

        {/* Summary */}
        <InvoiceFooter
          selectedPayment={selectedPayment}
          cart={cart}
          handleButtonPayment={handleButtonPayment}
        />
      </div>
    </div>
  );
};

export default RestaurantInvoice;

function InvoiceHeader() {
  const navigate = useNavigate()

  const getDataUser = localStorage.getItem("users");
  let nameCustomer = "Guest";
  if (nameCustomer) {
    try {
      const user = JSON.parse(getDataUser);
      if (Array.isArray(user) && user.length > 0) {
      nameCustomer = user[0].username;
    }
    } catch (error) {
      console.error("Error parsing users:", error);
    }
  }

  const restaurantData = {
    name: "Sajian Du Monde",
    address: "Jl. Malioboro, Gedong Tengen,\nDaerah Istimewa Yogyakarta\nTelp: (021) 555-1234",
    orderId: "SDM" + Math.random().toString().slice(2, 8),
  };

  const customerData = {
    name: nameCustomer,
    orderDate: new Date().toLocaleDateString("id-ID"),
  };

  function handleClose(e) {
    e.preventDefault();
    navigate("/cart")
  }

  return (
    <>
      {/* Header */}
      {/* Tombol Close */}
      <button
        onClick={handleClose}
        className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 transition">
        <X size={24} />
      </button>

      <div className="px-6 py-8 border-b border-gray-200">
        <h1 className="text-3xl font-bold text-center text-gray-800">
          {restaurantData.name}
        </h1>
      </div>

      {/* Customer & Restaurant Info */}
      <div className="px-6 py-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h2 className="text-sm font-semibold text-gray-600">
            Informasi Pelanggan:
          </h2>
          <p className="mt-1 text-gray-800">{customerData.name}</p>
          <p className="text-sm text-gray-600 mt-1">
            ID Pemesanan: {restaurantData.orderId}
          </p>
          <p className="text-sm text-gray-600">
            Tanggal: {customerData.orderDate}
          </p>
        </div>
        <div className="md:text-right">
          <h2 className="text-sm font-semibold text-gray-600">
            Alamat Restoran:
          </h2>
          <p className="mt-1 text-gray-800 whitespace-pre-line">
            {restaurantData.address}
          </p>
        </div>
      </div>
    </>
  );
}

function InvoiceBody({ selectedPayment, setSelectedPayment, cart }) {
  const paymentMethods = [
    { id: "mandiri", name: "Bank Mandiri", rekening: "(118475223)" },
    { id: "bri", name: "Bank BRI", rekening: "(243589967)" },
    { id: "bca", name: "Bank BCA", rekening: "(136588902)" },
    { id: "gopay", name: "GoPay", rekening: "(085178924688)" },
    { id: "qris", name: "QRIS" },
  ];

  return (
    <>
      {/* Order Items */}
      <div className="px-3 md:px-6 py-4 overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-2">Produk</th>
                <th className="text-right py-2 pr-2">Harga</th>
                <th className="text-right py-2">Jumlah</th>
                <th className="text-right py-2">Total</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item, index) => (
                <tr key={index} className="border-b border-gray-100">
                  <td className="py-3">{item.name}</td>
                  <td className="text-right">
                    {item.price.toLocaleString("id-ID", {
                      style: "currency",
                      currency: "IDR",
                    })}
                  </td>
                  <td className="text-right">{item.quantity}</td>
                  <td className="text-right">
                    {(item.price * item.quantity).toLocaleString("id-ID", {
                      style: "currency",
                      currency: "IDR",
                    })}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
      </div>

      {/* Payment Method */}
      <div className="px-6 py-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Metode Pembayaran
        </label>
        <select
          className="w-full md:w-64 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          value={selectedPayment}
          onChange={(e) => setSelectedPayment(e.target.value)}>
          <option value="">Pilih metode pembayaran</option>
          {paymentMethods.map((method) => (
            <option key={method.id} value={method.id}>
              {method.name} {method.rekening}
            </option>
          ))}
        </select>
      </div>
    </>
  );
}

function InvoiceFooter({ selectedPayment, cart, handleButtonPayment }) {
  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const tax = subtotal * 0.05;
  const total = subtotal + tax;

  return (
    <>
      <div className="px-6 py-4 bg-gray-50 rounded-b-lg">
        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="text-gray-600">Subtotal</span>
            <span className="text-gray-800">
              {subtotal.toLocaleString("id-ID", {
                style: "currency",
                currency: "IDR",
              })}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Pajak (5%)</span>
            <span className="text-gray-800">{tax.toLocaleString("id-ID", {
              style: "currency",
              currency: "IDR",
            })}</span>
          </div>
          <div className="flex justify-between pt-2 border-t border-gray-200">
            <span className="font-semibold">Total Pembayaran</span>
            <span className="font-semibold text-lg">
              {total.toLocaleString("id-ID", {
                style: "currency",
                currency: "IDR",
              })}
            </span>
          </div>
        </div>
        
        <button
          className="mt-6 w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors disabled:bg-gray-400"
          disabled={!selectedPayment}
          onClick={handleButtonPayment}>
          Bayar Sekarang
        </button>
      </div>
    </>
  );
}
