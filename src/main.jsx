import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App/App'
import './index.css'
import { HeaderLinksCTXProvider } from './Context/HeaderLinksCTX'
import { CartCTXProvider } from './Context/CartCTX'


ReactDOM.createRoot(document.getElementById('root')).render(
  <HeaderLinksCTXProvider>
    <CartCTXProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </CartCTXProvider>
  </HeaderLinksCTXProvider>
)
