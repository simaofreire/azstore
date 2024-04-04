'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';

export default function SearchInput() {
	const searchParams = useSearchParams();
	const pathname = usePathname();
	const { replace } = useRouter();
	const allowedPages = ['/', '/home'];

	const handleSearch = (search: string) => {
		const params = new URLSearchParams(searchParams);

		if (search) {
			params.set('search', search);
		} else {
			params.delete('search');
		}

		replace(`${pathname}?${params.toString()}`);
	};

	if (!allowedPages.includes(pathname)) return null;

	return (
		<input
			type="text"
			value={searchParams.get('search')?.toString() || ''}
			onChange={(e) => handleSearch(e.target.value)}
			placeholder="Digite o produto que deseja buscar"
			className="w-full max-w-[600px] rounded-lg border-2 border-zinc-500 bg-zinc-700 p-2 text-lg text-white dark:placeholder:text-black dark:bg-white dark:text-black"
		/>
	);
}
