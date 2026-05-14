import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
});

export const metadata: Metadata = {
  title: "PetCare Veterinary | Modern & Compassionate Pet Care",
  description:
    "Experience premium veterinary care for your furry family members. Modern facility, expert veterinarians, and a warm, compassionate environment.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`scroll-smooth ${plusJakartaSans.variable}`}
      suppressHydrationWarning
    >
      <body
        className="antialiased"
        suppressHydrationWarning
        style={{ fontFamily: "var(--font-jakarta, 'Plus Jakarta Sans', system-ui, sans-serif)" }}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
