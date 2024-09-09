import type { Metadata } from "next";
import localFont from "next/font/local";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

const poppins = Poppins({
  weight: ['400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Ecommerce",
  description: "All About Style",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-background bg-opacity-20 text-gray-700`}>
        <Header />
        <div className="min-h-screen">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
