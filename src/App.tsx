import React from 'react'
import {
  Categories,
  Featured,
  Header,
  About,
  Footer,
  Products,
} from './components'
import { Home } from './pages'

function App() {
  return (
    <>
      <Header />
      <Products />
      <Categories />
      <Featured />
      <About />
      <Footer />
    </>
  )
}

export default App
