import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MobileAppShell from "@/components/MobileAppShell";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Banca 4.0",
  description: "Mobile prototype",
  icons: {
    icon: '/Assets/Logo AMFS.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <MobileAppShell>
          {children}
        </MobileAppShell>
      </body>
    </html>
  );
}
