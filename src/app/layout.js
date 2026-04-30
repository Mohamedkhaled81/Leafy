import { Geist, Geist_Mono } from "next/font/google";
import NavBar from "@/components/navBar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Leafy",
  description: "Plants Community",
    icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="bg-mauve-950">
      <NavBar></NavBar>
        {children}
      </body>
    </html>
  );
}
