import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ["100", "300", "400", "500", "700", "900"],
  display: "fallback",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CINE LIST",
  description:
    "Interface de usuário utilizando React.js para consumir e exibir informações sobre filmes utilizando a API do TMDB (The Movie Database)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
