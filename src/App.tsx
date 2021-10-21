import React from 'react'
import { Categories, Featured, Header, About, Footer } from './components'
import { Home } from './pages'

function App() {
  return (
    <>
      <Header />
      <Home />
      <Categories />
      <Featured />
      <About />
      <Footer />
    </>
  )
}

export default App
