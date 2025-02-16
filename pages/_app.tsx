// pages/_app.tsx
import type { AppProps } from "next/app";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import Footer from "@/components/Footer";
import NavigationMenuComponent from "@/components/NavigationMenuComponent"; // Import the new component

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={inter.className}>
      <NavigationMenuComponent /> {/* Add the Navigation Menu here */}
      <Component {...pageProps} />
      <Footer />
    </main>
  );
}
