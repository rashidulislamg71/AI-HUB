import React from 'react'

function ProductCard({ product }) {

    const formattingDescription = (wordChr) => {
        return product.description.length > wordChr
            ? product.description.slice(0, wordChr) + "..."
            : product.description;
    }

    return (
        <div className='group border border-gray-300 rounded-xl overflow-hidden shadow-lg '>

            <div className='w-full bg-gray-200 overflow-hidden'>
                <img
                    className='h-40 w-40 m-auto object-contain transform group-hover:scale-110 transition duration-300'
                    src={product.img}
                    alt={product.name}
                />
            </div>

            <div className='p-5 flex flex-col gap-2'>
                <h3 className='text-2xl font-bold'>{product.name}</h3>
                <p className='text-sm text-gray-500'>{formattingDescription(80)}</p>
                <h3 className='text-xl font-bold text-green-700'>$ {product.price}/month</h3>

                <button className='mt-4 btn w-full bg-linear-to-r from-green-500 to-teal-400 text-white font-bold rounded-full hover:from-teal-500  transition-all duration-300'>
                    Subscribe
                </button>
            </div>
        </div>
    )
}

export default ProductCard