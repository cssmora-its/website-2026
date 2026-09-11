import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compress: true,
  poweredByHeader: false,
  generateEtags: true,
  httpAgentOptions: {
    keepAlive: true,
  },
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
      {
        protocol: 'https',
        hostname: 'drive.google.com',
      },
    ],
  },
  headers: async () => [
    {
      source: "/:path*",
      headers: [
        {
          key: "X-DNS-Prefetch-Control",
          value: "on",
        },
        {
          key: "Strict-Transport-Security",
          value: "max-age=31536000; includeSubDomains",
        },
        {
          key: "X-Frame-Options",
          value: "SAMEORIGIN",
        },
        {
          key: "X-Content-Type-Options",
          value: "nosniff",
        },
        {
          key: "X-XSS-Protection",
          value: "1; mode=block",
        },
        {
          key: "Referrer-Policy",
          value: "strict-origin-when-cross-origin",
        },
      ],
    },
  ],
  async redirects() {
    return [
      {
        source: '/FiTrans', 
        destination: 'https://bit.ly/FinancialTranparencyCSSMoRAITS', 
        permanent: false, 
      },
      {
        source: '/BayarKasNas',
        destination: 'https://forms.gle/SzsAw83vmpA4yiMA7',
        permanent: false,
      },
      {
        source: '/DataBayarKasNas',
        destination: 'https://docs.google.com/spreadsheets/d/1aTMT53GjrU-jRUfkCiXvycOOKucqqUUJLCCCw_i_LE4/edit?usp=sharing',
        permanent: false,
      },
      {
          source: '/BayarKasPT',
          destination: 'https://forms.gle/JFLCqU6gHRePnbgu7',
          permanent: false,
      },
      {
        source: '/DataBayarKasPT',
        destination: 'https://its.id/m/DataPembayaranPT',
        permanent: false,
      },
      {
        source: '/Lombapedia',
        destination: 'https://docs.google.com/spreadsheets/d/1K4lkvW5RoQGKIqZmwO5xkGVQd5p1KzaiSQxGcamfrNw/edit?usp=sharing',
        permanent: false,
      },
      {
        source: '/CSSChampion',
        destination: 'https://forms.gle/hEhK2aQh57RL3pbk6',
        permanent: false,
      },
      {
        source: '/VideoLagu',
        destination: 'https://drive.google.com/drive/folders/1wYMo9_hvLf5VgE09PKNULSDZamlK_amg?usp=sharing',
        permanent: false,
      },
      {
        source: '/DataPrestasiWeb',
        destination: 'https://docs.google.com/spreadsheets/d/13m70Hzjcg3J6_Z0t61RwgmHEizXbEttHTmU3Sq1Efgo/edit?usp=sharing',
        permanent: false,
      },
      {
        source: '/AboutHOME',
        destination: 'http://its.id/m/AboutHOME',
        permanent: false,
      },
      {
        source: '/SumberHukum',
        destination: 'https://drive.google.com/drive/folders/1Zf54CR9QFQcTtaPEqaG4u8mQoonBJO1P?usp=drive_link',
        permanent: false,
      }
    ];
  },
};

export default nextConfig;