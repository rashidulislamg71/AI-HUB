
import React from 'react'
import NavBar from './Components/NavBar/NavBar'
import "./App.css"
import HeroBanner from './Components/HeroBanner/HeroBanner'

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
      </main>

    </div>
  )
}

export default App