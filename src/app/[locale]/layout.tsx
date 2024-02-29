import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/molecules/Navbar";
import { CTA } from "@/components/organisms/CTA";
import { Footer } from "@/components/organisms/Footer";

export const metadata: Metadata = {
  title: "AlteroLabs",
};

export default function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  return (
    <html lang={locale}>
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/apg6ucw.css" />
      </head>
      <body>
        <main className="h-auto w-full">
          <Navbar />
          {children}
          <CTA />
          <Footer />
        </main>
      </body>
    </html>
  );
}
