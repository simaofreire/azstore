import { ProductsProps } from '@/app/api/[...products]/types';
import Image from 'next/image';

type ProductHeaderProps = Pick<ProductsProps, 'title' | 'image'>;

export default function ProductHeader({ title, image }: ProductHeaderProps) {
	return (
		<>
			<h1 className="text-2xl font-bold dark:text-white text-center">{title}</h1>
			<Image
				src={image}
				alt={title}
				width={300}
				height={300}
				className="rounded-lg group-hover:scale-105 transition-transform max-w-[400px] w-full max-h-[600px] h-full object-contain"
				loading="lazy"
			/>
		</>
	);
}
