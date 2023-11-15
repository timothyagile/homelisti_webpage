"use client";

//import './globals.css'
//import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "@/components/header";
import Footer from "@/components/footer";

import Container from "@mui/material/Container";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <div style={{ minHeight: "100vh" }}>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
