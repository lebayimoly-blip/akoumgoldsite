import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Ancienne adresse Render → nouvelle adresse Netlify (les anciens liens continuent de marcher)
      {
        source: "/:path*",
        has: [{ type: "host", value: "akoumgoldweb.onrender.com" }],
        destination: "https://ong-akoumgold.olouomolab.com/:path*",
        permanent: true,
      },
      // L'ancienne page du projet Makokou renvoie vers sa nouvelle page dédiée
      { source: "/actions/makokou", destination: "/makokou", permanent: true },
    ];
  },
};

export default nextConfig;
