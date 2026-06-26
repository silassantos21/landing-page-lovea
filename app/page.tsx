import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Products from "@/components/Products";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <main className="theme-bg min-h-screen">
      <Header />
      <Hero />
      <About />
      <Products />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
