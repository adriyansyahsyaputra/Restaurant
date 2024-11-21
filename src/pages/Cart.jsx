import CartResult from "../components/Layouts/Cart/CartResult";
import Footer from "@/components/template/footer/Footer";
import Navbar from "@/components/template/Navbar/Navbar";

export default function Cart() {
  return (
    <>
      <Navbar />
      <main className="container my-20 px-6 overflow-x-hidden md:px-14">
        <CartResult />
      </main>
      <Footer />
    </>
  );
}
