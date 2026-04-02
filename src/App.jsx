
import React, { Suspense, useState } from 'react'
import NavBar from './Components/NavBar/NavBar'
import "./App.css"
import HeroBanner from './Components/HeroBanner/HeroBanner'
import Products from './Components/Products/Products';
import Carts from './Components/Carts/Carts';
import Footer from './Components/Footer/Footer';

const fetchProducts = async () => {
  try {
    const res = await fetch("/public/productsData.json");
    return res.json();
  }
  catch (error) {
    console.log(error);
  }
};

const promiseProducts = fetchProducts();

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [active, setActive] = useState("product");
  const activeBtnStyle = " bg-linear-to-r from-green-500 to-teal-400 text-white";


  const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);

  const addToCart = (product) => {
    const isExist = cartItems.find(item => item.id === product.id);
    if (isExist) {
      alert("This item has already been added to the cart. Please select other products!")
    } else {
      setCartItems(prev => [...prev, product]);
    }
  }

  const removeItem = (item) => {
    const updateCart = cartItems.filter(data => data.id !== item.id);
    setCartItems(updateCart);
  }

  const proceedToCheckout = () => {
    setCartItems([])
  }

  return (
    <div>
      <nav>
        <NavBar cartItems={cartItems} />
      </nav>

      <main>
        <section>
          <HeroBanner />
        </section>

        <div className='pt-12 pb-8'>
          <div className='flex items-center m-auto border w-fit gap-2 rounded-full'>
            <button onClick={() => setActive("product")} className={`${active === "product" ? `${activeBtnStyle}` : "bg-none "} text-teal-800 py-1 px-3
                      rounded-full font-bold cursor-pointer hover:text-teal-500 duration-500 `}>Products </button>
            <button onClick={() => setActive("cart")} className={`${active === "cart" ? `${activeBtnStyle}` : "bg-none "} py-1 px-3  rounded-full text-teal-800 font-bold cursor-pointer hover:text-teal-500 duration-500  `} >Cart ({cartItems.length})</button>
          </div>
        </div>

        <section>
          <Suspense fallback={<span>Loading...</span>}>
            {active === "product" && <Products promiseProducts={promiseProducts} addToCart={addToCart} active={active} setActive={setActive} />}

            {
              active === "cart" && <Carts cartItems={cartItems} removeItem={removeItem} proceedToCheckout={proceedToCheckout} totalPrice={totalPrice} />
            }
          </Suspense>
        </section>
      </main>

      <Footer />

    </div>
  )
}

export default App