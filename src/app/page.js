import Navbar from "./components/Navbar";
import PageLoader from "./components/PageLoader";
import Hero from "./components/Hero";
import WhyUs from "./components/WhyUs";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Quoter from "./components/Quoter";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <PageLoader />
      <Navbar />
      <main>
        <Hero />
        <WhyUs />
        <Services />
        <Portfolio />
        <Quoter />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}

