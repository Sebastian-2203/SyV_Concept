import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Quoter from "./components/Quoter";
import Scheduling from "./components/Scheduling";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <Quoter />
        <Scheduling />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
