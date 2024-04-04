'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function ReturnToHome() {
	const allowedPages = ['/product'];
	const pathname = usePathname();

	if (allowedPages.includes(pathname)) return null;

	return (
		<Link href="/home" className="text-black dark:text-white">
			Voltar
		</Link>
	);
}
