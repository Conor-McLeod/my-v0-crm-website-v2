// pages/_app.tsx
import type { AppProps } from "next/app";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import Footer from "@/components/Footer"; // Import the Footer component

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={inter.className}>
      <Component {...pageProps} />
      <Footer /> {/* Add the Footer component here */}
    </main>
  );
}
