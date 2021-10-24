import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { HashRouter } from 'react-router-dom'
import './index.scss'
import { Provider } from 'react-redux'
import { store } from './redux/store'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter basename='/'>
        <App />
      </HashRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
