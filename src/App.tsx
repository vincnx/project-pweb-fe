import { Route, Routes, useLocation } from "react-router-dom"
import HomePage from "./pages/HomePage"
import ProductsPage from "./pages/ProductsPage"
import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import ProductPage from "./pages/ProductPage"
import LoginPage from "./pages/LoginPage"
import RegisterPage from "./pages/RegisterPage"
import CartPage from "./pages/CartPage"


function App() {
  const location = useLocation()

  const showHeader = !(
    location.pathname === '/login' ||
    location.pathname === '/register'
  )
  const showFooter = !(
    location.pathname === '/login' ||
    location.pathname === '/register' ||
    location.pathname === '/cart'
  )

  return (
    <>
      {showHeader && <Header />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        <Route path="/cart" element={<CartPage />} />
        <Route path="/product" element={<ProductsPage />} />
        <Route path="/product/:productId" element={<ProductPage />} />
      </Routes>
      {showFooter && <Footer />}
    </>
  )
}

export default App
