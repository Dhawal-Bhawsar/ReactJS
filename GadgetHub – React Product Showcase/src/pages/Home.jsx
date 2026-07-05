import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Products from "../components/Products";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="min-h-screen bg-gray-100">

      <Navbar />

      <Hero />

      <Products />

      <Footer />

    </div>
  );
}

export default Home;