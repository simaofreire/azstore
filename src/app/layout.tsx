import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { Inter } from 'next/font/google';
import './globals.css';

const Header = dynamic(() => import('./_components/header'), { loading: () => <p>Loading...</p> });

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
	title: 'AZ Store'
};

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="pt-br">
			<body className={`${inter.variable} bg-neutral-100 dark:bg-zinc-900`}>
				<Header />
				{children}
			</body>
		</html>
	);
}
