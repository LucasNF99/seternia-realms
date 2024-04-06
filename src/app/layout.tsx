
import type { Metadata } from "next";
import { Spectral } from "next/font/google";
import "./globals.css";
import classNames from "classnames";


const spectral = Spectral({
  subsets: ["latin"],
  weight: "400",

});

export const metadata: Metadata = {
  title: "Seternia realms",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={classNames(spectral.className, "overflow-x-hidden text-white")}>{children}</body>
    </html>
  );
}
