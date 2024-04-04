import { ProductsProps } from '@/app/api/[...products]/types';
import Image from 'next/image';
import Link from 'next/link';

interface ProductListProps {
	product: ProductsProps;
}

export default function ProductList({ product }: ProductListProps) {
	return (
		<Link
			href={`/product/${product.slug}`}
			className="group relative rounded-lg bg-white  dark:bg-zinc-900 overflow-hidden flex flex-col justify-center items-center max-w-[400px] w-full h-[600px] md:h-[500px] p-1 "
		>
			<Image
				src={product.image}
				width={400}
				height={600}
				quality={100}
				alt={product.title}
				aria-label={`foto do produto ${product.title}`}
				className="group-hover:scale-105 transition-transform duration-500 max-w-[400px] w-full max-h-[600px] h-full object-contain"
				loading="lazy"
			/>

			<div className="absolute bottom-1 right-1 w-full flex flex-col items-end gap-1">
				<div className="flex p-2 bg-black/60 rounded-full border-2 border-zinc-500 gap-5">
					{product.sizes.map((size) => (
						<div
							key={size}
							className="text-xs  text-white flex items-center justify-center"
							aria-label={`tamanho ${size}`}
						>
							{size}
						</div>
					))}
				</div>

				<div className="gap-2 flex items-center justify-center p-2 bg-black/60 rounded-full border-2 border-zinc-500 h-8">
					{product.colors.map((color) => (
						<div
							key={color}
							className="w-4 h-4 rounded-full"
							style={{ backgroundColor: color }}
							aria-label={`cor ${color}`}
						/>
					))}
				</div>

				<div className="h-12 flex items-center justify-end gap-2 w-full max-w-[280px] rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
					<span className="text-sm truncate text-white" aria-label={product.title}>
						{product.title}
					</span>
					<span
						className="flex h-full text-white items-center justify-center rounded-full bg-violet-500 px-4 font-semibold"
						aria-label={`valor de ${product.price} reais`}
					>
						{product.price.toLocaleString('pt-br', {
							style: 'currency',
							currency: 'BRL',
							minimumFractionDigits: 0,
							maximumFractionDigits: 0
						})}
					</span>
				</div>
			</div>
		</Link>
	);
}
