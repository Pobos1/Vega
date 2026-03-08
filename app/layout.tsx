import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Сценарии уроков о культуре России",
  description: "Подбор готовых сценариев уроков о культуре России для учителей",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className="bg-slate-50 text-slate-900 antialiased">
        {children}
      </body>
    </html>
  );
}
