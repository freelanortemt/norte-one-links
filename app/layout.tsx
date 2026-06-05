import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Norte One | Tecnologia, IA e presença digital premium",
  description:
    "Sites premium, automações com IA, chatbots, sistemas e posicionamento digital para empresas que querem ser percebidas com mais valor.",
};

export const viewport: Viewport = {
  themeColor: "#0B1F33",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
