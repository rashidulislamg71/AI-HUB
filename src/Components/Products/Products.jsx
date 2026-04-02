
import React, { use } from 'react'
import ProductCard from './ProductCard';

function Products({ promiseProducts }) {
    const products = use(promiseProducts).products;
    console.log(products);
    return (
        <div className='px-4 py-10 md:p-16'>

            <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    products.map(item => <ProductCard key={item.id} product={item} />)
                }
            </ul>
        </div>
    )
}

export default Products