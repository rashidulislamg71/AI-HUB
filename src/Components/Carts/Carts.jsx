import React from 'react'
import SingleCart from './SingleCart'
import { IoCartOutline } from 'react-icons/io5'

function Carts({ cartItems, removeItem, proceedToCheckout, totalPrice }) {
  return (
    <div className="max-w-7xl mx-auto bg-gray-200 p-5 md:p-10 rounded-2xl">

      {/* Grid Layout */}
      <div className="  ">
        <div>
          <h3 className='text-2xl font-bold text-center mb-10 text-green-500'>Your Cart</h3>
        </div>
        {
          cartItems.length > 0 ?
            (<div> {
              cartItems.map(data => <SingleCart key={data.id} product={data} removeItem={removeItem} />)
            }
              {/* total price  */}
              <div className='flex justify-between w-full p-5 bg-orange-400 mt-8 font-bold text-xl text-gray-100 rounded'>
                <p>Total:</p>
                <p>$-{totalPrice.toFixed(2)}</p>
              </div>

              {/* checkout btn  */}
              <div>
                <button onClick={proceedToCheckout} className='btn bg-linear-to-r from-green-500 to-violet-500 text-xl text-white w-full mt-10 hover:text-yellow-400' >Proceed To Checkout</button>
              </div>
            </div>)
            :
            (<div className="flex flex-col justify-center items-center  font-bold">
              <IoCartOutline className='text-4xl' />
              <p className='text-orange-600 text-xl'>Cart is Empty!</p>
            </div>)
        }
      </div>

    </div>
  )
}

export default Carts