import React from "react";
import Navbar from "@/components/template/navbar/Navbar";
import Footer from "@/components/template/footer/Footer";
import DetailProducts from "@/components/Layouts/Details/DetailProducts";

export default function Details() {
    return (
      <>
        <Navbar />
        <main className="container mt-28 px-4 md:px-12">
            <DetailProducts />
        </main>
        <Footer />
      </>
    );
}