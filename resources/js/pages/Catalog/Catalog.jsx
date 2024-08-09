// src/components/Catalog/Catalog.jsx
import React from 'react';
import {Header, ProductCard} from '../../components/index.js';
import './Catalog.css';
import {useCart} from '../../context/CartContext';

const products = [
	{
		id: 1,
		image: 'path/to/image1.jpg',
		title: 'Product 1',
		description: 'Description of Product 1',
		price: 9.99,
	},
	{
		id: 2,
		image: 'path/to/image2.jpg',
		title: 'Product 2',
		description: 'Description of Product 2',
		price: 9.99,
	},
];

export const Catalog = () => {
	const {cartItems} = useCart();

	return (
		<>
			<Header />
			<div className='catalog'>
				<h2 className='catalog-title'>Product Catalog</h2>
				<div className='catalog-grid'>
					{products.map((product) => (
						<div className='catalog-item' key={product.id}>
							<ProductCard product={product} />
						</div>
					))}
				</div>
			</div>
		</>
	);
};
