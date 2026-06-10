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
        destination: 'https://docs.google.com/document/d/1wG5yI-zTIZrglICEGkV3b50aVoRQ2-xCESzlG_UjQzI/edit?usp=sharing', 
        permanent: false, 
      },
      {
        source: '/DataBayarKasNas',
        destination: 'https://docs.google.com/spreadsheets/d/1aTMT53GjrU-jRUfkCiXvycOOKucqqUUJLCCCw_i_LE4/edit?usp=sharing',
        permanent: false,
      },
      {
        source: '/Lombapedia',
        destination: 'https://docs.google.com/spreadsheets/d/1K4lkvW5RoQGKIqZmwO5xkGVQd5p1KzaiSQxGcamfrNw/edit?usp=sharing',
        permanent: false,
      }
    ];
  },
};

export default nextConfig;