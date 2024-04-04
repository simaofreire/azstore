import ReturnToHome from '@/app/_components/returnToHome';
import { Metadata, ResolvingMetadata } from 'next';
import ProductColors from './_components/productColors';
import ProductDescription from './_components/productDescription';
import ProductHeader from './_components/productHeader';
import ProductPrice from './_components/productPrice';
import ProductSizes from './_components/productSizes';

interface ProductProps {
	params: { slug: string };
}

export default async function Product({ params }: ProductProps) {
	const slug = decodeURIComponent(params.slug);
	const product = await getProduct(slug);

	return (
		<div className="flex flex-col items-center w-full p-2">
			<div className="flex flex-col max-w-[1000px] w-full items-center">
				<div className="flex items-start w-full ">
					<ReturnToHome />
				</div>

				<div className="flex pt-2 md:flex-col">
					<div className="flex flex-col items-center">
						<ProductHeader image={product.image} title={product.title} />
					</div>

					<div className="flex flex-col pl-5 justify-end items-end gap-2 md:mt-2">
						<ProductPrice price={product.price} />

						<ProductSizes sizes={product.sizes} />

						<ProductColors colors={product.colors} />
					</div>
				</div>

				<div>
					<ProductDescription description={product.description} />
				</div>
			</div>
		</div>
	);
}

async function getProduct(slug: string) {
	const res = await fetch(`http://localhost:3000/api/products/${slug}`);
	const product = await res.json();

	return product;
}

export async function generateMetadata({ params }: ProductProps, parent?: ResolvingMetadata): Promise<Metadata> {
	const slug = decodeURIComponent(params.slug);
	const product = await getProduct(slug);

	return {
		title: product.title
	};
}
