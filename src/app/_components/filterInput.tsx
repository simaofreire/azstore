'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';

export default function FilterInput() {
	const searchParams = useSearchParams();
	const pathname = usePathname();
	const { replace } = useRouter();
	const allowedPages = ['/', '/home'];

	const handleFilter = (filterParam: string) => {
		const params = new URLSearchParams(searchParams);

		if (filterParam) {
			params.set('filter', filterParam);
		} else {
			params.delete('filter');
		}

		replace(`${pathname}?${params.toString()}`);
	};

	if (!allowedPages.includes(pathname)) return null;

	return (
		<select
			className="w-full max-w-[600px] flex justify-between rounded-lg p-2 text-lg bg-zinc-700 border-2 border-zinc-500 text-white  dark:text-black mt-3 dark:bg-white"
			value={searchParams.get('filter')?.toString() || ''}
			onChange={(e) => handleFilter(e.target.value)}
			aria-label="Filtrar por"
		>
			<option value="" className="bg-zinc-700 text-white dark:bg-white dark:text-black rounded-md">
				Filtrar por
			</option>
			<option value="startToEndtitle" className="bg-zinc-700 text-white dark:bg-white dark:text-black rounded-md">
				Nome (A a Z)
			</option>
			<option value="endToStartTitle" className="bg-zinc-700 text-white dark:bg-white dark:text-black rounded-md">
				Nome (Z a A)
			</option>
			<option value="highestPrice" className="bg-zinc-700 text-white dark:bg-white dark:text-black rounded-md">
				Preço (maior para menor)
			</option>
			<option value="lowestPrice" className="bg-zinc-700 text-white dark:bg-white dark:text-black rounded-md">
				Preço (menor para maior)
			</option>
			<option value="size" className="bg-zinc-700 text-white dark:bg-white dark:text-black rounded-md">
				Tamanho
			</option>
			<option value="color" className="bg-zinc-700 text-white dark:bg-white dark:text-black rounded-md">
				Cor
			</option>
		</select>
	);
}
