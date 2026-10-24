import { useEffect, useState } from "react"
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom"

import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

import Home from "./pages/Home"
import About from "./pages/About"
import Programs from "./pages/Programs"
import Services from "./pages/Services"
import Gallery from "./pages/Gallery"
import Contact from "./pages/Contact"
import Donate from "./pages/Donate"   // ✅ FIX: proper import

// Scroll to top
const ScrollToTop = () => {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [pathname])
  return null
}

function App() {
  const [showScrollBtn, setShowScrollBtn] = useState(false)

  useEffect(() => {
    const handleScroll = () => setShowScrollBtn(window.scrollY > 400)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />

        {/* ✅ FIX: Donate route added */}
        <Route path="/donate" element={<Donate />} />
      </Routes>

      <Footer />

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/918757113845"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full shadow-lg hover:scale-110 transition-transform duration-200"
        style={{ backgroundColor: "#25D366" }}
      >
        💬
      </a>

      {/* Scroll Button */}
      {showScrollBtn && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-24 right-6 z-50 w-12 h-12 bg-[#0B1F3A] text-white rounded-full shadow-lg flex items-center justify-center hover:bg-black"
        >
          ↑
        </button>
      )}
    </BrowserRouter>
  )
}

export default App