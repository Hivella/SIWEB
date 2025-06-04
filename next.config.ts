/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'image.uniqlo.com',
      'www.uniqlo.com',
      'upload.wikimedia.org',
      'images.unsplash.com',
      'encrypted-tbn0.gstatic.com' // tambahin ini
    ],
  },
};

module.exports = nextConfig;
