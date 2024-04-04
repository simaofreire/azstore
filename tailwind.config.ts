import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}'
	],
	darkMode: 'class',
	theme: {
		screens: {
			md: { max: '768px' },
			sm: { max: '640px' },
			xs: { max: '320px' }
		}
	},
	plugins: []
};
export default config;
