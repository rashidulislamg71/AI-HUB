import React, { useState } from 'react'
import { FaCheck } from 'react-icons/fa';

function ProductCard({ product, addToCart }) {
    const [isSubscribe, setIsSubscribe] = useState(false);

    const formattingDescription = (wordChr) => {
        return product.description.length > wordChr
            ? product.description.slice(0, wordChr) + "..."
            : product.description;
    }

    const handleSubscribeBtn = (product) => {
        addToCart(product)
        setIsSubscribe(true);
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

                <button onClick={() => handleSubscribeBtn(product)} className={`mt-4 btn w-full bg-linear-to-r  text-white font-bold rounded-full hover:from-teal-500  transition-all duration-300 ${isSubscribe ? "bg-teal-600" : " from-green-500 to-teal-400"}`}>
                    {isSubscribe ? <> <FaCheck className='text-sm text-white' />  Subscribed </> : " Subscribe Now "}
                </button>
            </div>
        </div>
    )
}

export default ProductCard