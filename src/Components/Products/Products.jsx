
import React, { use } from 'react'
import ProductCard from './ProductCard';

function Products({ promiseProducts, addToCart }) {
    const products = use(promiseProducts);

    return (
        <div className='px-4 py-10 md:p-16 md:pt-0'>
            <div>
                <div className=' text-center'>
                    <h1 className='text-3xl md:text-4xl text-teal-400 font-bold'>Lorem ipsum dolor sit amet.</h1>
                    <p className='text-gray-400 w-90 leading-5 my-4 m-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo nostrum sequi molestias minus maxime dolor?</p>
                </div>

            </div>

            <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    products.map(item => <ProductCard key={item.id} product={item} addToCart={addToCart} />)
                }
            </ul>
        </div>
    )
}

export default Products