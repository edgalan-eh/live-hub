import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Live Hub – Estúdio e Performance",
  description: "Vendemos por você com LIVES diretamente de nossos estúdios. Performance total sem preocupação técnica.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-[#030001]">{children}</body>
    </html>
  );
}
