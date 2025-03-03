import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import LanguageSelector from "./components/LanguageSelector"
import "./index.css"
import Trading from "./pages/services/Trading"
import AfterSale from "./pages/services/AfterSale"
import Warehousing from "./pages/services/Warehousing"
import NotFoundPage from "./pages/NotFoundPage"

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services/trading" element={<Trading />} />
          <Route path="/services/after-sale" element={<AfterSale />} />
          <Route path="/services/warehousing" element={<Warehousing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <LanguageSelector />
        <Footer />
      </div>
    </Router>
  )
}

export default App

