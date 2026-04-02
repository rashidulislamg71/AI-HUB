
import React, { Suspense } from 'react'
import NavBar from './Components/NavBar/NavBar'
import "./App.css"
import HeroBanner from './Components/HeroBanner/HeroBanner'
import Products from './Components/Products/Products';

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
  return (
    <div>
      <nav>
        <NavBar />
      </nav>

      <main>
        <section>
          <HeroBanner />
        </section>

        <section>
         <Suspense  fallback ={<span>Loading...</span>}>
           <Products promiseProducts={promiseProducts} />
         </Suspense>
        </section>
      </main>

    </div>
  )
}

export default App