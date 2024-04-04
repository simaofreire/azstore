import { NextRequest, NextResponse } from 'next/server';
import { randomUUID } from 'node:crypto';
import { ProductsProps } from './types';

export async function GET(req: NextRequest) {
	try {
		const slug = decodeURIComponent(req.nextUrl.pathname.split('/')[3]);

		const response = await fetch('https://fakestoreapi.com/products');

		const products = await response.json();

		const data = products.map((product: ProductsProps) => ({
			id: randomUUID(),
			title: product.title,
			slug: product.title,
			description: product.description,
			price: product.price,
			image: product.image,
			colors: randomColors(),
			sizes: randomSizes()
		}));

		if (slug && slug !== 'undefined') {
			const product = data.find((product: ProductsProps) => product.slug.includes(slug));

			if (!product) {
				return NextResponse.error();
			}

			return NextResponse.json(product);
		}

		return NextResponse.json(data);
	} catch (error) {
		console.error('Error:', error);
		return NextResponse.error();
	}
}

function randomColors() {
	const colors = ['red', 'blue', 'green', 'yellow', 'black', 'white', 'orange', 'purple'];
	let result: string[] = [];
	const count = Math.floor(Math.random() * colors.length) + 1;
	for (let i = 0; i < count; i++) {
		const random = Math.floor(Math.random() * colors.length);
		if (!result.includes(colors[random])) {
			result.push(colors[random]);
		}
	}
	return result;
}

function randomSizes() {
	const sizes = ['PP', 'P', 'M', 'G', 'GG'];
	let result: string[] = [];
	const count = Math.floor(Math.random() * sizes.length) + 1;
	for (let i = 0; i < count; i++) {
		const random = Math.floor(Math.random() * sizes.length);
		if (!result.includes(sizes[random])) {
			result.push(sizes[random]);
		}
	}
	return result;
}
