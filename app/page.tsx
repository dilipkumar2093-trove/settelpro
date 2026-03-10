import Hero from "@/components/Hero";
import FeatureGrid from "@/components/FeatureGrid";
import Trust from "@/components/Trust";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <FeatureGrid />
      <Trust />
      <CTA />
      <Footer />
    </main>
  );
}