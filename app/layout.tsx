import type { Metadata } from "next";
import { Crimson_Pro } from "next/font/google";
import "./globals.css";

const crimson = Crimson_Pro({ subsets: ["latin"], style: ["normal", "italic"], variable: "--font-crimson" });

export const metadata: Metadata = {
  title: "Felipe Maierowicz",
  description: "Portfolio de Felipe Maierowicz",
  icons: { icon: "/icon.ico", shortcut: "/icon.ico", apple: "/icon.ico" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={crimson.variable}>{children}</body>
    </html>
  );
}
