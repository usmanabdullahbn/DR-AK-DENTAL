import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import Appointment from "./components/Appointment";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <Gallery />
      <Testimonials />
      <Appointment />
      <Contact />
      <Footer />

      {/* Floating WhatsApp button */}
      <a
        href="https://wa.me/923178488790"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-10 right-6 z-40 w-14 h-14 rounded-full flex items-center justify-center text-2xl shadow-xl shadow-green-500/40 hover:scale-110 transition-transform duration-300"
        style={{ background: "linear-gradient(135deg, #25D366, #128C7E)" }}
        title="Chat on WhatsApp"
      >
        💬
      </a>
    </main>
  );
}
