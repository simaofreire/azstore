'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';

export default function ClearFilterAndSearch() {
	const searchParams = useSearchParams();
	const pathname = usePathname();
	const { replace } = useRouter();
	const allowedPages = ['/', '/home'];

	const handleClear = () => {
		const params = new URLSearchParams(searchParams);

		params.delete('search');
		params.delete('filter');

		replace(`${pathname}?${params.toString()}`);
	};

	if (!allowedPages.includes(pathname)) return null;

	return (
		<button
			className="rounded-lg border-2 border-zinc-500 bg-zinc-700 p-2 mt-4 text-lg text-white dark:placeholder:text-black dark:bg-white dark:text-black"
			onClick={handleClear}
			aria-label="Limpar campos de filtro e pesquisa"
		>
			Limpar campos
		</button>
	);
}
