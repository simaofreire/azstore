/** @type {import('next').NextConfig} */
const nextConfig = {
	async redirects() {
		return [
			{
				source: '/',
				destination: '/home',
				permanent: true
			}
		];
	},
	images: { remotePatterns: [{ hostname: 'fakestoreapi.com' }] }
};

export default nextConfig;
