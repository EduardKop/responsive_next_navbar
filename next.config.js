/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig

const path = require('path');
 
module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
    outputStyle: 'expanded',
    outFile: path.join(__dirname, 'styles', 'main.css'),
  },
}
