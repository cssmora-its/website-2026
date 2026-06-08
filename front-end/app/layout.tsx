// app/layout.tsx
import type { Metadata } from "next";
import { Noto_Serif, Poppins } from "next/font/google";
import "./globals.css";

const notoSerif = Noto_Serif({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-noto-serif",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://cssmoraits.com"),
  title: {
    default: "CSSMoRA ITS — Community of Santri Scholars of Ministry of Religious Affairs",
    template: "%s | CSSMoRA ITS",
  },
  description:
    "CSSMoRA ITS adalah komunitas penerima beasiswa PBSB (Program Beasiswa Santri Berprestasi) di Institut Teknologi Sepuluh Nopember. Menghimpun santri berprestasi lintas disiplin sejak 2007.",
  keywords: [
    "CSSMoRA ITS",
    "PBSB",
    "beasiswa santri",
    "Program Beasiswa Santri Berprestasi",
    "ITS",
    "Institut Teknologi Sepuluh Nopember",
    "santri berprestasi",
    "Renjana Cita",
  ],
  authors: [{ name: "CSSMoRA ITS" }],
  creator: "CSSMoRA ITS",
  publisher: "CSSMoRA ITS",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://cssmoraits.com",
    siteName: "CSSMoRA ITS",
    title: "CSSMoRA ITS — Community of Santri Scholars of Ministry of Religious Affairs",
    description:
      "CSSMoRA ITS adalah komunitas penerima beasiswa PBSB di Institut Teknologi Sepuluh Nopember. Menghimpun santri berprestasi lintas disiplin sejak 2007.",
    images: [
      {
        url: "https://cssmoraits.com/og-image.png",
        alt: "CSSMoRA ITS",
        width: 1200,
        height: 630,
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@cssmoraits",
    title: "CSSMoRA ITS — Community of Santri Scholars of Ministry of Religious Affairs",
    description:
      "CSSMoRA ITS adalah komunitas penerima beasiswa PBSB di Institut Teknologi Sepuluh Nopember.",
    images: ["https://cssmoraits.com/og-image.png"],
    creator: "@cssmoraits",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "CSSMoRA ITS",
  alternateName: "Community of Santri Scholars of Ministry of Religious Affairs ITS",
  url: "https://cssmoraits.com",
  logo: "https://cssmoraits.com/logo-color-clean.png",
  description:
    "CSSMoRA ITS adalah komunitas penerima beasiswa PBSB (Program Beasiswa Santri Berprestasi) di Institut Teknologi Sepuluh Nopember. Menghimpun santri berprestasi lintas disiplin sejak 2007.",
  foundingDate: "2007-05-19",
  parentOrganization: {
    "@type": "EducationalOrganization",
    name: "Institut Teknologi Sepuluh Nopember",
    alternateName: "ITS",
    url: "https://www.its.ac.id",
  },
  funder: {
    "@type": "GovernmentOrganization",
    name: "Kementerian Agama Republik Indonesia",
    alternateName: "Kemenag RI",
  },
  sameAs: [
    "https://www.instagram.com/cssmoraits",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className={`${poppins.variable} ${notoSerif.variable} font-sans antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        {children}
      </body>
    </html>
  );
}
