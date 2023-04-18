import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App/App'
import './index.css'
import { HeaderLinksCTXProvider } from './Context/HeaderLinksCTX'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HeaderLinksCTXProvider>
      <App />
    </HeaderLinksCTXProvider>
  </React.StrictMode>,
)
