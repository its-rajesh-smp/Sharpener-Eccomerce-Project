import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App/App'
import './index.css'
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min'

import { HeaderLinksCTXProvider } from './Context/HeaderLinksCTX'
import { CartCTXProvider } from './Context/CartCTX'


ReactDOM.createRoot(document.getElementById('root')).render(
  <HeaderLinksCTXProvider>
    <CartCTXProvider>
      <React.StrictMode>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </React.StrictMode>
    </CartCTXProvider>
  </HeaderLinksCTXProvider>
)
