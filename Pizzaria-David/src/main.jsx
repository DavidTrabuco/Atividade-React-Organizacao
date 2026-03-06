import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Pizzaria from  './Pizzaria'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Pizzaria /> 
  </StrictMode>,
)

