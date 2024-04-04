'use client';

import { ProductsProps } from '@/app/api/[...products]/types';
import { useState } from 'react';

type ProductColorsProps = Pick<ProductsProps, 'colors'>;

export default function ProductColors({ colors }: ProductColorsProps) {
	const [selectedColor, setSelectedColor] = useState('');
	return (
		<>
			<span className="dark:text-white">Cores disponíveis</span>
			<div className="gap-4 flex items-center justify-center p-2 bg-black/60 rounded-full border-2 border-zinc-500 h-8">
				{colors.map((color: string) => (
					<button
						key={color}
						className={`flex items-center justify-center w-4 h-4 rounded-full ${
							selectedColor === color ? 'border-2 border-zinc-500 w-8 h-8' : ''
						}`}
						style={{ backgroundColor: color }}
						aria-label={`cor ${color}`}
						onClick={() => setSelectedColor(color)}
					/>
				))}
			</div>
		</>
	);
}
