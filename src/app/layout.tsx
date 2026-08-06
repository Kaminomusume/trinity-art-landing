import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Trinity Art Studio | Servicios B2B & Arte",
  description: "Estudio de arte, enmarcado artesanal y fotografía de producto.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark scroll-smooth">
      <body className="bg-stone-950 text-stone-100 antialiased font-sans min-h-screen">
        {children}
      </body>
    </html>
  );
}
