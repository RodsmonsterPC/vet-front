import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pet Care Blog | PetCare Veterinary",
  description: "Tips, advice, and expert guidance to keep your pets healthy and happy.",
};

export default function BlogPage() {
  return (
    <main style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Navbar />
      <section style={{
        flex: 1,
        paddingTop: "9rem",
        paddingBottom: "6rem",
        backgroundColor: "var(--color-surface)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        gap: "1.5rem",
        padding: "9rem 2rem 6rem",
      }}>
        <div style={{
          width: "5rem",
          height: "5rem",
          borderRadius: "50%",
          backgroundColor: "var(--color-primary-container)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "2.5rem",
        }}>
          📰
        </div>
        <h1 style={{
          fontSize: "clamp(2rem, 4vw, 3rem)",
          fontWeight: 800,
          letterSpacing: "-0.02em",
          color: "var(--color-on-surface)",
        }}>
          Pet Care Blog
        </h1>
        <p style={{
          fontSize: "1.0625rem",
          lineHeight: 1.7,
          color: "var(--color-on-surface-variant)",
          maxWidth: "500px",
        }}>
          Expert tips, health guides, and heartwarming stories about your furry friends.
          Articles coming soon — stay tuned!
        </p>
        <a
          href="/"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            background: "linear-gradient(135deg, var(--color-primary) 0%, #0088cc 100%)",
            color: "white",
            border: "none",
            cursor: "pointer",
            fontSize: "1rem",
            fontWeight: 700,
            padding: "0.875rem 1.75rem",
            borderRadius: "9999px",
            textDecoration: "none",
            boxShadow: "0 6px 20px rgba(0,96,148,0.3)",
            marginTop: "0.5rem",
          }}
        >
          ← Back to Home
        </a>
      </section>
      <Footer />
    </main>
  );
}
