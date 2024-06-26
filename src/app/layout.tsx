import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import 'react-loading-skeleton/dist/skeleton.css'
import Providers from "@/utils/provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bandage E-Commerce",
  description: "A simple e-commerce app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
