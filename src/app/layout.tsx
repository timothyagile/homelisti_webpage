"use client";

//import './globals.css'
//import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "@/components/header";
import Footer from "@/components/footer";
import { Container } from "react-bootstrap";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <Container>{children}</Container>
        <Footer />
      </body>
    </html>
  );
}
