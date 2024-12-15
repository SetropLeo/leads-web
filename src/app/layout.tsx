import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  weight: ["200", "300", "400", "500", "600", "800"],
  style: ["normal"],
  subsets: ["latin"],
  display: "optional",
});

export const metadata: Metadata = {
  title: "Alma Assessment Form",
  description: "Get An Assessment",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
