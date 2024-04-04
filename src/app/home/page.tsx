import dynamic from 'next/dynamic';
import { ProductsProps } from '../api/[...products]/types';
const ProductList = dynamic(() => import('./_components/product-list'), {
	loading: () => <p>Loading...</p>,
	ssr: false
});

interface HomeProps {
	searchParams?: {
		search?: string;
		filter?: string;
	};
}

export default async function Home({ searchParams }: HomeProps) {
	const data = await getProducts();
	const search = searchParams?.search?.toLowerCase() || '';
	const filter = searchParams?.filter || '';

	return (
		<div className="mx-auto flex flex-col min-h-screen w-full max-w-[1600px] gap-5 p-8 dark:bg-zinc-700 justify-start items-center">
			<div className="grid justify-center items-center grid-cols-3 grid-rows-3 gap-6 md:grid-cols-2 sm:grid-cols-1 md:grid-rows-2 ">
				{data
					.filter((val) => val.title.toLowerCase().includes(search))
					.sort((a, b) => {
						const params: { [key: string]: number } = {
							startToEndtitle: a.title.localeCompare(b.title),
							endToStartTitle: b.title.localeCompare(a.title),
							lowestPrice: a.price - b.price,
							highestPrice: b.price - a.price,
							size: a.sizes.length - b.sizes.length,
							color: a.colors.length - b.colors.length
						};
						return filter ? params[filter] : 0;
					})
					.map((product) => (
						<ProductList product={product} key={product.id} />
					))}
			</div>
		</div>
	);
}

async function getProducts(): Promise<ProductsProps[]> {
	const res = await fetch('http://localhost:3000/api/products', { next: { revalidate: 60 * 60 } });
	const products = await res.json();

	return products;
}
