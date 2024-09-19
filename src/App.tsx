import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import ProductsPage from "./pages/ProductsPage"
import { Footer } from "./components/Footer"
import { Header } from "./components/Header"


function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product" element={<ProductsPage />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
