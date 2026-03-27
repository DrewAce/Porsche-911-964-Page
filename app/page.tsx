import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Specs from "./components/Specs";
import Gallery from "./components/Gallery";
import Legacy from "./components/Legacy";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Specs />
      <Gallery />
      <Legacy />
      <Footer />
    </main>
  );
}
