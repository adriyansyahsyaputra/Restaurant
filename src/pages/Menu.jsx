import Search from "../components/Layouts/Menu/Search";
import VariousDrinks from "../components/Layouts/Menu/VariousDrinks";
import VariousFoods from "../components/Layouts/Menu/VariousFoods";
import Footer from "../components/template/footer/Footer";
import Navbar from "../components/template/Navbar/Navbar";

export default function Menu() {
  return (
    <>
      <Navbar />
      <main className="container mt-16 px-6 md:px-12">
        <Search />
        <h1 className="text-xl font-inter font-semibold mt-6 md:mt-8">
          Various Foods
        </h1>
        <VariousFoods />
        <h1 className="text-xl font-inter font-semibold mt-14 md:mt-14 md:text-2xl">
          Various Drinks
        </h1>
        <VariousDrinks />
      </main>
      <Footer />
    </>
  );
}
