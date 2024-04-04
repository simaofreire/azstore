'use client';
import { ProductsProps } from '@/app/api/[...products]/types';
import { useState } from 'react';

type ProductSizesProps = Pick<ProductsProps, 'sizes'>;

export default function ProductSizes({ sizes }: ProductSizesProps) {
	const [selectedSize, setSelectedSize] = useState('');
	return (
		<>
			<span className="dark:text-white">Tamanhos disponíveis</span>
			<div className="gap-4 flex items-center justify-center p-2 bg-black/60 rounded-full border-2 border-zinc-500 h-8">
				{sizes.map((size: string) => (
					<button
						key={size}
						className={`text-white flex items-center justify-center w-4 h-4 ${
							selectedSize === size ? 'bg-zinc-500 w-8 h-8 rounded-full' : ''
						} `}
						aria-label={`tamanho ${size}`}
						onClick={() => setSelectedSize(size)}
					>
						{size}
					</button>
				))}
			</div>
		</>
	);
}
