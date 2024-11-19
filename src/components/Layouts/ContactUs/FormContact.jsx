import React, { useState } from "react";
import { Send } from "lucide-react";
import Alert from "@/components/Fragments/Alert";

export default function FormContact() {
  const [alert, setAlert] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("")
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setAlert(true);

    setFirstName("");
    setLastName("");
    setEmail("");
    setSubject("");
    setMessage("");

    setTimeout(() => {
      setAlert(false);
    }, 2500);
  };

  return (
    <>
      <Alert
        isOpen={alert}
        title="Success"
        description="Pesan anda berhasil terkirim, mohon tunggu balasan dari kami."
      />
      <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              First Name
            </label>
            <input
              type="text"
              className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-shadow duration-200"
              required
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Last Name
            </label>
            <input
              type="text"
              className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-shadow duration-200"
              required
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2 after:content-['*'] after:text-pink-500 after:ml-0.5">
            Email
          </label>
          <input
            type="email"
            className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-shadow duration-200 invalid:text-pink-700 invalid:focus:ring-pink-700 invalid:focus:border-pink-700 peer"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <p className="text-xs mt-1 text-pink-700 invisible peer-invalid:visible">
            Email tidak valid!
          </p>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Subject
          </label>
          <input
            type="text"
            className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-shadow duration-200"
            required
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Message
          </label>
          <textarea
            rows={4}
            className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-shadow duration-200"
            required
            value={message} 
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="w-full bg-red-500 text-white py-3 px-6 rounded-lg hover:bg-red-600 transition-colors duration-200 flex items-center justify-center space-x-2">
          <span>Send Message</span>
          <Send className="w-5 h-5" />
        </button>
      </form>
    </>
  );
}
