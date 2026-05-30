import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Norte One | Tecnologia premium para vender mais",
  description:
    "Sites profissionais, cartões NFC, chatbots para WhatsApp e aplicativos sob demanda para empresas que querem vender mais.",
};

export const viewport: Viewport = {
  themeColor: "#F6F5F2",
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
