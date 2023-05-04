import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App/App'
import './index.css'
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min'

import { HeaderLinksCTXProvider } from './Context/HeaderLinksCTX'
import { CartCTXProvider } from './Context/CartCTX'
import { LoginContextProvider } from './Context/LoginContext'


ReactDOM.createRoot(document.getElementById('root')).render(

  <LoginContextProvider>
    <HeaderLinksCTXProvider>
      <CartCTXProvider>

        <BrowserRouter>

          <App />


        </BrowserRouter>

      </CartCTXProvider>
    </HeaderLinksCTXProvider>
  </LoginContextProvider>

)
