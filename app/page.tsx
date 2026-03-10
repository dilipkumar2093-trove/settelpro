import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Trust } from "@/components/Trust";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="bg-zinc-950">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Trust />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

