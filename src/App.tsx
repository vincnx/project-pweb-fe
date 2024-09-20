import { Route, Routes, useLocation } from "react-router-dom"
import HomePage from "./pages/HomePage"
import ProductsPage from "./pages/ProductsPage"
import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import ProductPage from "./pages/ProductPage"
import LoginPage from "./pages/LoginPage"
import RegisterPage from "./pages/registerPage"


function App() {
  const location = useLocation()

  const showHeaderFooter = !(
    location.pathname === '/login' ||
    location.pathname === '/register'
  )

  return (
    <>
      {showHeaderFooter && <Header />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        <Route path="/product" element={<ProductsPage />} />
        <Route path="/product/:productId" element={<ProductPage />} />
      </Routes>
      {showHeaderFooter && <Footer />}
    </>
  )
}

export default App
