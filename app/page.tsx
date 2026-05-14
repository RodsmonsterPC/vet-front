import { Hero } from "@/components/landing/Hero";
import { Services } from "@/components/landing/Services";
import { Specialists } from "@/components/landing/Specialists";
import { Testimonials } from "@/components/landing/Testimonials";
import { FAQ } from "@/components/landing/FAQ";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <Services />
      <Specialists />
      <Testimonials />
      <FAQ />
      <Footer />
    </main>
  );
}
