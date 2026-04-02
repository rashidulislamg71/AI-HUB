
import React, { use } from 'react'
import ProductCard from './ProductCard';

function Products({ promiseProducts }) {
    const products = use(promiseProducts).products;
    console.log(products);
    return (
        <div className='px-4 py-10 md:p-16'>

            <div>

                <div className=' text-center'>
                    <h1 className='text-3xl md:text-4xl text-teal-400 font-bold'>Lorem ipsum dolor sit amet.</h1>
                    <p className='text-gray-400 w-90 leading-5 my-4 m-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo nostrum sequi molestias minus maxime dolor?</p>
                </div>
                <div className='flex items-center m-auto border w-fit gap-2 rounded-full my-10 md:mb-15'>
                    <button className='py-1 px-3 bg-green-400 rounded-full text-white font-bold cursor-pointer hover:text-teal-900 duration-500 '>Products </button>
                    <button className='py-1 px-3 bg-green-400 rounded-full text-white font-bold cursor-pointer hover:text-teal-900 duration-500 '>Cart (0)</button>
                </div>
            </div>

            <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    products.map(item => <ProductCard key={item.id} product={item} />)
                }
            </ul>
        </div>
    )
}

export default Products