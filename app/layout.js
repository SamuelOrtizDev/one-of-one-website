import { Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/common/Navbar/Navbar";
import Footer from "@/components/common/Footer/Footer";
import { PopUp } from "@/components/common/PopUp/PopUp";
import CrispChat from "@/components/common/CrispChat";

const outfit = Outfit({
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${outfit.className} antialiased text-balance text-carbon`}
      >
        {/* <PopUp/> */}
        <Navbar />
        <main>
          {children}
        </main>
        <Footer/>
        <CrispChat/>
      </body>
    </html>
  );
}
