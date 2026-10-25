import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // L'ancienne page du projet Makokou renvoie vers sa nouvelle page dédiée
      { source: "/actions/makokou", destination: "/makokou", permanent: true },
    ];
  },
};

export default nextConfig;
