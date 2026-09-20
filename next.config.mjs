/** @type {import('next').NextConfig} */

const securityHeaders = [
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "font-src 'self' https://fonts.gstatic.com",
      "img-src 'self' data: blob:",
      "connect-src 'self'",
      "frame-src 'none'",
      "object-src 'none'",
      "base-uri 'self'",
    ].join("; "),
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=31536000; includeSubDomains; preload",
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
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
];

const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  async redirects() {
    return [
      // Enforce non-www canonical
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.help.forg.to" }],
        destination: "https://help.forg.to/:path*",
        permanent: true,
      },
      // Renamed articles (preserve indexed URLs)
      {
        source: "/content/writing-updates",
        destination: "/content/posting-on-forg",
        permanent: true,
      },
      // Products → Projects rename
      {
        source: "/products/adding-your-product",
        destination: "/projects/adding-your-project",
        permanent: true,
      },
      {
        source: "/products/launching-your-product-on-forg",
        destination: "/projects/launching-your-project-on-forg",
        permanent: true,
      },
      // Removed article (product lifecycle no longer exists)
      {
        source: "/products/product-lifecycle",
        destination: "/projects/adding-your-project",
        permanent: true,
      },
      // Any other old /products/* help URL
      {
        source: "/products/:path*",
        destination: "/projects/:path*",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
