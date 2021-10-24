import React from 'react'
import {
  Categories,
  Featured,
  Header,
  About,
  Footer,
  ScrollToTop,
} from './components'
import { Switch, Route } from 'react-router-dom'
import { Checkout, Home, Product, Products } from './pages'

function App() {
  const [data, setData] = React.useState<Array<Product>>()

  React.useEffect(() => {
    fetch('http://192.168.0.105:3001/products')
      .then(res => res.json())
      .then(data => {
        setData(data)
      })
  }, [])
  return (
    <>
      <Header />
      <ScrollToTop />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/checkout'>
          <Checkout />
        </Route>
        <Route exact path='/:type'>
          {data && <Products data={data} />}
        </Route>
        <Route exact path='/product/:id'>
          {data && <Product data={data} />}
        </Route>
      </Switch>
      <Categories />
      <Featured />
      <About />
      <Footer />
    </>
  )
}

export default App
