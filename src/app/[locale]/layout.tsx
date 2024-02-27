import type { Metadata } from "next";
import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}
