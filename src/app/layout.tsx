import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";
import { ProductsProvider } from "./contexts/productContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Trip Items",
  description: "Write down items you need for your trip.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col`}>
        <Header />
        <ProductsProvider>
          <main className="flex-1 w-full md:flex md:justify-center">
            {children}
          </main>
          <Footer />
        </ProductsProvider>
      </body>
    </html>
  );
}
