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
    fetch('https://audiophile-store.herokuapp.com/products')
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
