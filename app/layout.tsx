import type { Metadata } from "next";
import localFont from "next/font/local";
import Sidebar from "@/src/features/sidebar/Sidebar";
import Header from "@/src/features/header/Header";

import "./globals.css";

const satoshi = localFont({
  src: [
    {
      path: "./fonts/satoshi/Satoshi-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/satoshi/Satoshi-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-satoshi",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full min-h-full">
      <body className={`${satoshi.variable} font-sans min-h-full h-full flex`}>
        <Sidebar />
        <div className="flex flex-col w-full">
          <Header />
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}