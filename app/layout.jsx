import { Antonio } from "next/font/google";

import "./globals.css";
import Navbar from "@/components/Navbar";

const antonioSans = Antonio({
  variable: "--font-antonio-sans",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Spylt",
  description:
    "Rev up your rebel spirit and feed the adventure of life with SPYLT, where you’re one chug away from epic nostalgia and fearless fun.",
  icons: "/images/nav-logo.svg",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${antonioSans.variable} antialiased`}>
        <main>
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}
