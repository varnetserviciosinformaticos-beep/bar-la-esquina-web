import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import FeaturedDishes from "@/components/FeaturedDishes";
import Menu from "@/components/Menu";
import Gallery from "@/components/Gallery";
import Reservations from "@/components/Reservations";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <FeaturedDishes />
      <Menu />
      <Gallery />
      <Reservations />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
