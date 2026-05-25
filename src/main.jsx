
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import CartContext from './context/CartContext.jsx'
import AuthProvider from './context/AuthProvider.jsx'

createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <CartContext>
      <App />
    </CartContext>
  </AuthProvider>

)
