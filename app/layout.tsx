import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import Sidebar from "@/components/sidebar/Sidebar";
import MobileNav from "@/components/sidebar/MobileNav";
import Footer from "@/components/footer/Footer";
import IntroLoader from "@/components/intro/IntroLoader";
import { ShutdownProvider } from "@/context/ShutdownContext";
import ShutdownScreen from "@/components/shutdown/ShutdownScreen";
import JsonLd from "@/components/seo/JsonLd";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://diparno-portfolio.vercel.app"),
  title: "Diparno Chatterjee | Full Stack Developer",
  description:
    "Diparno Chatterjee - Full Stack Developer building digital experiences with code. React, Next.js, Node.js portfolio.",
  keywords: [
    "Diparno Chatterjee",
    "Full Stack Developer",
    "React Developer",
    "Next.js Portfolio",
  ],
  verification: {
    google: "DaNxCGBpsR2V3JUGlfzUNmMHfWU7Ly0F758Neey9XQ8",
  },
  
  alternates: {
    canonical: "https://diparno-portfolio.vercel.app",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrains.variable}`}>
      <body className="bg-bg font-sans antialiased overflow-x-hidden">
      <JsonLd />

  <ShutdownProvider>
    <IntroLoader />
    <ShutdownScreen />

    <Sidebar />
    <MobileNav />

    <main className="mx-auto max-w-content lg:pl-[220px]">
      <div className="border border-border/60 lg:m-4 lg:rounded-2xl lg:border">
        {children}
        <Footer />
      </div>
    </main>
  </ShutdownProvider>
</body>
    </html>
  );
}
