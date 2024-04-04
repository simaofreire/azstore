import { ProductsProps } from "@/app/api/[...products]/types";

type ProductDescriptionProps = Pick<ProductsProps, 'description'>;

export default function ProductDescription({ description }: ProductDescriptionProps) {
	return (
		<>
			<h2 className="text-xl font-bold dark:text-white">Descrição</h2>
			<p className="text-md dark:text-white">{description}</p>
		</>
	);
}
