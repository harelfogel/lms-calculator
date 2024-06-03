import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../app/styles/globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "LMS Permission Calculator",
  description: "Calculate permissions for LMS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} bg-black text-white`}>
        {children}
      </body>
    </html>
  );
}
