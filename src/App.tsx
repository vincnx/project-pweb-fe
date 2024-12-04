import { Navigate, Route, Routes, useLocation } from "react-router-dom"
import HomePage from "./pages/HomePage"
import ProductsPage from "./pages/ProductsPage"
import AdminProductsPage from "./pages/admin/products/ProductsPage"
import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import ProductPage from "./pages/ProductPage"
import LoginPage from "./pages/LoginPage"
import RegisterPage from "./pages/RegisterPage"
import CartPage from "./pages/CartPage"
import { useUserHydration } from "./hooks/useUserHydration"
import DashboardPage from "./pages/admin/DashboardPage"
import CreateProductPage from "./pages/admin/products/CreateProductPage"
import EditProductPage from "./pages/admin/products/EditProductPage"
import TransactionsPage from "./pages/admin/transactions/TransactionsPage"
import { useSelector } from "react-redux"
import { RootState } from "./store/store"


function App() {
  const location = useLocation()
  const { isHydrated } = useUserHydration()
  const userSelector = useSelector((state: RootState) => state.user)

  const showHeader = !(
    location.pathname === '/login' ||
    location.pathname === '/register' ||
    location.pathname.startsWith('/admin')
  )
  const showFooter = !(
    location.pathname === '/login' ||
    location.pathname === '/register' ||
    location.pathname === '/cart' ||
    location.pathname.startsWith('/admin')
  )

  if (!isHydrated) return <div>Loading...</div>

  return (
    <>
      {showHeader && <Header />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        <Route path="/cart" element={userSelector.role === 'admin' ? <Navigate to="/" replace /> : <CartPage />} />
        <Route path="/product" element={<ProductsPage />} />
        <Route path="/product/:productId" element={<ProductPage />} />

        <Route path="/admin">
          <Route path="" element={<Navigate to="dashboard" replace />} />
          <Route path="dashboard" element={<DashboardPage />} />
          <Route path="transaction" element={<TransactionsPage />} />
          <Route path="product/create" element={<CreateProductPage />} />
          <Route path="product/:productId/edit" element={<EditProductPage />} />
          <Route path="product" element={<AdminProductsPage />} />
        </Route>

      </Routes>
      {showFooter && <Footer />}
    </>
  )
}

export default App
