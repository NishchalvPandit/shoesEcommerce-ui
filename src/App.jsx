import { BrowserRouter } from 'react-router-dom'
import { Navbar, Footer } from './components'
import AppRoutes from './routes/AppRoutes'
import { CartProvider } from './context/CartContext'
import './App.css'

const routerBase = import.meta.env.BASE_URL.replace(/\/$/, '') || '/'

function App() {
  return (
    <BrowserRouter basename={routerBase}>
      <CartProvider>
        <div className="app font-sora antialiased">
          <Navbar />
          <main className="app-main">
            <AppRoutes />
          </main>
          <Footer />
        </div>
      </CartProvider>
    </BrowserRouter>
  )
}

export default App
