// app/layout.tsx
import { Noto_Serif, Poppins } from "next/font/google";
import "./globals.css";

// Konfigurasi Noto Serif untuk Heading
const notoSerif = Noto_Serif({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-noto-serif",
});

// Konfigurasi Poppins untuk Teks Normal
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* Masukkan variabel font ke body agar bisa diakses Tailwind */}
      <body className={`${poppins.variable} ${notoSerif.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}