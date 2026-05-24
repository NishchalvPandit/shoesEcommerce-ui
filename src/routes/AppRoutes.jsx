import { Routes, Route } from 'react-router-dom'
import {
  Home,
  Shop,
  ProductDetails,
  Cart,
  Checkout,
  Login,
  Signup,
  ForgotPassword,
  Dashboard,
} from '../pages'

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/product/:id" element={<ProductDetails />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/dashboard" element={<Dashboard />} />
      {/* Avoid blank main when pathname isn’t "/" (e.g. file URLs, static hosts without SPA fallback) */}
      <Route path="*" element={<Home />} />
    </Routes>
  )
}

export default AppRoutes
