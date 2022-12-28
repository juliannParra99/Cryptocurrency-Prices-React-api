import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import  'bootstrap/dist/css/bootstrap.min.css'
//css abajo de bootstrap para que este no sobreescriba los estilos css
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
