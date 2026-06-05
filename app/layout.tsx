import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Norte One | Links oficiais",
  description:
    "Links oficiais da Norte One para site principal, chatbots, automações, sites premium, aplicativos, CRM e páginas profissionais para bio do Instagram.",
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
