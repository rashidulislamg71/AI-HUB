
import React from 'react'

function SingleCart({ product, removeItem }) {
  return (
    <div className='bg-green-50 p-3 md:p-5 rounded-xl mt-4'>

      <div className='flex justify-between items-center'>
        <div className='flex items-center gap-3'>
          <img className='w-10 h-10 md:w-15 md:h-15 border border-violet-500 p-1.5 rounded-md ' src={product.img} alt={product.name} />
          <div>
            <h3 className='text-xl'>{product.name}</h3>
            <h3 className='text-gray-600'>$-{product.price.toFixed(2)}</h3>
          </div>
        </div>
        <button onClick={() => removeItem(product)} className='btn bg-orange-500 text-white hover:shadow-2xl'>Remove</button>
      </div>

    </div>
  )
}

export default SingleCart