import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tu Comunidad | Transformando Vidas",
  description:
    "Una comunidad dedicada a la presencia de Dios, mañana, tarde y noche. Únete a nosotros en adoración e intercesión.",
  keywords: [
    "iglesia",
    "comunidad",
    "adoración",
    "oración",
    "fe",
    "espiritualidad",
  ],
  authors: [{ name: "Tu Organización" }],
  openGraph: {
    title: "Tu Comunidad | Transformando Vidas",
    description:
      "Una comunidad dedicada a la presencia de Dios, mañana, tarde y noche.",
    type: "website",
    locale: "es_ES",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body
        className={`${playfair.variable} ${inter.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
