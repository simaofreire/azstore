import { ProductsProps } from '@/app/api/[...products]/types';

type ProductPriceProps = Pick<ProductsProps, 'price'>;

export default function ProductPrice({ price }: ProductPriceProps) {
	return (
		<>
			<span className="dark:text-white">Valor</span>
			<div className=" bg-black/60 rounded-full border-2 border-zinc-500 h-8">
				<h2 className="text-xl  text-white px-2">
					{price.toLocaleString('pt-br', {
						style: 'currency',
						currency: 'BRL',
						minimumFractionDigits: 0,
						maximumFractionDigits: 0
					})}
				</h2>
			</div>
		</>
	);
}
