import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { InteractiveQuoteForm } from "@/components/InteractiveQuoteForm";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-stone-950 text-stone-100">
      <Navbar />
      <Hero />
      <InteractiveQuoteForm />
      <Footer />
    </main>
  );
}
